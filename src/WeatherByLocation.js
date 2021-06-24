import React from "react";
import "./Weather.css";
import {stampFormatter, iconHandler}  from "./utils";

const WeatherByLocation = ({w}) => {

    console.log(w)

    // const [weather, setWeather] = useState(w)

    // useEffect(()=> {
    //     const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
    //     const cityname = "Boston"
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}`
    //     fetch(url)
    //     .then(response =>  response.json())
    //     .then(data => setWeather(data));

    // },[])

    return (
    <>
      <div className="WeatherApp">
          <div>City : {w?.name}</div>
          <div>Time : {stampFormatter(w?.dt)}</div>
          <img alt="weather icon" src={iconHandler(w?.weather[0]?.icon)} />
          <div>Description : {w?.weather[0]?.description}</div>
          <div>Temperature : {w?.main?.temp}</div>
          <div>Pressure : {w?.main?.pressure}</div>
          <div>Humidity : {w?.main?.humidity}</div>
          <div>Speed : {w?.wind?.speed}</div>
      </div>
      <div class="card">
        <h2 style={{alignItems:"center"}}>Brussels</h2>
        <h4 style={{alignItems:"center"}}><span>22:04 PM</span></h4>
        <h3>Cloudy<span>Wind 10km/h <span class="dot">•</span> Humidity 0%</span></h3>
        <div>
          <img alt="weather icon" src={iconHandler(w?.weather[0]?.icon)} />
          <h1>23°</h1>
        </div>
          <h4>Cloudy<span>Wind 10km/h <span class="dot">•</span> 0%</span></h4>
      </div>
    </>
    );
  }
  
  export default WeatherByLocation;
