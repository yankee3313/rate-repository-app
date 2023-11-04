import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar'
import RepositoryList from './RepositoryList';
import SignInForm from './SignInForm';
import GitHubView from './GitHubView';

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
            <Route path="/:id" element={<GitHubView/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </View>
  );
};

export default Main;