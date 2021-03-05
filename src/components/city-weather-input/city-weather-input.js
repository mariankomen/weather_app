import React from 'react'

import '../../styles/css/style.css'

const CityWeatherInput = (props) => {
    return (
        <div>
            <h3>CityWeatherInput</h3>

            <input className="form-control"
                   type="text"
                   placeholder="Введіть місто:"
                   onChange={props.OnCityChange}
                   value={props.WeatherCityChanger}
            />
            <button
                onClick={()=>{
                    props.GetData();
                    props.GetUserWeather();
                }}
            >Click</button>
        </div>
    )
}

export default CityWeatherInput