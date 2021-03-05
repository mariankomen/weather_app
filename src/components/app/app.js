import React, {useState, useEffect} from 'react'
import CityWeatherInput from "../city-weather-input/city-weather-input";
import axios from 'axios'
import WeatherForm from "../weather-form/weather-form";

import '../../styles/css/style.css'
import Header from "../header/header";

const App = () => {

    const [weather, setWeather] = useState({})
    const [WeatherCityChanger, setWeatherCityChanger] = useState('')
    const [userLonLat, setUserLonLat] = useState({})
    const [show, setShow] = useState(false)
    const [userGeoWeather, setUserGeoWeather] = useState({})
    //Get user geolocation
    async function success(pos) {
        let crd = await pos.coords;
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
                console.log('GEOLOCDATA: ',res.data)
                //setUserGeoWeather(res.data)
                setUserGeoWeather({
                    name: res.data.name,
                    visibility: res.data.visibility,
                    weather: res.data.weather[0].main,
                    temperatureC: Math.round(res.data.main.temp),
                    country: res.data.sys.country,
                    wind: res.data.wind.speed,
                    lon: res.data.coord.lon,
                    lat: res.data.coord.lat,
                    timezone: res.data.timezone
                })
            })
    }

    //Get weather by city from input area
    const GetData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherCityChanger}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const data = res.data
                console.log(res.data);
                setWeather(data)
                setWeatherCityChanger('')
                console.log('Get by city: ',weather)
            }).catch(()=> {
                alert('Даного міста не знайдено, спробуйте ввести ще раз.')
                setWeatherCityChanger('')
            })
    }

        const OnCityChange = (e) => {
            setWeatherCityChanger(e.target.value)
        }

        return (
            <div>
                <Header/>
                <CityWeatherInput OnCityChange={OnCityChange}
                                  WeatherCityChanger={WeatherCityChanger}
                                  GetData={GetData}
                                  setShow={setShow}
                                  GetUserWeather={GetUserWeather}
                />

                {show && <WeatherForm userGeoWeather={userGeoWeather}/>}


            </div>

        )
    }


export default App