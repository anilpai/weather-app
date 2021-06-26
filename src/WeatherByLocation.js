import React from "react";
import "./Weather.css";
import { stampFormatter, iconHandler } from "./utils";

const WeatherByLocation = ({ data }) => {
  const { name, dt, weather, main, wind } = data || {};

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

export default WeatherByLocation;
