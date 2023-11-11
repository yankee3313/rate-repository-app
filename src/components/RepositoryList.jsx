import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from "react-router-native";
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('ASC');
  const { repositories } = useRepositories({orderBy, orderDirection});
  const navigate = useNavigate();

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  return (
    <View>
      <Picker
        selectedValue={orderBy}
        onValueChange={(itemValue, itemIndex) =>
          setOrderBy(itemValue)
        }>
        <Picker.Item label="Date" value="CREATED_AT" />
        <Picker.Item label="Rating" value="RATING_AVERAGE" />
      </Picker>
      <Picker
        selectedValue={orderDirection}
        onValueChange={(itemValue, itemIndex) => {
          setOrderDirection(itemValue);
        }}>
        <Picker.Item label="Ascending" value="ASC" />
        <Picker.Item label="Descending" value="DESC" />
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