import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// GraphQL schema
const typeDefs = `#graphql
  type Todo {
    id: String,
    title: String!,
    content: String!,
    isDone: Boolean
  }
  type Query {
    todos: [Todo]!,
    todo(id: String!): Todo
  }
`;

// mockup data
const todos = [
  {
    id: '1',
    title: 'The moon',
    content: 'Hello World!',
    isDone: false,
  },
  {
    id: '2',
    title: 'The Sunset',
    content: 'say Goodbye',
    isDone: false,
  },
  {
    id: '3',
    title: 'Time goes by',
    content: 'Missing You!',
    isDone: false,
  },
];

// Graphql resolvers
const resolvers = {
  Query: {
    todos: () => todos,
    todo: (parent, args) => {
      return todos.find((todo) => todo.id === args.id);
    },
  },
};
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

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [requestLoggerPlugin],
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