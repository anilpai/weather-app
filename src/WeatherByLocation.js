import React from "react";
import "./Weather.css";
import {stampFormatter, formats, iconHandler }  from "./utils";

const WeatherByLocation = ({ getWeather, saveWeather, onInputChange, data, city }) => {
  const { name, dt, weather, main, wind } = data || {};

  console.log(data);

  return (
    <>
      <div className="top-banner">
        <div className="container">
          <div className="search-box">
            <input type="text" name="city" id="city" value={city} placeholder="Search for a city" onChange={onInputChange} />
            <button onClick={getWeather}>Get Weather</button>
            <button onClick={saveWeather}>Save Weather</button>
            <span className="msg"></span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="left-panel panel">
          <div className="date">Monday, 20 Aug 2018</div>
          <div className="city">{name}</div>
          <div className="temp">
            <img
              src={iconHandler(weather?.[0]?.icon)}
              height="60"
              width="60"
            />
            27&deg;
          </div>
        </div>
        <div className="right-panel panel">
          <div className="parameters">
            <h3>Cloudy</h3>
            <div>
              <span>{`Speed 0.45 meter/sec`}</span>
            </div>
            <div>
              <span>{`Pressure 1014 hPa`}</span>
            </div>
            <div>
              <span>{`Humidity ${main?.humidity}${main?.humidity} `}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherByLocation;
