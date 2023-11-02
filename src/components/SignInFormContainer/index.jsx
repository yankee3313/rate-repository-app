import Text from '../Text';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import * as yup from 'yup';

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
});

const SignInForm = ({ onSubmit }) => {
   
  return ( 
    <View style={styles.signInForm}>
        <FormikTextInput testID="userInput" style={styles.input} name="username" placeholder="Username" />
        <FormikTextInput testID="passInput" style={styles.input} name="password" placeholder="Password" secureTextEntry={true} />
        <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    </View>
  )
};

const SignIn = ({onSubmit}) => {
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;