import React, {useState, useEffect} from 'react'

const App = () => {
    const API_KEY = '3fdcc41eff12a3a45c84d5ac296850cd'
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
    const city = 'Lviv'

    const [weather, setWeather] = useState({})

    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


    const GET_DATA = async (e) => {
        e.preventDefault()
        const GotData = await fetch(`${API_URL}${city}&appid=${API_KEY}`)
        const data = await GotData.json()
        setWeather(data)
    }


    return (
        <div>
            App
            <button
                onClick={GET_DATA}
            >Click me</button>
            <button
                onClick={()=> console.log(weather)}
            >Show weather</button>
        </div>
    )
}

export default App