import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const getUser = () => {
    const { data, error, loading } = useQuery(GET_USER);

    return loading ? {} : data;
}

export default getUser;