import React, { Component } from 'react';
import { ScrollView, View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import background from '../../images/background.jpg';
import logo from '../../images/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// import api from '../../services/api';

export default class Notes extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <StatusBar barStyle="dark-content" hidden={false} backgroundColor={"white"} translucent={true}/>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Studying React Native</Text>
          <Text style={styles.postDescription}>Now 30/05/2020 on a saturday afternoon</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Studying React Native</Text>
          <Text style={styles.postDescription}>Now 30/05/2020 on a saturday afternoon</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Studying React Native</Text>
          <Text style={styles.postDescription}>Now 30/05/2020 on a saturday afternoon</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Studying React Native</Text>
          <Text style={styles.postDescription}>Now 30/05/2020 on a saturday afternoon</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Studying React Native</Text>
          <Text style={styles.postDescription}>Now 30/05/2020 on a saturday afternoon</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Studying React Native</Text>
          <Text style={styles.postDescription}>Now 30/05/2020 on a saturday afternoon</Text>
        </View>

      </ScrollView>
    );
  }
};
