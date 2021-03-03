import React, {useState, useEffect} from 'react'
import CityWeatherInput from "../city-weather-input/city-weather-input";
import axios from 'axios'
import WeatherForm from "../weather-form/weather-form";

const App = () => {
    const [weather, setWeather] = useState({})
    // const [City, setCity] = useState('Lviv')
    const [WeatherCityChanger, setWeatherCityChanger] = useState('')
    const [show, setShow] = useState(false)
    const [userCity, setUserCity] = useState([])

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
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherCityChanger}&appid=3fdcc41eff12a3a45c84d5ac296850cd`)
            .then(res => {
                const data = res.data
                console.log(res);
                setWeather(data)

            })
    }


    async function GetUserLocation () {
        await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,\n' +
            '+Mountain+View,+CA&key=AIzaSyCXQHAI3kZw9279nsoMtaYAhIgTDiN-h1c')
            .then(res => console.log('Ptro',res))
            .catch((error)=> console.log("Xuy ", error))
    }

    geocode()

    function geocode(){
        let location = 'Lviv'
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params:{
                address: location,
                key: 'AIzaSyADKtSKw3mAAwuoe0NEhK3Z0EOGjph7o6U'
            }
        })
        .then(function (response){
            //console.log(response)

            console.log(response.data.results[0])
            })
        .catch(function (error){
            console.log(error)
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
                    // SubmitCity();
                    setShow(true);
                }}
            >
                Submit City
            </button>

            {show && <WeatherForm name={weather.name}
                                  timezone={weather.timezone}
            />}
            <button
                onClick={GetUserLocation}
            >ShowCity
            </button>

        </div>

    )
}

export default App