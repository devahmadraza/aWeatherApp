// City input	.city-input
// Search button	.search-btn
// City name	.city-name
// Country name	.country-name
// Weather icon	.weather-icon
// Temperature	.temperature
// Weather condition	.weather-condition
// Humidity value	.humidity
// Wind speed	.wind-speed
// Feels like value	.feels-like

const cityInput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')
const cityName = document.querySelector('.city-name')

const apiKey = 'd57de0391da2d301eb6fc2e33f4908d6'
//   URL={'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}'}


searchBtn.addEventListener('click',()=>{
const city=cityInput.value
getWeatherData(city)
})

async function getWeatherData(city) {
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const weather=await  response.json()
    console.log(weather)    



}