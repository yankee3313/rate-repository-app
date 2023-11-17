import { View, StyleSheet, FlatList } from 'react-native';
import Text from './Text';
import MyReviewItem from './MyReviewItem';
import getUser from '../hooks/getUser';
import useDeleteReview from '../hooks/useDeleteReview';

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
    const { data, refetch } = getUser(true);
    const [deleteReview] = useDeleteReview();
    
    if (data){
        console.log(data, 'MyReviews')
        if (data.me){
        const reviews = data.me.reviews.edges.map(edge => edge.node)

        const reversedReviews = reviews ? reviews.slice().reverse() : null;

        const onSubmit = async (id) => {
            try {
                await deleteReview({ id: id });
                refetch();
            } catch (e) {
                console.log(e);
            }
        };
    
        return(
            <FlatList
                data={reversedReviews}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={item => item.id}
                style={styles.reviews}
                renderItem={({item}) => 
                <MyReviewItem review={item} onSubmit={onSubmit} />
                }
            />
        )
    }
    }

    return <Text>Loading...</Text>;
};
export default MyReviews;