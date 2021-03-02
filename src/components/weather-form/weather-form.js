import React from 'react'

const WeatherForm = (props) => {
    return (
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.timezone}</li>

            </ul>
        </div>
    )
}

export default WeatherForm