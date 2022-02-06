import * as types from './types'
import * as api from '../../api'


export const setItem = item => {
    const action = {
        type: types.HOUSE_CHARACTERS_UPDATE_ITEM,
        payload: item
    }
    return action
}

