import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from "react-router-native";
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker:{
    backgroundColor: '#e6e6e6',
  },
  searchbar: {
    margin: 5
  },
  flatList: {
    marginTop: 10,
    flex: 1,
  },
  fullPage: {
    flex: 1,
    marginBottom: 0
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [sortingOptions, setSortingOptions] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  });
  const [pickerDisplay, setPickerDisplay] = useState('Sort By: Ascending Date');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [deBounceValue] = useDebounce(searchQuery, 500)
  const onChangeSearch = query => setSearchQuery(query);
  const first = 6;
  const after = '';
  const { repositories, fetchMore } = useRepositories(sortingOptions, deBounceValue, first, after);
  const navigate = useNavigate();

  console.log(repositories)

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  console.log(repositoryNodes)

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  };

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
    <View style={styles.fullPage}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchbar}
      />
      <Picker
        style={styles.picker}
        selectedValue={pickerDisplay}
        onValueChange={(itemValue, itemIndex) => {
          setPickerDisplay(itemValue)
          handlePickerChange(itemValue)
        }
        }>
        <Picker.Item label="Sort By: Descending Rating" value="DESC_RATING" />
        <Picker.Item label="Sort By: Ascending Rating" value="ASC_RATING" />
        <Picker.Item label="Sort By: Descending Date" value="DESC_DATE" />
        <Picker.Item label="Sort By: Ascending Date" value="ASC_DATE" />
      </Picker>
      <FlatList
        style={styles.flatList}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem item={item} />
          </Pressable>
          }
      />
    </View>
  );
};

export default RepositoryList;