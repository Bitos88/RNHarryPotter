import * as types from './types'
import * as api from '../../api'

export const setLoading = (loading = false) => {
    const action = {
        type: types.HOUSE_CHARACTERS_UPDATE_LOADING,
        payload: loading

    }
    return action
}

export const setList = (list = []) => {
    const action = {
        type: types.HOUSE_CHARACTERS_UPDATE_LIST,
        payload: list
    }
    return action

}

export const setItem = item => {
    const action = {
        type: types.HOUSE_CHARACTERS_UPDATE_ITEM,
        payload: item
    }
    return action
}

export const getList = () => {
    const asyncFuncAction = async (dispatch, getState) => {
        try {
            console.log({LOGGG: getState()})
            dispatch(setLoading(true))

            const houseName = getState().houseName.house

            const getCharactersListRes = await api.getHousesChars(houseName)
            const housesData = getCharactersListRes || []

            dispatch(setList(housesData))
            
        } catch (error) {
            console.error(error)
        }finally {
            dispatch(setLoading(false))
        }
    }
    return asyncFuncAction

}