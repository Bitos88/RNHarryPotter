import { Actions } from 'react-native-router-flux';
import * as types from './types'


const initialState = {
    item: null,
}

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
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