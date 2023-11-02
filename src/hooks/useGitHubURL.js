import { useQuery } from '@apollo/client';
import { GET_GITHUB_URL } from '../graphql/queries';

const useGitHubURL = () => {
    const { data, error, loading } = useQuery(GET_GITHUB_URL);

    return loading ? {} : data;
}

export default useGitHubURL;