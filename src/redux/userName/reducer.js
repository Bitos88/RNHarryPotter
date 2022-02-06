import { Actions } from 'react-native-router-flux';
import * as types from './types'


const initialState = {
    userName: ''
}

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case types.UPDATE_USER_NAME:
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state;
    }

}

export default reducer