import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';
import { useEffect } from 'react';

const getReviews = (id, first, after) => {
    const { data, error, loading, refetch, fetchMore } = useQuery(GET_REVIEWS, {
        variables: { 
            repositoryId: id,
            first: first,
            after: after
         }});

    const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
        return;
    }

    fetchMore({
        variables: {
            first: 2,
            after: data.repository.reviews.pageInfo.endCursor,
        }
    });
    };

    useEffect(() => {refetch()}, [id]);
    
    console.log(data, 'getReviews')
        
    return {
        data,
        fetchMore: handleFetchMore,
        loading
    };
}

export default getReviews;