const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type Sphere1 {
    _id: ID
    text: String
    voteCount: Int
  }
  type Sphere2 {
    _id: ID
    text: String
    voteCount: Int
  }
  type Sphere3 {
    _id: ID
    text: String
    voteCount: Int
  }
  type Sphere4 {
    _id: ID
    text: String
    voteCount: Int
  }
  type User {
    _id: ID
    username: String
    email: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  
  }
`;

module.exports = typeDefs;