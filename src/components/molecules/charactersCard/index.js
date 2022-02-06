import React, {Component} from 'react'
import {TouchableOpacity, Image, Text, Dimensions} from 'react-native'
import styles from './styles'

class CharacterCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            imageWD: (Dimensions.get('window').width /2) - 14,
        }
    }

    componentDidMount(){
        //this.getImageHT()
    }

  

    render(){
        const {character, onCharPress} = this.props
        const {imageWD} = this.state

        console.log({imageWD: imageWD})

        var imgCard = '';
    if (!character.image) {
      console.log({IMG_URI404: this.imageUri});
      imgCard = (
        <Image
          style={
            (styles.img,
            {
              width: imageWD,
              height: 300,
            })
          }
          source={require('../../../assets/images/404.png')}
        />
      );
    } else {
      console.log({IMG_URI: this.imageUri});
      imgCard = (
        <Image
          style={
            (styles.img,
            {
              width: imageWD,
              height: 300,
            })
          }
          source={{uri: character.image}}
        />
      );
    }


        return (
            <TouchableOpacity style={styles.container} onPress={ () => onCharPress(character)}>
             {imgCard}

             <Text style={styles.name}>
                 {character.name}
             </Text>
         </TouchableOpacity>
        )

    }

}

CharacterCard.defaultProps = {
    character: null,
    onCharPress: () => {}
}

export default CharacterCard