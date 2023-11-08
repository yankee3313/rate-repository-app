import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const styles = StyleSheet.create({
    itemContainer:{
        paddingBottom: 4,
        borderBottomColor: 'grey',
        borderBottomWidth: 8,
    },
    header: {
      font: theme.fonts.main,
      fontWeight: theme.fontWeights.bold
    }
  });

const ReviewItem = ({ review }) => {
  console.log(review)
    
  return(
    <View testID="reviewItem" style={styles.itemContainer}>
        <Text style={styles.header}>{review.user.username}</Text>
        <Text>{review.createdAt}</Text>
    </View>
)};

export default ReviewItem;