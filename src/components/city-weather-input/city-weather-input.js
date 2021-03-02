import React from 'react'

const CityWeatherInput = (props) => {
    return (
        <div>
            <h3>CityWeatherInput</h3>

            <input type='text'
                   placeholder='enter city'
                   onChange={props.OnCityChange}
                   value={props.WeatherCityChanger}
            />
        </div>
    )
}

export default CityWeatherInput