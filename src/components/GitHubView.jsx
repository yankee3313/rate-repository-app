import { View, StyleSheet, Pressable } from 'react-native';
import HeaderAndImage from './HeaderAndImage';
import Stats from './Stats';
import Text from './Text';
import theme from '../theme';
import { useParams } from 'react-router-native';
import getRepository from '../hooks/getRepository';
import * as Linking from 'expo-linking';


const styles = StyleSheet.create({
    itemContainer:{
        paddingBottom: 4,
        borderBottomColor: 'grey',
        borderBottomWidth: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        display: 'flex',
    },
    gitHubBtn: {
        padding: 10
    },
    buttonText: {
        color: 'white',
        padding: 10,
        fontWeight: 'bold',
      },
    GitHubButton: {
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    color: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10
    }
  });

const GitHubView = () => {
    const { id } = useParams();
    const data  = getRepository(id);
    const repository = data.repository
    
    if (repository){
      return(
        <View style={styles.itemContainer}>
          <HeaderAndImage item={repository}/>
          <Stats item={repository}/>
          <Pressable style={styles.GitHubButton} onPress={() => {Linking.openURL(`${repository.url}`)}} >
              <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
        </View>
      );
    }};
export default GitHubView;