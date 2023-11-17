import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const getReviews = (id) => {
    const { data, error, loading, refetch } = useQuery(GET_REVIEWS,
        {variables: { repositoryId: id }});
        
    return { data, refetch };
}

export default getReviews;