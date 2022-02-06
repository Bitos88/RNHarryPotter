import * as types from './types'

export const setName = house => {
    console.log({ACTIONS: house})
    const action = {
        type: types.HOUSE_CHARACTERS_UPDATE_HOUSE,
        payload: house

    }
    return action
}