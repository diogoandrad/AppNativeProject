import { StyleSheet,  Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333"
    },
    postContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 3
    },
    postTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    postDescription: {
        color: "#666"
    }
});

export default styles;
