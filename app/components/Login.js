import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View styles={styles.container}>
            <View styles={styles.login_bar}>
                <Text>Login</Text>
            </View>
            <View styles={styles.password_bar}>
                <Text>Password</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    fontSize: '44',
  },
  login_bar: {
    flex: 1,
  },
  password_bar: {
    flex: 1,
  },
});
