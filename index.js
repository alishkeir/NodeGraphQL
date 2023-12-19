import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import { typeDefs } from './schema';

// server setup
const server = new ApolloServer({
  // typeDefs -- definitions of types of data
  typeDefs,
});

// start server
const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log('Server running on PORT 4000');
