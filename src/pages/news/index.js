import React, { Component } from 'react';
import { ScrollView, View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import background from '../../images/background.jpg';
import logo from '../../images/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// import api from '../../services/api';

export default class News extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor={"white"} translucent={true}/>
        <Text>News Screen</Text>
      </View>
    );
  }
};
