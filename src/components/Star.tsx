import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import EstrelaVerde from '../assets/estrela.png';
import EstrelaCinza from '../assets/estrelaCinza.png';

export function Star({onPress, desabled = true, full, large = false}) {
  const getImage = () => {
    if (full) {
      return EstrelaVerde;
    }
    return EstrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabled}>
      <Image source={getImage()} style={styles(large).star} />
    </TouchableOpacity>
  );
}

const styles = large =>
  StyleSheet.create({
    star: {
      width: large ? 36 : 12,
      height: large ? 36 : 12,
    },
  });
