import React from 'react'

const WeatherBox = ({weather}) => {
    console.log('weather',weather)
  return (
    <div>
        <div className='weatherBox'>
            <div>{weather?.name}</div>
            <h2>{weather?.main.temp}℃ /{weather?.main.temp*1.8+32}°F</h2>
            <h2>humidity {weather?.main.humidity}%</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    </div>
  )
}

export default WeatherBox