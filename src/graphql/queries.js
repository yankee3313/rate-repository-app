import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          name
          description
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
          language
          ownerAvatarUrl
          fullName
          id
        }
      }
    }
  }
`;

export const GET_USER = gql `
    query Query{
        me {
            id
            username
        }
    }`;

export const GET_REPOSITORY = gql `
    query Query($repositoryId: ID!) {
        repository(id: $repositoryId) {
        id
        fullName
        url
        name
        description
        forksCount
        stargazersCount
        reviewCount
        ratingAverage
        language
        ownerAvatarUrl
        }
    }
`;

export const GET_REVIEWS = gql `
  query Repository($repositoryId: ID!) {
      repository(id: $repositoryId) {
        id
        fullName
        reviews {
          edges {
            node {
              id
              text
              rating
              createdAt
              user {
                id
                username
              }
            }
          }
        }
      }
  }
`;