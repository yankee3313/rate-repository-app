import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const getReviews = (id) => {
    const { data, error, loading } = useQuery(GET_REVIEWS,
        {variables: { repositoryId: id }});
        
    return loading ? null : data;
}

export default getReviews;