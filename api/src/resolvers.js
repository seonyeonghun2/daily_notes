import { todos } from './schema.js';
// Graphql resolvers
const resolvers = {
  Query: {
    todos: () => todos,
    todo: (parent, args) => {
      return todos.find((todo) => todo.id === args.id);
    },
  },
};

export default resolvers;
