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
  

const CreateReviewTab = () => {
  return <View>
    <Link to ="/createReview"><Text style={styles.container}>Create Review</Text></Link>
  </View>;
  };
  
  export default CreateReviewTab;