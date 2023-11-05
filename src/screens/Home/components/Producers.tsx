import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {loadProducers} from '../../../services/loadData';

export function Producers() {
  /*
    it is used as the component did mount function with no values in the array
    executing a function passed as the first argument only when the component is created
   */
  useEffect(() => {
    const resp = loadProducers();
    console.log(resp);
  }, []);

  return <Text>Produtores</Text>;
}
