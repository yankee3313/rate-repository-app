import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import RepositoryTab from './RepositoryTab'
import SignInTab from './SignInTab'
import SignOutTab from './SignOutTab'
import SignUpTab from './SignUpTab'
import getUser from '../hooks/getUser';
import CreateReviewTab from './CreateReviewTab'
import MyReviewsTab from './MyReviewsTab';

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
  const data = getUser(false);

  if (data){
  return <View style={styles.container}>
    <ScrollView horizontal>
      <RepositoryTab/>
      <CreateReviewTab/>
      <MyReviewsTab/>
      <SignOutTab/>
    </ScrollView>
  </View>;
  }

  return <View style={styles.container}>
    <ScrollView horizontal>
      <RepositoryTab/>
      <SignInTab/>
      <SignUpTab/>
    </ScrollView>
  </View>;
};

export default AppBar;