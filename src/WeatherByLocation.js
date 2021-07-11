import React from "react";
import "./Weather.css";
import { stampFormatter, iconHandler } from "./utils";

const WeatherByLocation = ({ data }) => {
  const { name, dt, weather, main, wind } = data;

  if (data?.cod === "404") {
    return <span className="msg">{data?.message}</span>;
  }

  return (
    <>
      <div className="card">
        <div className="left-panel panel">
          <div className="date">{`${stampFormatter(dt)}`}</div>
          <div className="city">{name}</div>
          <div className="temp">
            <img
              alt="weather"
              src={iconHandler(weather?.[0]?.icon)}
              height="60"
              width="60"
            />
            {`${main?.temp.toFixed()}`}&deg;
          </div>
        </div>
        <div className="right-panel panel">
          <div className="parameters">
            <h3>{weather?.[0]?.description}</h3>
            <div>
              <span>{`Speed ${wind?.speed} meter/sec`}</span>
            </div>
            <div>
              <span>{`Pressure ${main?.pressure} hPa`}</span>
            </div>
            <div>
              <span>{`Humidity ${main?.humidity}% `}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WeatherByLocation.defaultProps = {
  name: "Unknown City",
  dt: "Today",
  weather: {
    0: {
      description: "No data"
    }
  },
  main: {
    temp: 0,
    pressure: 0,
    humidity: 0
  },
  wind: {
    speed: 0
  }
};

export default WeatherByLocation;
