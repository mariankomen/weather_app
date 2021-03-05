import React from 'react'

import '../../styles/css/style.css'

const WeatherForm = ({userGeoWeather}) => {

    return (
        <div>
            <h1>Weather in your city!</h1>
            <h2>{userGeoWeather.name}, {userGeoWeather.country}</h2>
            <h5>{userGeoWeather.lat}, {userGeoWeather.lon}</h5>
            <ul>
                <li>Timezone: {userGeoWeather.timezone}</li>
                <li>Visibility:{userGeoWeather.visibility}</li>
                <li>General: {userGeoWeather.weather}</li>
                <li>Wind: {userGeoWeather.wind} m/s</li>
            </ul>
        </div>
    )
}

export default WeatherForm