import { View, StyleSheet, Text } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.tabBackgroundColor,
      color: 'white',
      fontWeight: "bold",
      paddingBottom: 10,
      paddingLeft: 5,
    },
  });
  

const SignUpTab = () => {
  return <View>
    <Link to ="/sign-up"><Text style={styles.container}>Sign-Up</Text></Link>
  </View>;
  };
  
  export default SignUpTab;