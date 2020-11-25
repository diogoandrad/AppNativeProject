import React, { Component } from 'react';
import { ScrollView, View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Imc extends Component {
    constructor(props){
        super(props)
        this.state = {massa: 0, altura: 0, resultadoNumber: 0, resultadoText: ""}
        this.calcular = this.calcular.bind(this)
    }

    calcular() {

        let imc = this.state.massa / (this.state.altura * this.state.altura)

        let result = this.state
        result.resultadoNumber = imc

        if (result.resultadoNumber < 16) {
            result.resultadoText = "Magreza Grave"
        } else if (result.resultadoNumber < 17) {
            result.resultadoText = "Magreza Moderada"
        } else if (result.resultadoNumber < 18.5) {
            result.resultadoText = "Magreza Leve"
        } else if (result.resultadoNumber < 25) {
            result.resultadoText = "Saudável"
        } else if (result.resultadoNumber < 30) {
            result.resultadoText = "Sobrepeso"
        } else if (result.resultadoNumber < 35) {
            result.resultadoText = "Obesidade Grau I"
        } else if (result.resultadoNumber < 40) {
            result.resultadoText = "Obesidade Grau II"
        } else if (result.resultadoNumber < 60) {
            result.resultadoText = "Obesidade Grau III"
        } else {
            result.resultadoText = "NaN"
        }

        this.setState(result)

    }

    render() {
        return (
            <View style={styles.container}>

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor={"white"} translucent={true}/>

            <View style={styles.inputs}>
                <TextInput placeholder="Massa" keyboardType="default" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}></TextInput>
                <TextInput placeholder="Altura" keyboardType="default" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}></TextInput>
            </View>

            <TouchableOpacity onPress={this.calcular} style={styles.button}><Text style={styles.textButton}>Calcular</Text></TouchableOpacity>

            <Text style={styles.resultado}>{this.state.resultadoNumber.toFixed(2)}</Text>
            <Text style={styles.resultado}>{this.state.resultadoText}</Text>

            </View>
        );
    }
};
