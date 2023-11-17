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
    const { data, refetch }  = getReviews(id);
    
    useEffect(() => {refetch()}, [id]);
    
    if (data){
    const reviews = data
        ? data.repository.reviews.edges.map(edge => edge.node)
        : [];

    const reversedReviews = reviews.slice().reverse();

    if (reversedReviews){
    
        return(
            <FlatList
                data={reversedReviews}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={item => item.id}
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