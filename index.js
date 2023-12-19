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
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
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
