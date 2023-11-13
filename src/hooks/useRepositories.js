import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortingOptions) => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES,
        {variables: { orderBy: sortingOptions.orderBy, orderDirection: sortingOptions.orderDirection }});

    return loading ? {} : data;
}

export default useRepositories;