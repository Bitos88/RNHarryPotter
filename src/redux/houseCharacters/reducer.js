import { Actions } from 'react-native-router-flux';
import * as types from './types'


const initialState = {
    loading: false,
    list: [],
    item: null
}

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case types.HOUSE_CHARACTERS_UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        
        case types.HOUSE_CHARACTERS_UPDATE_LIST:
            return {
                ...state,
                list: action.payload
                }

        case types.HOUSE_CHARACTERS_UPDATE_ITEM:
            return {
                ...state,
                item: action.payload
            }
            
    
        default:
            return state;
    }

}

export default reducer