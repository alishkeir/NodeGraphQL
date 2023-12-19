import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// data
import db from './_db.js';

// types
import { typeDefs } from './schema';

// resolvers
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
  },
};

// server setup
const server = new ApolloServer({
  // typeDefs -- definitions of types of data
  typeDefs,
  
  resolvers,
});

// start server
const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log('Server running on PORT 4000');
