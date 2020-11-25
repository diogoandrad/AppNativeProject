import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputs: {
        flexDirection: 'row'
    },
    input: {
        height: 80,
        textAlign: "center",
        width: "50%",
        fontSize: 50,
        marginTop: 26
    },
    button: {
        backgroundColor: "blue"
    },
    textButton: {
        alignSelf: "center",
        padding: 20,
        fontSize: 22,
        color: "white",
        fontWeight: 'bold'
    },
    resultado: {
        alignSelf: "center",
        color: "gray",
        fontSize: 40,
        padding: 14
    }
});

export default styles;
