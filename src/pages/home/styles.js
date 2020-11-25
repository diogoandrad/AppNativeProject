import { StyleSheet,  Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center'
    },
});

export default styles;
