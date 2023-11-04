import { View, StyleSheet } from 'react-native';
import HeaderAndImage from './HeaderAndImage'
import Stats from './Stats'


const styles = StyleSheet.create({
    itemContainer:{
        paddingBottom: 4,
        borderBottomColor: 'grey',
        borderBottomWidth: 8,
    }
  });

const RepositoryItem = ({ item }) => {
  return(
    <View testID="repositoryItem" style={styles.itemContainer}>
        <HeaderAndImage item={item}/>      
        <Stats item={item}/>
    </View>
)};

export default RepositoryItem;