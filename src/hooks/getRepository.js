import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const getRepository = (id) => {
    const { data, error, loading } = useQuery(GET_REPOSITORY, 
        {variables: { repositoryId: id }, fetchPolicy: 'cache-and-network'}
        );

    return loading ? {} : data;
}

export default getRepository;