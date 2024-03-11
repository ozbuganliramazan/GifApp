import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import axios from 'axios';
import {API_KEY} from './Config';
import Item from './components/Item';
import SearcInput from './components/SearcInput';
import Pagination from './components/Pagination';
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const getData = () => {
    const url =
      query == ''
        ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=40`
        : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&offset=${
            currentPage * LIMIT
          }&limit=24`;
    axios
      .get(url)
      .then(result => {
        setData(result.data.data);
        setLoading(false);
      })
      .catch(e => console.log(e));
  };
  const LIMIT = 15;
  useEffect(() => {
    getData();
  }, [currentPage]);

  const renderItemCard = ({item}) => {
    return <Item item={item} />;
  };

  const onSearch = () => {
    getData();
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Yükleniyor</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <SearcInput setValue={setQuery} value={query} onSearch={onSearch} />
      <View style={styles.container}>
        {query && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatlist}
          numColumns={2}
          data={data}
          renderItem={renderItemCard}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    marginTop: 10,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
