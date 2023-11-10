import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import RepositoryTab from './RepositoryTab'
import SignInTab from './SignInTab'
import SignOutTab from './SignOutTab'
import getUser from '../hooks/getUser';
import CreateReviewTab from './CreateReviewTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackgroundColor,
    color: 'white',
    paddingBottom: 10,
    paddingLeft: 5,
    fontWeight: "bold",
  },
});

const AppBar = () => {
  const data = getUser();
  const user = data.me;

  if (user){
  return <View style={styles.container}>
    <ScrollView horizontal>
      <RepositoryTab/>
      <CreateReviewTab/>
      <SignOutTab/>
    </ScrollView>
  </View>;
  }

  return <View style={styles.container}>
    <ScrollView horizontal>
      <RepositoryTab/>
      <SignInTab/>
    </ScrollView>
  </View>;
};

export default AppBar;