import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({


    bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom:0,
    right:0,
    resizeMode: 'contain',
    flex: 1,
    opacity: 0.6
    
    
    
    },

    container: {
        flex:1,
        backgroundColor: 'black'
    },

    appTitle: {
    width: '100%', 
    height: 180 ,
    alignSelf: 'center',
    marginTop: 100   
},

    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        margin: 20,
        fontWeight: 'bold'
    },

    textField: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,
        borderRadius: 15,
        width: 250,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        marginBottom: 15
        
    },

    enter: {
        paddingTop: 20,
        fontWeight: 'bold'

    }
});

export default styles