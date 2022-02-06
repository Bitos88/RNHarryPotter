import React, {Component} from 'react'
import { SafeAreaView, FlatList, StatusBar, RefreshControl, ActionSheetIOS, Text } from 'react-native'
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod'
import styles from './styles'
import {Actions} from 'react-native-router-flux'
import {getCharacters} from '../../api'
import CharacterCard from '../../components/molecules/charactersCard'




class Home extends Component{


    constructor(props) {
        super(props)
        this.state = {
            characterList: [],
            isLoading: true,
        }
    }
    
    async componentDidMount(){
        this.getCharacterList()

     }

    getCharacterList = async () => {
        try {
            const getCharactersResponse = await getCharacters()
            this.setState({ characterList: getCharactersResponse || [],
                isLoading: false
            })    
        } catch (error) {
            console.log(error)
            this.setState({isLoading: false})
        }
     }


     _renderItem = ({item}) => {

        const onCharPress =  character => Actions.push('Characters', { title: character.name || '', 
        character: character })

        return <CharacterCard character={item} onCharPress= { onCharPress } />

     }

     

         
         
     




    render(){
        
        const {characterList, isLoading} = this.state


        return(
            <>
            <StatusBar barStyle='light-content'/>
            <SafeAreaView style={styles.container}>
             
                
                <FlatList
                
                data = {characterList}
                
                numColumns={2}
                renderItem={ ({item}) => this._renderItem({item})}
                keyExtractor={item => `character-${item?.id}`}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={this.getCharacterList}
                    tintColor={'white'}
                    
                    />
                }
                
                />

            </SafeAreaView>
            </>
        )
    }
}

export default Home