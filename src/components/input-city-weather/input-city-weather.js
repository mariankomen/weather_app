import React from 'react'

import '../../styles/css/style.css'

const InputCityWeather = ({userGeoWeather}) => {
    return (
        <div className='user_city'>
            <div className='user_city-title'>
                <h1>Weather in input city!</h1>
            </div>
            <div className='user_city-title_name'>
                <h2>{userGeoWeather.name}, {userGeoWeather.country}</h2>
            </div>
            <div className='user_city__coordinates'>
                <p>Coordinates: {userGeoWeather.lat}, {userGeoWeather.lon}</p>
            </div>
            <div className='user_city__weather-details'>
                <ul>
                    <li>Timezone: {userGeoWeather.timezone}</li>
                    <li>Visibility: {userGeoWeather.visibility}</li>
                    <li>General: {userGeoWeather.weather}</li>
                    <li>Wind: {userGeoWeather.wind} m/s</li>
                    <li>Temperature: {userGeoWeather.temperatureC} °C</li>
                </ul>
            </div>
        </div>
    )
}

export default InputCityWeather