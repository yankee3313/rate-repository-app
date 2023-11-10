import Text from './Text';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  signInForm: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    display: 'flex',
  },
  submitButton: {
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    color: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10
  },
  buttonText: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});

const validationSchema = yup.object().shape({
    ownername: yup
        .string()
        .required('Owner Name is required'),
    repositoryname: yup
        .string()
        .required('Repository Name is required'),
    rating: yup
        .number()
        .required('Rating is required'),
    reviewtext: yup
        .string()
        .optional()
});

export const ReviewForm = ({ onSubmit }) => {
  return ( 
    <View style={styles.signInForm}>
        <FormikTextInput style={styles.input} name="ownername" placeholder="Repository Owner Name" />
        <FormikTextInput style={styles.input} name="repositoryname" placeholder="Repository Name" />
        <FormikTextInput style={styles.input} name="rating" placeholder="Rating between 0 and 100" />
        <FormikTextInput style={styles.input} name="reviewtext" placeholder="Review Text" multiline={true} />
        <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.buttonText}>Create Review</Text>
        </Pressable>
    </View>
  )
};

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();
  
  const onSubmit = async (values) => {
    const { ownername, repositoryname, rating, reviewtext } = values;

    try {
      const data = await createReview({ ownername, repositoryname, rating, reviewtext });
      if (data){
        navigate('/:id');
      } else {
        console.log('No data')
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;