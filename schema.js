export const typeDefs = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
}
type Review{
    id: ID!
    rating: Int!
    content: String!
}
type Author{
    id: ID!
    name: String!
    verified: Boolean!
}
type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
}

`;

// available DataTypes are (Int, Float, String, Boolean, ID)
// (!) is used for non-null
// type Query is required for all queries of GraphQL which marks the relations
