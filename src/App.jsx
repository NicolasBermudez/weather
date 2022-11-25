import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  const success = pos => {
    setCoords({
      lat: pos.coords.latitude,
      long: pos.coords.longitude
    })
  }
  console.log(coords)

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(success)

  }, [])
  
  useEffect(() => {

    if(coords){

      const apiKey = '01c9a4d5572dd9d52ae78b6b6b77248f'

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apiKey}`

      axios.get(URL)
        .then(res => setWeather(res.data))
        .catch(res => console.log(err))
    }

  }, [coords])

  return (
    <div className="App">

    </div>
  )
}

export default App
