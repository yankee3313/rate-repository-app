import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';
import { useNavigate } from "react-router-native";

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
    },
    viewButton: {
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        color: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 30
        },
    buttonContainer:{
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-evenly'
    },
    buttonText: {
        color: 'white',
        padding: 10,
        fontWeight: 'bold',
      },
    deleteButton: {
        justifyContent: 'center',
        backgroundColor: 'red',
        color: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 30
    }
  });

const MyReviewItem = ({ review, onSubmit }) => {
    const navigate = useNavigate();

    const deleteAlert = (id) =>
    Alert.alert('Delete Review', 'Are you sure you want to delete this review?', [
      {
        text: 'CANCEL',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'DELETE', onPress: () => {onSubmit(id)}},
    ]);

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
            <View style={styles.buttonContainer}>
            <Pressable style={styles.viewButton} onPress={() => navigate(`/${review.repositoryId}`) } >
                <Text style={styles.buttonText}>View Repository</Text>
            </Pressable>
            <Pressable style={styles.deleteButton} onPress={() => deleteAlert(review.id)} >
                <Text style={styles.buttonText}>Delete Review</Text>
            </Pressable>
            </View>
        </View>
    )}
};

export default MyReviewItem;