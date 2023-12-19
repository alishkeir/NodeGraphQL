export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
  }
  input AddGameInput {
    title: String!,
    platform: [String!]!
  }
`;

// available DataTypes are (Int, Float, String, Boolean, ID)
// (!) is used for non-null
// type Query is required for all queries of GraphQL which marks the relations and the query variables
// type Mutation is required for all mutations of GraphQL which marks the relations and the mutation variables
// we use input to make list of required props, other than writing all of them inside the function params
