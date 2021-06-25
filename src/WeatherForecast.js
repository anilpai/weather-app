import React, { useState, useEffect } from "react";
import { stampFormatter, iconHandler, formats } from "./utils";

const WeatherForecast = () => {
  const [tenDayWeather, setTenDayWeather] = useState();

  useEffect(() => {
    const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
    const cityname = "Austin";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&cnt=10&units=metric&&appid=${api_key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTenDayWeather(data));
  }, []);

  const weatherStyle = {
    display: "flex",
    margin: "5px",
    padding: "5px",
    flexWrap: "wrap",
  };

  return (
    <div style={weatherStyle}>
      {tenDayWeather?.list?.map((d) => {
        return (
          <div className="card">
            <div className="left-panel panel">
              <div className="date">Thursday, 24 Jun 2021</div>
              <div className="city">Austin</div>
              <div className="temp">
                <img
                  src="" 
                  width="60"
                />
                27&deg;
              </div>
            </div>
            <div className="right-panel panel">
              <div className="parameters">
                <h3>Cloudy</h3>
                <div>
                  <span> Speed 0.45 meter/sec </span>
                </div>
                <div>
                  <span> Pressure 1014 hPa </span>
                </div>
                <div>
                  <span> Humidity 75% </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;
