import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from './schema.js';
import resolvers from './resolvers.js'

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
