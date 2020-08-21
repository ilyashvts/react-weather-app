import {GET_WEATHER} from './types'

const initState = {
    location: String,
    date: String,
    current: Object,
    daily: Array
}

const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {...state, ...action.payload}

        default: return state
    }
}

export default weatherReducer