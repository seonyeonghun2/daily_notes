// GraphQL schema : Int, Float, String, Boolean, ID
const typeDefs = `#graphql
  type Todo {
    id: String,
    title: String!,
    content: String!,
    isDone: Boolean
  }
  type Author {
    id: String!,
    fname: String!,
    lname: String!,
    email: String
  }
  type Query {
    todos: [Todo]!,
    todo(id: String!): Todo,
    authors: [Author],
    author(id: String!): Author
  }
`;

export default typeDefs;
