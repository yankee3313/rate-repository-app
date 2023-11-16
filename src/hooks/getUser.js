import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const getUser = ( includeReviews ) => {
    const { data, error, loading, refetch } = useQuery(GET_USER, 
        {variables: { includeReviews }});

    return loading ? null : { data, refetch } ;
}

export default getUser;