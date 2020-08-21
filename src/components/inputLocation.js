import React from 'react'
import {connect} from 'react-redux'
import {getWeather, setLocation} from '../redux/actions'

const InputLocation = props => {

    const {location, setLocation, getWeather} = props

    return (
        <>
            <h1 className="">Your current weather</h1>
            <div className="input-group mt-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the city name"
                    value={location}
                    onChange={setLocation}
                />

                    <div className="input-group-append">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={() => {getWeather(location)}}
                        >Search
                        </button>
                    </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    const {location} = state.main
    return {location}
}

const mapDispatchToProps = {
    setLocation,
    getWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(InputLocation)