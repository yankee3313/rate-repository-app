import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE} from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {

      const { data } = await mutate({variables: {credentials: {username, password}}});

      const { accessToken } = data.authenticate;

      if (accessToken){
        await authStorage.setAccessToken(accessToken);
        apolloClient.resetStore();
      }
      
      return data;

  };

  return [signIn, result];
  };

export default useSignIn;