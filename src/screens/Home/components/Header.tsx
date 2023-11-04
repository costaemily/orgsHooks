import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../../../assets/logo.png';
import {headerMock} from '../../../mocks/header';

export function Header() {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.welcomeText}>{headerMock.welcome}</Text>
      <Text style={styles.descriptionText}>{headerMock.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcomeText: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 26,
  },
});
