import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {
    backgroundColor: 'grey', 
    flex: 1,  },

    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom:0,
        right:0,
        resizeMode: 'contain',
        flex: 1,
        opacity: 0.6},


    title: {color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold', 
    letterSpacing:1},


    vista1: {flex: 1, 
        backgroundColor:'yellow'},


    vista2: {flex: 1, 
        backgroundColor:'green'},



    
    
    



})

export default styles