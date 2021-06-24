import React, {useState, useEffect} from "react";


const WeatherForecast = () => {

    const [tenDayWeather, setTenDayWeather] = useState()

    useEffect(()=> {
        const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
        const cityname = "Austin"
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=metric&&appid=${api_key}`
        fetch(url)
        .then(response =>  response.json())
        .then(data => setTenDayWeather(data));
    },[])


    const weatherStyle ={
      display : "flex",
      margin : "50px",
      padding : "20px",
      flexWrap: "wrap"
    }
    
    return (
      <div style={weatherStyle}>
        <div>{` Weather Forecast for next 10 days :`}</div>
         {tenDayWeather?.list?.map((d) => {
           return (
            <div style={{"padding": "30px"}}>
                <div>date: {d?.dt}</div>
                <div>weather: {d?.weather[0]?.description}</div>
                <div>temp : {d?.main?.temp}</div>
                <div>pressure: {d?.main?.pressure}</div>
                <div>humidity: {d?.main?.humidity}</div>
                <div>wind speed: {d?.wind?.speed}</div>
            </div>
           )
         })}
      </div>
    );
  }

  export default WeatherForecast;
  