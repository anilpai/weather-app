import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherByCityName from "./WeatherByLocation";
import WeatherForecast from "./WeatherForecast";

const Weather = () => {
  const [isCityName, setIsCityName] = useState(
    isNaN(localStorage.getItem("city") || "")
  );
  const [isMetric, setIsMetric] = useState(true);
  const [city, setCity] = useState(localStorage.getItem("city") || "");
  const [weather, setWeather] = useState(null);
  const [tenDayWeather, setTenDayWeather] = useState(null);
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);

  const onInputChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather = () => {
    let url = "";
    const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
    url = isNaN(city)
      ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      : `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${api_key}`;
    if (isMetric) {
      url += "&units=metric";
    } else {
      url = "&units=imperial";
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    getForecast();
  };

  const getForecast = () => {
    let url = "";
    const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
    url = isNaN(city)
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=10&appid=${api_key}`
      : `https://api.openweathermap.org/data/2.5/forecast?zip=${city}&cnt=10&appid=${api_key}`;

    if (isMetric) {
      url += "&units=metric";
    } else {
      url = "&units=imperial";
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setTenDayWeather(data))
      .catch((err) => {
        console.log(err);
        setError2(err);
      });
  };

  const saveWeather = () => {
    localStorage.setItem("city", city);
  };

  return (
    <>
      <WeatherSearch
        getWeather={getWeather}
        saveWeather={saveWeather}
        onInputChange={onInputChange}
        data={weather}
        city={city}
      />
      {weather && (
        <WeatherByCityName
          getWeather={getWeather}
          saveWeather={saveWeather}
          onInputChange={onInputChange}
          data={weather}
          city={city}
        />
      )}
      {weather && <WeatherForecast data={tenDayWeather} />}
    </>
  );
};

export default Weather;
