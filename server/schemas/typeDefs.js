const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type SorcerersSphere {
    _id: ID
    text: String
    voteCount: Int
  }
  type MagicMark {
    _id: ID
    text: String
    voteCount: Int
  }
  type LightWorker {
    _id: ID
    text: String
    voteCount: Int
  }
  type CashMoney {
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