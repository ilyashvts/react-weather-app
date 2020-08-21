import React from 'react'
import {connect} from 'react-redux'
import WeatherIcon from './WeatherIcon'
import {MdLocationOn} from 'react-icons/all'

const WeatherBoard = props => {
    const {isLocation} = props
    const {location, date, current, daily} = props.weather

    if(isLocation) {
        return (
            <>
                <div className="current">
                    <div className="current__main">
                        <span className="location"><MdLocationOn/>{location}</span>
                        <span className="date">{date}</span>
                        <span className="temperature">{current.temperature}&#8451;</span>
                    </div>

                    <WeatherIcon className={'current__icon'} weather={current.weather}/>

                    <div className="current__secondary">
                        <div className="info">
                            <div className="info__inner">
                                <span className="info__title">Feels like:</span>
                                <span className="info__value">{current.feelsLike}&#8451;</span>
                            </div>
                            <div className="info__inner">
                                <span className="info__title">Pressure:</span>
                                <span className="info__value">{current.pressure} mm</span>
                            </div>
                            <div className="info__inner">
                                <span className="info__title">Humidity:</span>
                                <span className="info__value">{current.humidity}%</span>
                            </div>
                            <div className="info__inner">
                                <span className="info__title">Wind:</span>
                                <span className="info__value">{current.wind} m/s</span>
                            </div>
                        </div>

                        <div className="sunstate">
                            <div className="sunrise">
                                <img src={require('../assets/sunrise.svg')} alt="" className='sunstate__icon'/>
                                {current.sunrise}
                            </div>
                            <div className="sunset">
                                <img src={require('../assets/sunset.svg')} alt="" className='sunstate__icon'/>
                                {current.sunset}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="daily">
                    {daily.map((elem, key) => {
                        return (
                            <div className="daily__inner" key={key}>
                                <span className="daily__day">{elem.day}</span>
                                <WeatherIcon className={'daily__icon'} weather={elem.weather}/>
                                <span className="daily__temperature">{elem.temperature}&#8451;</span>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <h5>Please, enter the city name</h5>
    )
}

const mapStateToProps = state => {
    const {isLocation} = state.main
    const {weather} = state
    return {weather, isLocation}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoard)