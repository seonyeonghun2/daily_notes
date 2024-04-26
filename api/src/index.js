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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000, path: '/api' },
});

console.log(`server ready at http://localhost:4000/api`);
