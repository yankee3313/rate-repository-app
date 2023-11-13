import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from "react-router-native";
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [sortingOptions, setSortingOptions] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'ASC',
  });
  const [pickerDisplay, setPickerDisplay] = useState('Ascending Date');
  const { repositories } = useRepositories(sortingOptions);
  const navigate = useNavigate();

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  console.log(pickerDisplay,2)

  const handlePickerChange = (itemValue) => {
    switch (itemValue) {
      case 'ASC_DATE':
        setSortingOptions({ orderBy: 'CREATED_AT', orderDirection: 'ASC' });
        break;
      case 'DESC_DATE':
        setSortingOptions({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
        break;
      case 'ASC_RATING':
        setSortingOptions({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' });
        break;
      case 'DESC_RATING':
        setSortingOptions({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' });
        break;
    }
  };

  return (
    <View>
      <Picker
        selectedValue={pickerDisplay}
        onValueChange={(itemValue, itemIndex) => {
          setPickerDisplay(itemValue)
          handlePickerChange(itemValue)
        }
        }>
        <Picker.Item label="Ascending Date" value="ASC_DATE" />
        <Picker.Item label="Descending Date" value="DESC_DATE" />
        <Picker.Item label="Ascending Rating" value="ASC_RATING" />
        <Picker.Item label="Descending Rating" value="DESC_RATING" />
      </Picker>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem item={item} />
          </Pressable>
          }
      />
    </View>
  );
};

export default RepositoryList;