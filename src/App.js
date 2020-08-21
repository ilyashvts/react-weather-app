import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getWeather} from './redux/actions'
import WeatherBoard from './components/WeatherBoard'
import InputLocation from './components/inputLocation'
import Error from './components/Error'

const App = props => {
    const {getWeather, isLoading, isError} = props

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div className="weather">
            <img className='weather__bg' src={require('./assets/bg.jpg')} alt=""/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <InputLocation />
                    </div>

                    <div className="col-12 h-100 mt-5">
                        <div className="weather__board">
                            {isLoading || isError ? <Error/> : <WeatherBoard/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const {isLoading, isError} = state.main
    return {isLoading, isError}
}

const mapDispatchToProps = {
    getWeather,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

