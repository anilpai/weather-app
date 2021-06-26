import React from "react";
import "./Weather.css";

const WeatherSearch = ({
  getWeather,
  saveWeather,
  onInputChange,
  data,
  city,
}) => {
  return (
    <>
      <div className="top-banner">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              placeholder="Search for a city"
              onChange={onInputChange}
            />
            <button onClick={getWeather}>Get Weather</button>
            <button onClick={saveWeather}>Save Weather</button>
            <span className="msg"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSearch;
