import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const getUser = ( includeReviews ) => {
    const { data, error, loading, refetch } = useQuery(GET_USER, 
        {variables: { includeReviews }});
        console.log(data, 'getUser')

    return { data, refetch } ;
}

export default getUser;