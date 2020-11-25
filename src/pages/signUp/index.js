import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import background from '../../images/background.jpg';
import logo from '../../images/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// import api from '../../services/api';

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false,
      textUsername: "",
      textEmail: "",
      textPassword: ""
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true})
    } else {
      this.setState({showPass: true, press: false})
    }
  }

  checkSignUp = () => {
    if (this.state.textUsername === "" || this.state.textEmail === "" || this.state.textPassword === "") {
      this.setState(() => ({ nameError: "Enter username, email and password" }));
    } else {
      this.props.navigation.navigate('Home');
    }
  }
  
  render() {
    return (
      <View style={styles.backgroundContainer}>
      
        <StatusBar barStyle="light-content" hidden={false} backgroundColor={"black"} translucent={true}/>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          {/* <Text style={styles.logoText}>REACT NATIVE</Text> */}
        </View>

        <View style={styles.inputContainer}>
          {/* <Icon name={'user'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/> */}
          {!!this.state.nameError && (<Text style={{ color: "red", paddingLeft: 22 }}>{this.state.nameError}</Text>)}
          <TextInput
            onChangeText={textUsername => this.setState({ textUsername })}
            value={this.state.textUsername}
            style={styles.inputText}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Icon name={'at'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/> */}
          <TextInput
            onChangeText={textEmail => this.setState({ textEmail })}
            value={this.state.textEmail}
            style={styles.inputText}
            placeholder={'Email'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Icon name={'lock'} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/> */}
          <TextInput
            onChangeText={textPassword => this.setState({ textPassword })}
            value={this.state.textPassword}
            style={styles.inputText}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'eye-slash' : 'eye'} size={24} color={'rgba(255, 255, 255, 0.7)'}/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnSignUp} onPress={this.checkSignUp.bind(this)}>
            <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSignIn} onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text style={styles.btnText}>Sing In</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}
