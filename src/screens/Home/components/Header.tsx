import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../../../assets/logo.png';
import {headerMock} from '../../../mocks/header';
import {loadHeader} from '../../../services/loadData';

class Header extends React.Component {
  state = {
    header: {
      welcome: '',
      description: '',
    },
  };

  updateHeader() {
    const resp = loadHeader();
    this.setState({header: resp});
  }

  componentDidMount(): void {
    this.updateHeader();
  }

  render() {
    return (
      <View style={styles.header}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.welcomeText}>{this.state.header.welcome}</Text>
        <Text style={styles.descriptionText}>
          {this.state.header.description}
        </Text>
      </View>
    );
  }
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
    color: '#464646',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});

export {Header};
