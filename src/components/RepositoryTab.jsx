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
  

const RepositoryTab = () => {
    return <View>
      <Link to ="/"><Text style={styles.container}>Repositories</Text></Link>
    </View>;
  };
  
  export default RepositoryTab;