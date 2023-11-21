import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortingOptions, deBounceValue, first, after) => {
    const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES,
        {variables: { orderBy: sortingOptions.orderBy, 
            orderDirection: sortingOptions.orderDirection,
            searchKeyword: deBounceValue,
            first: first,
            after: after }});
    

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
            return;
        }

    
        fetchMore({
            variables: {
            first: 2,
            after: data.repositories.pageInfo.endCursor,
            orderBy: sortingOptions.orderBy, 
            orderDirection: sortingOptions.orderDirection,
            searchKeyword: deBounceValue
            },
        });
        };

    return loading ? {} : {repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result,};
}

export default useRepositories;