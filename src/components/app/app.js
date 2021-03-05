import React, {useState, useEffect} from 'react'
import CityWeatherInput from "../city-weather-input/city-weather-input";
import axios from 'axios'
import WeatherForm from "../weather-form/weather-form";

const App = () => {

    const [weather, setWeather] = useState({})
    const [WeatherCityChanger, setWeatherCityChanger] = useState('')
    const [userLonLat, setUserLonLat] = useState({})
    const [show, setShow] = useState(false)

    //Get user geolocation
    function success(pos) {
        let crd = pos.coords;
        setUserLonLat({
            latitude: crd.latitude,
            longitude: crd.longitude
        })
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error);

   //Get user geolocation weather
    const GetUserWeather = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${userLonLat.latitude}&lon=${userLonLat.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                console.log('GEOLOCDATA: ',res)
            })
    }

    //Get weather by city from input area
    const GetData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherCityChanger}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const data = res.data
                console.log(res);
                setWeather(data)
            })
    }

        const OnCityChange = (e) => {
            setWeatherCityChanger(e.target.value)
        }

        return (
            <div>
                <CityWeatherInput OnCityChange={OnCityChange}
                                  WeatherCityChanger={WeatherCityChanger}
                />

                <button
                    onClick={() => {
                        GetData();
                        setShow(true);
                        GetUserWeather();
                    }}
                >
                    Submit City
                </button>
                {show && <WeatherForm name={weather.name}
                                      timezone={weather.timezone}
                />}
            </div>

        )
    }


export default App