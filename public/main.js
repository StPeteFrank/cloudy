
const citySearch = () => {
  let inputArea = document.querySelector('input')
  let citySelection = inputArea.value
  let urlCityData = `https://api.openweathermap.org/data/2.5/weather?q=${citySelection}&appid=b0c76d1569358d0297f8ab56efafdb49&units=imperial`
fetch(urlCityData).then(response => 
  response.json()).then(weatherData => {
    console.log(weatherData)
    
    let theUL =document.querySelector('ul')

  let temperature = document.createElement('li')
  temperature.textContent = `Temperature: ${weatherData.main.temp}°F`
  theUL.appendChild(temperature)

let humidity = document.createElement('li')
  humidity.textContent = `Humidity: ${weatherData.main.humidity}°F`
  theUL.appendChild(humidity)

})
}



// const addTempToUL = temperature => {
  


const main = () => {
  let searchButton = document.querySelector('.search')
  searchButton.addEventListener('click', citySearch)
}







document.addEventListener('DOMContentLoaded', main)








//------------------------------------------
//      Writing Out My Algorithm 
// Find the spot in the user interface where I want to put the temp
//
// Create a new element to put the temperature
// Set the elements text to whatever is inside weather.main.temp
// Make that element appear on the screen

//my id from OpenWeatherMap:
//  b0c76d1569358d0297f8ab56efafdb49
