import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Image, } from 'react-native';
import Main from './app/components/Main';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./app/images/designapp/Rectangle-4.png')} style={styles.container}>
          <Main />
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    fontSize: '44',
  },
  
});
