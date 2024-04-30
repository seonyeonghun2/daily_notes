import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema.js';
import db from './db.js';
// Create a custom plugin to log request information
const requestLoggerPlugin = {
  requestDidStart(requestContext) {
    const { request } = requestContext;
    const { method, url, headers } = request.http;

    // Log request details
    console.log(`Incoming Request - Method: ${method}, URL: ${url}`);
    console.log('Headers:', headers);

    return {
      // Optional function to run before execution of the query
      // If needed, you can add more lifecycle hooks here
    };
  },
};

// Graphql resolvers - Query or Mutation
const resolvers = {
  Query: {
    notes: () => db.notes,
    note: (parent, args) => {
      return db.notes.find((note) => note.id === args.id);
    },
    invitees: () => db.invitees,
    invitee: (parent, args) => {
      return db.invitees.find((invitee) => invitee.id === args.id);
    },
    authors: () => db.authors,
    author: (parent, args) => {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Mutation: {
    newNote: (parent, args) => {
      try {
        // 새로운 노트 생성
        let note = {
          id: String(db.notes.length + 1),
          title: args.title,
          content: args.content,
          due_date: "2024-04-30",
          isDone: false,
          invitee_id: args.invitee_id,
          author_id: "1000"
        };
  
        // notes 배열에 새로운 노트 추가
        db.notes.push(note);
  
        // 생성된 노트 객체 반환
        return note; // note 객체는 모든 필수 필드를 포함하고 있어야 함
      } catch (error) {
        // 오류 발생 시 적절한 오류 처리
        console.error('Failed to create new note:', error);
        throw new Error('Failed to create new note'); // 뮤테이션 실패 처리
      }
    },
  },
  
};

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [requestLoggerPlugin],
    cors: {
      origin: '*',
      credentials: false,
    },
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000, path: '/api' },
  });

  console.log(`Server ready at ${url}`);
};

// Start the Apollo Server
startApolloServer().catch((error) => {
  console.error('Failed to start Apollo Server:', error);
});
