import React, {Component, useState} from 'react'
import { Image, SafeAreaView, View, TextInput, Text, Button, Alert} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import {styles} from './styles'
import Shield from '../../components/molecules/shields'

const Form = props => {

    const [userName, setuserName] = useState('')

    const onPressEnter = userName => {
        if (userName === '') {
            Alert.alert(
                "Error",
                "Introduce un nombre",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK") }
                ])
        } else {
            props.setUserName(userName)
            Actions.push('House')
            
        }
    }

        return(
            <SafeAreaView  style={styles.container}>
                <Image source={require('../../assets/images/bghp.jpeg')} style={styles.bg}/>
                
                <Image source={require('../../assets/images/HPLOGO2.png')} style={styles.appTitle} />
               

                <View>
                    <Text style={styles.title} >READY TO ENTER HOWARTS?</Text>
                    <TextInput placeholderTextColor={'white'} style= {styles.textField} placeholder='Introduce tu nombre' value={userName} onChangeText={text => setuserName(text)}/>
                    <Button style={styles.enter} color="white" title = 'ENTER' onPress={() => onPressEnter(userName)}/>    
                </View>       
            </SafeAreaView>
        )
    
}

export default Form