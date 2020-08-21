import {combineReducers} from 'redux'
import weatherReducer from './weatherReducer'
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
    main: mainReducer,
    weather: weatherReducer
})

export default rootReducer