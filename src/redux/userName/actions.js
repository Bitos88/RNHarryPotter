import * as types from './types'

export const setUserName = userName => {
    const action = {
        type: types.UPDATE_USER_NAME,
        payload: userName

    }
    return action
}