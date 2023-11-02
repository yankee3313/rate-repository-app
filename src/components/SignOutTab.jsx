import { View, StyleSheet, Text, Pressable } from 'react-native';
import theme from '../theme'
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

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

    const handleSignOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
  }

    return <View>
      <Pressable onPress={handleSignOut}><Text style={styles.container}>Sign-Out</Text></Pressable>
    </View>;
  };
  
  export default SignOutTab;