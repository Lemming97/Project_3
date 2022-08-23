import { gql } from "graphql-tag";

const GET_ME = gql`
  query {
    me {
      _id
      username
      email
    }
  }
`;

const GET_EVERYONE = gql`
query {
  getAllUsers {
    _id
    username
    email
  }
}
`;

const GET_ONE_ANSWER = gql`
  query {
    getSingleSphericle($_id: ID!) {
      getSingleSphericle(_id: $id) {
        text
        category
        voteCount
      }
    }
  }
`;

const GET_BY_CATEGORY = gql`
  query {
    getByCategory($category: String!) {
      getByCategory(category: $category) {
        text
        category
        voteCount
      }
    }
  }
`;

export { GET_ME, GET_EVERYONE, GET_ONE_ANSWER, GET_BY_CATEGORY };