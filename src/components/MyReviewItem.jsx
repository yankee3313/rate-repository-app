import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns'

const styles = StyleSheet.create({
    itemContainer:{
        borderBottomColor: 'grey',
        borderBottomWidth: 8,
    },
    name: {
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.bold
    },
    date: {
      color: theme.colors.textSecondary
    },
    ratingContainer: {
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      marginHorizontal: 10,
      flexDirection: 'column',
    },
    blueText: {
      color: theme.colors.primary,
      fontWeight: theme.fontWeights.bold
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    userAndDate: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    reviewText: {
      flexDirection: 'row',
      marginLeft: 70,
      marginBottom: 10
    }
  });

const MyReviewItem = ({ review }) => {
  if (review){
    const date = format(new Date(review.createdAt), 'MM/dd/yyyy')
    
  return(
    <View testID="reviewItem" style={styles.itemContainer}>
      <View style={styles.header}>
        <View style={styles.ratingContainer}>
          <Text style={styles.blueText}>{review.rating}</Text>
        </View>
        <View style={styles.userAndDate}>
          <Text style={styles.name}>{review.repository.fullName}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{review.text}</Text>
    </View>
)}};

export default MyReviewItem;