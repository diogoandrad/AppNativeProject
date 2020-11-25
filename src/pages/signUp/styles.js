import { StyleSheet,  Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 50
    },
    logo: {
      width: 100,
      height: 100
    },
    // logoText: {
    //   color: 'white',
    //   fontSize: 20,
    //   fontWeight: '500',
    //   marginTop: 10,
    //   opacity: 0.5
    // },
    inputContainer: {
      marginTop: 10,
    },
    inputText: {
      width: WIDTH - 55,
      height: 48,
      borderRadius: 8,
      fontSize: 16,
      paddingLeft: 14,
      marginHorizontal: 25,
      backgroundColor: '#191919',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    // inputIcon: {
    //   position: 'absolute',
    //   top: 8,
    //   left: 37
    // },
    btnEye: {
      position: 'absolute',
      top: 8,
      right: 37
    },
    btnSignUp: {
      width: '84%',
      height: 48,
      borderRadius: 8,
      backgroundColor: '#00BCD4',
      justifyContent: 'center',
      marginTop: 20
    },
    btnSignIn: {
      height: 45,
      justifyContent: 'center',
      marginTop: 20
    },
    btnText: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 16,
      textAlign: 'center'
    },
});

export default styles;
