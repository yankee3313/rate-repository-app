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
  

const MyReviewsTab = () => {
    return <View>
      <Link to ="/myreviews"><Text style={styles.container}>My Reviews</Text></Link>
    </View>;
  };
  
  export default MyReviewsTab;