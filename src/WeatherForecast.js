import React from "react";
import WeatherByLocation from "./WeatherByLocation";

const WeatherForecast = ({ data }) => {
  return (
    <div>
      {data?.list?.map((d) => {
        return <WeatherByLocation data={d} />;
      })}
    </div>
  );
};

export default WeatherForecast;
