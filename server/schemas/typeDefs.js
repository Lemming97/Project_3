const { gql } = require("apollo-server-express");
const { QuestionFilter } = require("???");

const typeDefs = gql`
  type Sphericle {
    _id: ID
    text: String
    category: String
    voteCount: Int
    getRandom(): text
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
  type Query {
    me(): User
    getAllUsers(): [User]
    getSingleSphericle(_id: ID!, category: String!): Sphericle
    getByCategory(category: String!): [Sphericle]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    upvote(_id:ID!): Sphericle
    downvote(_id:ID!): Sphericle
  }
`;

module.exports = typeDefs;