// GraphQL schema : Int, Float, String, Boolean, ID
const typeDefs = `#graphql
  type Note {
    id: String,
    title: String!,
    content: String!,
    due_date: String!,
    isDone: Boolean,
    invitee_id: String!
  }
  type Invitee {
    id: String!,
    nickname: String!,
    relation: String!,
    email: String
  }
  type Query {
    notes: [Note]!,
    note(id: String!): Note,
    invitees: [Invitee],
    invitee(id: String!): Invitee
  }
  type Mutation {
    newNote(content: String): Note!
  }
`;

export default typeDefs;
