import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar'
import RepositoryList from './RepositoryList';
import SignInForm from './SignInForm';
import GitHubView from './GitHubView';
import RepositoryReviews from './RepositoryReviews';
import ReviewForm from './createReview';
import SignUpForm from './SignUpForm';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  
  return (
    <View style={styles.container}>
        <AppBar/>
        <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route path="/sign-in" element={<SignInForm/>}/>
            <Route path="/:id" element={<><GitHubView/><RepositoryReviews/></>}/>
            <Route path="/createReview" element={<ReviewForm/>}/>
            <Route path="/myreviews" element={<MyReviews/>}/>
            <Route path="/sign-up" element ={<SignUpForm/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </View>
  );
};

export default Main;