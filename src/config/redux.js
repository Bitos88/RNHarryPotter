import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducerHouseChar from '../redux/houseCharacters/reducer'
import reducerHouseName from '../redux/houses/reducer'
import userReducer from '../redux/userName/reducer'

const reducer = combineReducers({
    charHouse: reducerHouseChar,
    houseName: reducerHouseName,
    userName: userReducer

})

const store = createStore(reducer, applyMiddleware(thunk))

export default store