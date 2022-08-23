import { gql } from "graphql-tag";

// mutation for logged in user
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// mutation to add user
const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

const UPVOTE = gql`
  mutation upvote($username: String! $_id: ID!) {
    upvote(username: $username, _id: $_id) {
      token
      sphericle {
        _id
        text
        voteCount
      }
    }
  }
`;

const DOWNVOTE = gql`
  mutation downvote($username: String! $_id: ID!) {
    downvote(username: $username, _id: $_id) {
      token
      sphericle {
        _id
        text
        voteCount
      }
    }
  }
`;

export { LOGIN_USER, ADD_USER, UPVOTE, DOWNVOTE }