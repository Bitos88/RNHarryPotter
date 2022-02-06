import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod'
import styles from './styles'

class Characters extends Component{
    render(){
        const character = this.props.item
        console.log({CHARACTER: character})



        return(
            <View style={styles.container}>
                <Image style={{height: 300, 
                    width: '100%', 
                    resizeMode: 'cover'}} 
                    source={{uri: character.image}} />
                <Text style={styles.title}>Tipo de sangre: {character.ancestry || 'Dato no encontrado'}</Text>
                <Text style={styles.title}>Fecha de Nacimiento: {character.dateOfBirth || 'Dato no encontrado'}</Text>
                <Text style={styles.title}>Actor: {character.actor || 'Dato no encontrado'}</Text>

            </View>
        )
    }
}

export default Characters