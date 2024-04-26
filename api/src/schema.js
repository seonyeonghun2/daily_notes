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
export { typeDefs, todos };
