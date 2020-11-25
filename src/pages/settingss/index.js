import React, { Component } from 'react';
import { ScrollView, View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import background from '../../images/background.jpg';
import logo from '../../images/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// import api from '../../services/api';

// static alert(title, message?, buttons?, options?)

const createTwoButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed")
      },
      { 
        text: "OK",
        onPress: () => console.log("OK Pressed")
      }
    ],
  { cancelable: false }
);

const createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed")
      },
      { 
        text: "OK",
        onPress: () => console.log("OK Pressed")
      }
    ],
  { cancelable: false }
);

export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor={"white"} translucent={true}/>
        <Text>Settings Screen</Text>
        <Button title={"Two Button Alert"} onPress={createTwoButtonAlert} />
        <Button title={"Three Button Alert"} onPress={createThreeButtonAlert} />
      </View>
    );
  }
};
