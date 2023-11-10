import Text from './Text';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useCreateUser from '../hooks/useCreateUser';
import { useNavigate } from "react-router-native";
import useSignIn from '../hooks/useSignIn';

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
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required'),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirm is required')
});

export const SignUpForm = ({ onSubmit }) => {
   
  return ( 
    <View style={styles.signInForm}>
        <FormikTextInput style={styles.input} name="username" placeholder="Username" />
        <FormikTextInput style={styles.input} name="password" placeholder="Password" secureTextEntry={true} />
        <FormikTextInput style={styles.input} name="passwordConfirm" placeholder="Password Confirmation" secureTextEntry={true} />
        <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
    </View>
  )
};

const CreateUser = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await createUser({ username, password });
      if (data){
        await signIn({ username, password });
        navigate('/');
      } else {
        console.log('No data')
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateUser;