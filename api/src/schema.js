// GraphQL schema : Int, Float, String, Boolean, ID
const typeDefs = `#graphql
  type Note {
    id: String,
    title: String!,
    content: String!,
    due_date: String!,
    isDone: Boolean,
    invitee_id: [String!]!,
    author_id: String!
  }
  type Invitee {
    id: String!,
    nickname: String!,
    relation: String!,
    photo: String,
    phone: String
  }
  type Author {
    id: String!,
    name: String!,
    created_at: String!
  }
  type Query {
    notes: [Note]!,
    note(id: String!): Note,
    invitees: [Invitee]!,
    invitee(id: String!): Invitee,
    authors: [Author]!,
    author(id: String!): Author
  }
  type Mutation {
    newNote(title: String!,content: String!, invitee_id: [String!]!): Note!
    delNote(id: String!):
  }
`;

export default typeDefs;
