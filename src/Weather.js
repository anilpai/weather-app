import React, { useState, useEffect } from "react";
import WeatherByCityName from "./WeatherByLocation";
import WeatherForecast from "./WeatherForecast";


const Weather = () => {
  const [isCityName, setIsCityName] = useState(
    isNaN(localStorage.getItem("city") || "")
  );
  const [isMetric, setIsMetric] = useState(true);
  const [city, setCity] = useState(localStorage.getItem('city') || '');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const onInputChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather = () => {
    let url = "";
    const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
    url = isNaN(city) ? 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` :
    `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${api_key}`;
    if (isMetric) {
      url += "&units=regular";
    } else {
      url = "&units=imperial";
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  };

  const saveWeather = () => {
    localStorage.setItem("city", city);
  };

  return (
    <>
      <WeatherByCityName
        getWeather={getWeather}
        saveWeather={saveWeather}
        onInputChange={onInputChange}
        data={weather}
        city={city}
      />
      <WeatherForecast data={weather}/>
    </>
  );
};

export default Weather;
