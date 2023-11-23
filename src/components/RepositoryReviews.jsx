import { View, StyleSheet, FlatList } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useParams } from 'react-router-native';
import getReviews from '../hooks/getReviews';
import ReviewItem from './ReviewItem';
import { useEffect } from 'react';

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
  });

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryReviews = () => {
    const { id } = useParams();
    const first = 2;
    const { data, fetchMore }  = getReviews(id, first);
    
    if (data){
    const reviews = data
        ? data.repository.reviews.edges.map(edge => edge.node)
        : [];

    const reversedReviews = reviews.slice().reverse();

    const onEndReach = () => {
        fetchMore();
        console.log('You have reached the end of the list');
      };

    if (reversedReviews){
        console.log(reversedReviews)
    
        return(
            <FlatList
                data={reversedReviews}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={item => item.id}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.1}
                renderItem={({item}) => 
                <ReviewItem review={item} />
                }
            />
        );
    }   else {
            return <Text>Loading...</Text>
    }
    }
};
export default RepositoryReviews;