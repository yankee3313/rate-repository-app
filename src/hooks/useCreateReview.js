import { useMutation, useApolloClient } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useCreateReview = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownername, repositoryname, rating, reviewtext }) => {

      const { data } = await mutate({ownername, repositoryname, rating, reviewtext});

      console.log(data)
      
      return data;

  };

  return [createReview, result];
  };

export default useCreateReview;