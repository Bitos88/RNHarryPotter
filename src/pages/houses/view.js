import React, {Component} from 'react'
import { Image, SafeAreaView, View, Text} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import {styles} from './styles'
import Shield from '../../components/molecules/shields'

class House extends Component {

    onShielPress = house => {
        console.log({HOUSE: this.props})
        this.props.setName(house)
        Actions.push('Houses', {
            title: house
        })
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/images/bghp.jpeg')} style={styles.bg}/>
                <View style={{width: '100%'}}>
                    <Image style={styles.appTitle} resizeMode='contain' source={require('../../assets/images/HPLOGO2.png')}  />
                </View>
                <Text style={styles.title}> BIENVENIDO: {this.props.userName}</Text>
                <Text style={styles.title2}> ELIGE UNA CASA</Text>              
                <View style={styles.items}>
                    <Shield nameHouse='Gryffindor' icon='1' onPress= {this.onShielPress}/> 
                    <Shield nameHouse='Slytherin' icon='2' onPress= {this.onShielPress}/> 
                </View>
                    <View style={styles.items}>
                    <Shield nameHouse='Hufflepuff' icon='3' onPress= {this.onShielPress}/> 
                    <Shield nameHouse='Ravenclaw' icon='4' onPress= {this.onShielPress}/> 
                </View>
            </SafeAreaView>
        )
    }
}

export default House