import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Login from './Login';

export default class Main extends React.Component {
    render() {
      return (
        <View style={styles.container2}>
          <View style={styles.blokgora}>
            <Text>dasda</Text>
          </View>
          <Wiew styles={styles.interface_login}>
          <login />
          </Wiew>
          <Text>dasda</Text>
        </View>
      );
    }
  }
const styles =StyleSheet.create(
    {
      container2: {
        flex: 1,
      },
      image_logo: {
        width: 50,
        height: 50,
      },
      blokgor: {
        
      },
      interface_login: {
        
      },
    }
);