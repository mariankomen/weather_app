import React, {useState, useEffect} from 'react'
import CityWeatherInput from "../city-weather-input/city-weather-input";
import axios from 'axios'
import WeatherForm from "../weather-form/weather-form";

const App = () => {
    const [weather, setWeather] = useState({})
    const [City, setCity] = useState('Lviv')
    const [WeatherCityChanger, setWeatherCityChanger] = useState('')
    const [show, setShow] = useState(false)

    // useEffect(()=>{
    //     async function GetData(){
    //         const GotData = await fetch(`${process.env.API_URL}${City}&appid=${process.env.API_KEY}`, {
    //                 headers : {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 }
    //             })
    //         const data = await GotData.json()
    //         setWeather(data)
    //     }
    //     GetData()
    // }, [City])

    const GetData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=3fdcc41eff12a3a45c84d5ac296850cd`)
            .then(res => {
                const data = res.data
                console.log(res);
                setWeather(data)

            })
    }

    const OnCityChange = (e) => {
        setWeatherCityChanger(e.target.value)
        console.log(`City is: ${WeatherCityChanger}`)
    }

    const SubmitCity = () => {
        setCity(WeatherCityChanger)
        console.log(City)
    }


    return (
        <div>
            <CityWeatherInput OnCityChange={OnCityChange}
                              WeatherCityChanger={WeatherCityChanger}
            />


            <button
                onClick={()=>{
                    SubmitCity();
                    GetData();
                    setShow(true);
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