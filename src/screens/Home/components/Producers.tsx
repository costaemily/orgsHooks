import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Card} from './Card';
import {useProducers} from '../../../hooks/useProducers';

export function Producers({header: Header}) {
  const [title, list] = useProducers();

  return (
    <FlatList
      data={list}
      ListHeaderComponent={
        <>
          <Header />
          <Text style={styles.title}>{title}</Text>
        </>
      }
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
