import React, {useMemo, useReducer, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Stars} from '../../../components/Stars';

const metersDistance = distance => {
  console.log('distancia em metros');
  return `${distance}m`;
};

export function Card({name, image, distance, stars}) {
  const [selected, invertSelected] = useReducer(selected => !selected, false);

  const distanceText = useMemo(() => metersDistance(distance), [distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={invertSelected}>
      <Image source={image} accessibilityLabel={name} style={styles.image} />
      <View style={styles.information}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars quantity={stars} editable={selected} large={selected} />
        </View>
        <Text style={styles.distance}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    //shadow on IOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    //it only works on Android
    elevation: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
