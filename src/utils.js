const stampFormatter = (stamp) => {
  let newStamp = stamp * 1000;
  let date = new Date(newStamp);
  let formattedTime = date.toLocaleTimeString([], {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
  });
  return formattedTime;
};

const iconHandler = (icon) => {
  // Day Icons & Night Icons
  return `http://openweathermap.org/img/wn/${icon}@4x.png`
};

const formats = {
    "temp": {
        "standard" : "Kelvin",
        "metric" : "Celsius",
        "imperial": "Fahrenheit"
    },
    "humidity": {
        "standard" : "%",
        "metric" : "%",
        "imperial": "%"
    },
    "pressure": {
        "standard" : "hPa",
        "metric" : "hPa",
        "imperial": "hPa"
    },
    "speed": {
        "standard" : "meter/sec",
        "metric" : "meter/sec",
        "imperial": "miles/hour"
    }
}

const units = {
    's' : 'standard',
    'm' : 'metric',
    'i' : 'imperial'
};

export { stampFormatter, iconHandler, formats, units };
