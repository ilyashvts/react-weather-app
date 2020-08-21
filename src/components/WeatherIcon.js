import React from 'react'

const WeatherIcon = props => {
    const {weather, className} = props
    switch (weather) {
        case 'Clear':
            return (
                <img src={require('../assets/sun.svg')} alt="sun" className={className}/>
            )
        case 'Rain':
            return (
                <img src={require('../assets/rain.svg')} alt="rain" className={className}/>
            )
        case 'Clouds':
            return (
                <img src={require('../assets/cloudy-day.svg')} alt="cloudy-day" className={className}/>
            )
        default: return (<span>No icon</span>)
    }
}

export default WeatherIcon