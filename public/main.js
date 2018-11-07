//  Create class WeatherAPI
//  --this class will encapsulates all the logic with working with the WeatherAPI
//  --should have view property API_URL
//  --should have view property getWeatherByZipCode
//  --should have view property getWeatherByCity

class WeatherAPI {
  getWeatherForCity(city) {
    let cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0c76d1569358d0297f8ab56efafdb49&units=imperial`
    fetch(cityURL)
      .then(response => {
        return response.json()
      })
      .then(weatherData => {
        let temp = weatherData.main.temp
        let humidity = weatherData.main.humidity
        let windSpeed = weatherData.wind.speed
        let dom = new DocumentObjectModelOne()
        dom.substitute(temp, humidity, windSpeed)
      })
  }
  getWeatherForZip(zip) {
    let zipURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=b0c76d1569358d0297f8ab56efafdb49&units=imperial`
    fetch(zipURL)
      .then(response => {
        return response.json()
      })
      .then(weatherData => {
        let temp = weatherData.main.temp
        let humidity = weatherData.main.humidity
        let windSpeed = weatherData.wind.speed
        let dom = new DocumentObjectModelOne()
        dom.substitute(temp, humidity, windSpeed)
      })
  }
}
// How can I display textContent of string with of temp, humidity, and windSpeed?
class DocumentObjectModelOne {
  substitute(temp, humidity, windSpeed) {
    this.appendLI(temp)
    this.appendLI(humidity)
    this.appendLI(windSpeed)
  }
  appendLI(value) {
    let theUL = document.querySelector('ul')
    let newLI = document.createElement('li')
    newLI.textContent = value
    theUL.appendChild(newLI)
  }
  city() {
    let theInput = document.querySelector('.city-input').value
    return theInput
  }
  // zip() {
  //   let theInput = document.querySelector('.zip-input').value
  //   return theInput
  // }
}

userCitySearch = () => {
  let dom = new DocumentObjectModelOne()
  let city = dom.city()
  let weatherAPI = new WeatherAPI()
  weatherAPI.getWeatherForCity(city)
}

// userZipSearch = () => {
//   let dom = new DocumentObjectModelOne()
//   let zip = dom.zip()
//   let weatherAPI = new WeatherAPI()
//   weatherAPI.getWeatherForCity(zip)
// }
const main = () => {
  document.querySelector('.search').addEventListener('click', userCitySearch)
  // document.querySelector('.searchZip').addEventListener('click', userZipSearch)
}
document.addEventListener('DOMContentLoaded', main)

/*const citySearch = () => {
  let inputArea = document.querySelector('.city-input')
  let citySelection = inputArea.value
  let urlCityData = `https://api.openweathermap.org/data/2.5/weather?q=${citySelection}&appid=b0c76d1569358d0297f8ab56efafdb49&units=imperial`
  // Add =imperial to the end of the link to change incoming temp data to farenheit.
  fetch(urlCityData)
    .then(response => response.json())
    .then(weatherData => {
      console.log(weatherData)

      let theUL = document.querySelector('ul')

      let temperature = document.createElement('li')
      temperature.textContent = `Temperature: ${weatherData.main.temp}°F`
      theUL.appendChild(temperature)

      let humidity = document.createElement('li')
      humidity.textContent = `Humidity: ${weatherData.main.humidity}`
      theUL.appendChild(humidity)

      let windSpeed = document.createElement('li')
      windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} MPH`
      theUL.appendChild(windSpeed)
    })
}

const zipSearch = () => {
  let inputArea = document.querySelector('.zip-input')
  let citySelection = inputArea.value
  let urlCityData = `https://api.openweathermap.org/data/2.5/weather?zip=${citySelection}&appid=b0c76d1569358d0297f8ab56efafdb49&units=imperial`

  fetch(urlCityData)
    .then(response => response.json())
    .then(weatherData => {
      console.log(weatherData)

      let theUL = document.querySelector('ul')

      let temperature = document.createElement('li')
      temperature.textContent = `Temperature: ${weatherData.main.temp}°F`
      theUL.appendChild(temperature)

      let humidity = document.createElement('li')
      humidity.textContent = `Humidity: ${weatherData.main.humidity}`
      theUL.appendChild(humidity)

      let windSpeed = document.createElement('li')
      windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} MPH`
      theUL.appendChild(windSpeed)
    })
}

const main = () => {
  let searchButton = document.querySelector('.search')
  searchButton.addEventListener('click', citySearch)

  let zipSearchButton = document.querySelector('.searchZip')
  zipSearchButton.addEventListener('click', zipSearch)
}

document.addEventListener('DOMContentLoaded', main)

//-------Instructions in English of what I need-----------

//  Create a class that holds all the logic for interacting with the DOM
//  --should have method addForecastToDom
//  --should have method getUserInput

//--------My ID from OpenWeatherMap:-----------------------
//  b0c76d1569358d0297f8ab56efafdb49
*/
