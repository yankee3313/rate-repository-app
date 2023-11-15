import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
  query Query ($includeReviews: Boolean = false){
    me {
      reviews @include(if: $includeReviews) {
        edges {
          node {
            rating
            repositoryId
            repository {
              fullName
            }
            text
            createdAt
            user {
              username
            }
            id
          }
        }
      }
      id
      username
    }
  }
  `;

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