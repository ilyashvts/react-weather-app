import {CHOOSE_LOCATION, ERROR, GET_WEATHER, SET_LOADING, SET_LOCATION} from './types'

const initState = {
    location: '',
    isLocation: false,
    isLoading: true,
    isError: false
}

const mainReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_LOADING:
            return {...state, isLoading: true}

        case CHOOSE_LOCATION:
            return {...state, chooseLocation: true}

        case SET_LOCATION:
            return {...state, location: action.payload}

        case GET_WEATHER:
            return {...state, isLoading: false, isLocation: true, isError: false}
        case ERROR:
            return {...state, isError: true}

        default: return state
    }
}

export default mainReducer