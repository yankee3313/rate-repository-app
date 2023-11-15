import { View, StyleSheet, FlatList } from 'react-native';
import Text from './Text';
import theme from '../theme';
import MyReviewItem from './MyReviewItem';
import getUser from '../hooks/getUser';


const styles = StyleSheet.create({
    itemContainer:{
        paddingBottom: 4,
        borderBottomColor: 'grey',
        borderBottomWidth: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        display: 'flex',
    },
    separator: {
        height: 10,
    },
    reviews: {
        marginTop: 10
    }
  });

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const data = getUser(true);
    console.log(data)
    const reviews = data
        ? data.me.reviews.edges.map(edge => edge.node)
        : [];

    const reversedReviews = reviews.slice().reverse();

    if (reversedReviews){
    
        return(
            <FlatList
                data={reversedReviews}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={item => item.id}
                style={styles.reviews}
                renderItem={({item}) => 
                <MyReviewItem review={item} />
                }
            />
        );
    }   else {
            return <Text>Loading...</Text>
    }
};
export default MyReviews;