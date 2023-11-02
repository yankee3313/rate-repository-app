import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorInput:{
    borderColor: '#d73a4a',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  if (error){
    textInputStyle.push(styles.errorInput)
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;