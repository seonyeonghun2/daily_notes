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
export default typeDefs;