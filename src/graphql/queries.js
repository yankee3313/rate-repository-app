import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Query {
        repositories {
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
    }`;

export const GET_USER = gql `
    query Query{
        me {
            id
            username
        }
    }`;

export const GET_GITHUB_URL = gql `
    query Query($repositoryId: ID!) {
        repository(id: $repositoryId) {
        id
        fullName
        url
        }
    }
`