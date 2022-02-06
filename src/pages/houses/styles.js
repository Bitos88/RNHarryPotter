import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


    appTitle: {width: '100%', 
    height: 180 
    ,alignSelf: 'center',
    
},


    container: {
    flex:1,    
    backgroundColor: 'gray'
},

    items: {
        flex:1,
        flexDirection: 'row'
    },
    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom:0,
        right:0,
        resizeMode: 'contain',
        flex: 1,
        opacity: 0.6},

        title: {
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            margin: 10,
            fontWeight: 'bold'
        },

        title2: {
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            margin: 20,
            fontWeight: 'bold',
            marginBottom: 20
        },




})