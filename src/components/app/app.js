import React, {useState, useEffect} from 'react'

const App = () => {
    const API_KEY = '3fdcc41eff12a3a45c84d5ac296850cd'
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
    const city = 'Lviv'

    const [weather, setWeather] = useState({})

    useEffect(()=>{
        async function GetData(){
            const GotData = await fetch(`${API_URL}${city}&appid=${API_KEY}`)
            const data = await GotData.json()
            setWeather(data)
        }
        GetData()
    })


    return (
        <div>
            App
            <button
                onClick={()=> console.log(weather.name, weather.weather)}
            >Show weather</button>
        </div>
    )
}

export default App