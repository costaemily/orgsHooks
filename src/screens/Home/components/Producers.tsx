import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {loadProducers} from '../../../services/loadData';
import {Card} from './Card';

export function Producers({header: Header}) {
  //it is always set at the beginning of the function
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);
  /*
    it is used as the component did mount function with no values in the array
    executing a function passed as the first argument only when the component is created
   */
  useEffect(() => {
    const resp = loadProducers();
    setTitle(resp.title);
    setList(resp.list);
    //console.log(resp);
  }, []);

  const HeaderList = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={list}
      ListHeaderComponent={HeaderList}
      renderItem={({item}) => <Card {...item} />}
      keyExtractor={({name}) => name}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
