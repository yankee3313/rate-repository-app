import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    headerAndImageContainer: {
      flexDirection: 'row',
      font: theme.fonts.main,
      justifyContent: 'flex-start',
      padding: 8,
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
    headingContainer: {
        flexDirection: 'column',
        font: theme.fonts.main,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      },
    subheading: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
    },
    body: {
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        color: theme.textSecondary,
        flexWrap: 'wrap',
    },
    blueBubbleText: {
        backgroundColor: theme.colors.primary,
        padding:3,
        color: 'white',
        borderRadius: 4,
    },
    imageWrap:{
        paddingRight: 10,
        borderRadius: 10,
        borderColor: 'white'
    }
  });

  const HeaderAndImage = ({ item }) => (
    <View style={styles.headerAndImageContainer}>
            <View style={styles.imageWrap}>
                <Image
                    style={styles.tinyLogo}
                    source={{uri: item.ownerAvatarUrl}}
                />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.subheading} testID="fullName">{item.fullName}</Text>
                <Text style={styles.body} testID="description">{item.description}</Text>
                <View>
                    <Text style={styles.blueBubbleText} testID="language">{item.language}</Text>
                </View>
            </View>
        </View>
  );

  export default HeaderAndImage;