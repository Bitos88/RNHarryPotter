import React, { Component } from "react"
import {Image, TouchableOpacity} from 'react-native'
import styles from './styles'
import { Actions } from "react-native-router-flux"
import House from "../../../pages/houses"

class Shield extends Component{
    constructor(props){
        super(props)

    }

    onCharPress = house => {
        this.props.onPress(house)
    }
    

    render() {

        const {nameHouse, icon} = this.props
        var picture = ''
        var pictureRender = ''
        


        

        switch (icon) {
                case "1":
                picture = require('../../../assets/images/1.png')
                break;

                case "2":
                picture = require('../../../assets/images/2.png')
                break;

                case "3":
                picture = require('../../../assets/images/3.png')
                break;

                case "4":
                picture = require('../../../assets/images/4.png')
                break;
        }

        var pictureRender = this.props.icon ? picture : ''


        return(
            <TouchableOpacity style={styles.buttonAct} onPress={() => this.onCharPress(nameHouse)} >
                <Image style={styles.picture} source={pictureRender}/>
            </TouchableOpacity>





        )
    }
}

export default Shield