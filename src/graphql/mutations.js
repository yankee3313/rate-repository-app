import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    mutation Mutation($credentials: AuthenticateInput!) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }`;

export const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
}`;