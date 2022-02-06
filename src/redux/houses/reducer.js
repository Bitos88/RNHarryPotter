import { Actions } from 'react-native-router-flux';
import * as types from './types'


const initialState = {
    house: ''
}

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case types.HOUSE_CHARACTERS_UPDATE_HOUSE:
            return {
                ...state,
                house: action.payload
            }
        default:
            return state;
    }

}

export default reducer