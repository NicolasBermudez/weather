import React from 'react'
import { useState } from 'react'

const WeatherCard = ({weather, temp}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleClick = () => setIsCelsius(!isCelsius)


  const icon = weather?.weather[0].icon


  return (
    <article className='card' >
      <h1 className='card__title' >El tiempo de Hoy</h1>
      <h2 className='card__subtitle' >{weather?.name} {weather?.sys.country}</h2>
      <aside className='card__icon--container' >
        <img src={weather && `http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" className='card__icon' />
      </aside>
      <h3 className='card__temp' >{
        isCelsius ? 
        `${temp?.celsius} °C` :
        `${temp?.farenheit} °F`
        } </h3>
      <section>
        <h3 className='card__description' >{weather?.weather[0].description}</h3>
        <ul className='card__list' >
          <li className='card__item' >
            <span className='card__span' >Wind Speed</span> {weather?.wind.speed} m/s
          </li>
          <li className='card__item' >
            <span className='card__span' >Clouds</span> {weather?.clouds.all} %
          </li>
          <li className='card__item' >
            <span className='card__span' >Pressure</span> {weather?.main.pressure} hPa
          </li>
          <li className='card__item' >
            <span>Humidity</span> {weather?.main.humidity} %
          </li>
        </ul>
      </section>
      <footer className='card__footer'>
        <button className='card__btn' onClick={handleClick} >change to {isCelsius?'°F' : '°C'} </button>
      </footer>
    </article>
  )
}

export default WeatherCard