import React, {Component} from "react";
import styles from './styles'
import {SafeAreaView, FlatList, StatusBar, RefreshControl, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import CharacterCard from "../../components/molecules/charactersCard";


class Houses extends Component{
    
    componentDidMount(){
        this.props.getList()
    }



    _renderItem = ({item}) => {
        const onHouseCharPress = character => {
            this.props.setItem(character)
            Actions.push('Characters', {
                title: character?.name || '',   
        })
        }
        
            
        return (
            <CharacterCard character={item} onCharPress={onHouseCharPress}/>
        )

    }

    render(){

        const {loading, list, house} = this.props

        return(
            <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={styles.container}>
                <Text>{house}</Text>
                <FlatList
                data = {list}
                numColumns={2}
                renderItem={({item}) => this._renderItem({item})}
                keyExtractor={item => `house-${item.id}`}
                refreshControl={
                    <RefreshControl
                    refreshing = {loading}
                    onRefresh = {this.props.getList}
                    colors = {['white']}
                    tintColor={'white'}
                    />
                }
                />
            </SafeAreaView>
            </>

        )
    }
}

export default Houses