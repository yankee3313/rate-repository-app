import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useEffect } from 'react';

const useRepositories = (sortingOptions, searchValue, first, after) => {
    const { data, error, loading, fetchMore, refetch } = useQuery(GET_REPOSITORIES, {
        variables: { 
            orderBy: sortingOptions.orderBy, 
            orderDirection: sortingOptions.orderDirection,
            searchKeyword: searchValue,
            first: first,
            after: after 
        }
    });

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
                searchKeyword: searchValue
            }
        });
        };

    useEffect(() => {
        refetch({
            orderBy: sortingOptions.orderBy,
            orderDirection: sortingOptions.orderDirection,
            searchKeyword: searchValue,
        });
        }, [sortingOptions, searchValue]);    

    return loading ? {} : {
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading
    };
}

export default useRepositories;