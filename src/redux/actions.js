import {ERROR, GET_WEATHER, SET_LOADING, SET_LOCATION} from './types'
import axios from 'axios'
import mainData from './main.data.json'

const {WEATHER_URL, WEATHER_API_KEY, Days, DaysShort, Month} = mainData
const DATE = new Date()
const date = `${Days[DATE.getDay()]}, ${DATE.getDate()} ${Month[DATE.getMonth()]} ${DATE.getFullYear()}`

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const getWeather = prop => {
    setLoading()

    const storageItem = localStorage.getItem('location')
    let location

    if(prop){
        location = prop
        localStorage.setItem('location', JSON.stringify(prop))
    } else if (storageItem) {
        location = JSON.parse(storageItem)
        console.log(location)
    } else {
        return {
            type: 'No location'
        }
    }

    return async dispatch => {

        try {
            const currentWeather = await axios.get(`${WEATHER_URL}weather`, {
                params: {
                    appid: WEATHER_API_KEY,
                    q: location,
                    units: 'metric'
                }
            })

            const forecastWeather = await axios.get(`${WEATHER_URL}forecast`, {
                params: {
                    appid: WEATHER_API_KEY,
                    q: location,
                    units: 'metric'
                }
            })



            const current = currentWeather.data
            const forecast = forecastWeather.data

            const sunrise = `${new Date(current.sys.sunrise * 1000).getHours()}:${new Date(current.sys.sunrise * 1000).getMinutes()}`
            const sunset = `${new Date(current.sys.sunset * 1000).getHours()}:${new Date(current.sys.sunset * 1000).getMinutes()}`

            const newForecast = forecast.list.filter(elem => {
                const ddd = new Date(elem.dt * 1000).getHours()
                return ddd === 9
            })

            const daily = newForecast.map(elem => {
                return {
                    day: `${DaysShort[new Date(elem.dt * 1000).getDay()]}`,
                    temperature: Math.round(elem.main.temp),
                    weather: elem.weather[0].main
                }
            })

            const payload = {
                location: `${current.name}, ${current.sys.country}`,
                date,
                current: {
                    temperature: Math.round(current.main.temp),
                    weather: current.weather[0].main,
                    feelsLike: Math.round(current.main.feels_like),
                    pressure: current.main.pressure,
                    humidity: current.main.humidity,
                    wind: current.wind.speed,
                    sunrise,
                    sunset
                },
                daily
            }

            return dispatch({
                type: GET_WEATHER,
                payload
            })

        } catch (e) {
            return dispatch({
                type: ERROR
            })
        }
    }
}

export const setLocation = e => {
    return {
        type: SET_LOCATION,
        payload: e.target.value
    }
}