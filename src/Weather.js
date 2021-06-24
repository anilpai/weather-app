import React, {useState, useEffect} from "react";
import WeatherByCityName from "./WeatherByLocation";

const WeatherInput = () => {

    const [isCityName, setIsCityName] = useState(isNaN(localStorage.getItem("weather") || ''))
    const [isMetric, setIsMetric] = useState(true)
    const [city, setCity] = useState(localStorage.getItem("weather") || '')
    const [weather, setWeather] = useState(null)
    const [savedCity, setSavedCity] = useState(null)

    useEffect(()=> {
        setSavedCity(localStorage.getItem("weather"))
    },[savedCity])

    const onInputChange = (e) => {
        setCity(e.target.value)
        if (isNaN(city)){
            setIsCityName(true)
        }else {
            // is a zip code
            setIsCityName(false)
        }
    }

    const getWeather = () => {
        let url =''
        const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
        if(isCityName){  
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        }else {
            url = `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${api_key}`
        }
        if(isMetric){
            url+="&units=regular"
        }else {
            url="&units=imperial"
        }
        fetch(url)
        .then(response =>  response.json())
        .then(data => setWeather(data));
    }

    const saveWeather = () => {
        localStorage.setItem("weather", city)
        setSavedCity(city)
    }

    return (
      <div className="App">
        <div className="WeatherApp">
          <label>Enter City Name or Zip:</label>
          <input 
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={onInputChange}
        />
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem auto",
          width: "200px"
        }}>
            <button onClick={getWeather}>{` Get Weather `}</button>
            <button onClick={saveWeather}>{ `Save Weather `}</button>
        </div>
        <WeatherByCityName w={weather} />
      </div>
    );
  }
  
  export default WeatherInput;
  


