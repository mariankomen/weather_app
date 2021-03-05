import React from 'react'

import '../../styles/css/style.css'
import Button from '@material-ui/core/Button';

const CityWeatherInput = (props) => {
    return (
        <div className='input-field'>
            <input type="text"
                   className="form-control"
                   aria-label=""
                   aria-describedby="basic-addon1"
                   placeholder="Введіть місто:"
                   onChange={props.OnCityChange}
                   value={props.WeatherCityChanger}/>

            <Button variant="contained"
                    color="primary"
                    onClick={()=>{
                        props.GetData();
                        props.GetUserWeather();
                    }}
            >
                Знайти
            </Button>
        </div>
    )
}

export default CityWeatherInput