import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    squareContainer: {
        flexDirection: 'column',
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statsContainer: {
        flexDirection: 'row',
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        color: theme.textSecondary,
        justifyContent: 'space-evenly',
        paddingBottom: 8
    }
  });

export const formatNumber = (num) => {
    if (num >= 1000) {
        const roundedNum = Math.round(num / 100) / 10;
        return `${roundedNum}k`;
    }
    return num.toString();
};

const Stats = ({ item }) => (  
        <View style={styles.statsContainer}>
            <View style={styles.squareContainer}>
                <Text style={styles.subheading} testID="stargazersCount">{formatNumber(item.stargazersCount)}</Text>
                <Text>Stars</Text>        
            </View>
            <View style={styles.squareContainer}>
                <Text style={styles.subheading} testID="forksCount">{formatNumber(item.forksCount)}</Text>
                <Text>Forks</Text>
            </View>
            <View style={styles.squareContainer}>
                <Text style={styles.subheading} testID="reviewCount">{item.reviewCount}</Text>
                <Text>Reviews</Text>
            </View>
            <View style={styles.squareContainer}>
                <Text style={styles.subheading} testID="ratingAverage">{item.ratingAverage}</Text>
                <Text>Rating</Text>
            </View>
        </View>
  );

export default Stats;