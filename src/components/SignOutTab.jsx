import { View, StyleSheet, Text, Pressable } from 'react-native';
import theme from '../theme'
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.tabBackgroundColor,
      color: 'white',
      fontWeight: "bold",
      paddingBottom: 10,
      paddingLeft: 5,
    },
  });

const SignOutTab = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        navigate('/');
  }

    return <View>
      <Pressable onPress={handleSignOut}><Text style={styles.container}>Sign-Out</Text></Pressable>
    </View>;
  };
  
  export default SignOutTab;