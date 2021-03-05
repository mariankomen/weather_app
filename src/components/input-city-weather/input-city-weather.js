import React from 'react'

import '../../styles/css/style.css'

const InputCityWeather = ({userGeoWeather}) => {
    return (
        <div>
            <h1>Weather in input {userGeoWeather.name}!</h1>
            <h2>{userGeoWeather.name}, {userGeoWeather.country}</h2>
            <h5>{userGeoWeather.lat}, {userGeoWeather.lon}</h5>
            <ul>
                <li>Timezone: {userGeoWeather.timezone}</li>
                <li>Visibility:{userGeoWeather.visibility}</li>
                <li>General: {userGeoWeather.weather}</li>
                <li>Wind: {userGeoWeather.wind} m/s</li>
                <li>Temperature: {userGeoWeather.temperatureC} </li>
            </ul>
        </div>
    )
}

export default InputCityWeather