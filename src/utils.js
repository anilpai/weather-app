const stampFormatter = (stamp) => {
    let newStamp = stamp * 1000
    let date = new Date(newStamp);
    let formattedTime = date.toLocaleTimeString([], {month: 'short', day: '2-digit', hour: '2-digit', minute:'2-digit', weekday:'long'});
    return formattedTime
};

const iconHandler = (icon) => {
  let url;
  //Day Icons
      if (icon === '01d') {
          return url = 'http://openweathermap.org/img/wn/01d@2x.png'
      } else if (icon === '02d') {
          return url = 'http://openweathermap.org/img/wn/02d@2x.png'
      } else if (icon === '04d') {
          return url = 'http://openweathermap.org/img/wn/04d@2x.png'
      } else if (icon === '03d') {
          return url = 'http://openweathermap.org/img/wn/03d@2x.png'
      } else if (icon === '09d') {
          return url = 'http://openweathermap.org/img/wn/09d@2x.png'
      } else if (icon === '10d') {
          return url = 'http://openweathermap.org/img/wn/10d@2x.png'
      } else if (icon === '11d') {
          return url = 'http://openweathermap.org/img/wn/11d@2x.png'
      } else if (icon === '13d') {
          return url = 'http://openweathermap.org/img/wn/13d@2x.png'
      } else if (icon === '50d') {
          return url = 'http://openweathermap.org/img/wn/50d@2x.png'
      }
      // Night Icons 
      else if (icon === '01n') {
          return url = 'http://openweathermap.org/img/wn/01n@2x.png'
      } else if (icon === '02n') {
          return url = 'http://openweathermap.org/img/wn/02n@2x.png'
      } else if (icon === '04n') {
          return url = 'http://openweathermap.org/img/wn/04n@2x.png'
      } else if (icon === '03n') {
          return url = 'http://openweathermap.org/img/wn/03n@2x.png'
      } else if (icon === '09n') {
          return url = 'http://openweathermap.org/img/wn/09n@2x.png'
      } else if (icon === '10n') {
          return url = 'http://openweathermap.org/img/wn/10n@2x.png'
      } else if (icon === '11n') {
          return url = 'http://openweathermap.org/img/wn/11n@2x.png'
      } else if (icon === '13n') {
          return url = 'http://openweathermap.org/img/wn/13n@2x.png'
      } else if (icon === '50n') {
          return url = 'http://openweathermap.org/img/wn/50n@2x.png'
      }
}

export {stampFormatter, iconHandler};