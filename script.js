// // City input	.city-input
// // Search button	.search-btn
// // City name	.city-name
// // Country name	.country-name
// // Weather icon	.weather-icon
// // Temperature	.temperature
// // Weather condition	.weather-condition
// // Humidity value	.humidity
// // Wind speed	.wind-speed
// // Feels like value	.feels-like

// const cityInput = document.querySelector('.city-input')
// const searchBtn = document.querySelector('.search-btn')
// const cityName = document.querySelector('.city-name')
// const weatherTemperature = document.querySelector('.temperatureIn')
// const weatherCondition = document.querySelector('.condition')
// const humidity = document.querySelector('.humidity')
// const windSpeed = document.querySelector('.wind-speed')
// const feelsLike = document.querySelector('.feels-like')
// // const forecastDay = document.querySelector('.forecast-day')
// const forecastContainer = document.querySelector('.forecast-container')

// const apiKey = 'd57de0391da2d301eb6fc2e33f4908d6'
// //   URL={'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}'}


// cityInput.value='Tokyo'
// searchBtn.addEventListener('click', () => {
//     if (cityInput.value=='') {
//         alert('Enter City Name')
//         return
//     }
//     const city = cityInput.value
//     getWeatherData(city)
//     getForecastData(city)
// })


// async function getWeatherData(city ) {
// try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//     const weather = await response.json()
//     console.log(weather)
//     if (weather.cod == 200) {
//         cityName.textContent = weather.name
//         weatherTemperature.textContent = weather.main.temp + '°C'
//         weatherCondition.textContent = weather.weather[0].main
//         humidity.textContent = weather.main.humidity + '%'
//         windSpeed.textContent = weather.wind.speed + 'm/s'
//         feelsLike.textContent = weather.main.feels_like + '°C'
//     } else {
//         cityName.textContent = 'Enter Correct City'

//     }
// } catch (error) {
//     console.log('Unable To Access',error)
// }
    
// }
// async function getForecastData(city) {
// try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
//     const forecast = await response.json()

//      if (forecast.cod != "200") {
//             forecastContainer.innerHTML = `<p>Forecast Not Found</p>`
//             return
//         }

//     forecastContainer.innerHTML = ''
// const dailyForecast={}
// forecast.list.forEach((data)=>{
//     console.log(data)
//     const date = data.dt_txt.split(' ') [0]
 
//     if (!dailyForecast[date]) {
//     dailyForecast[date]=data
// }
// })
// const fiveDays=Object.values(dailyForecast).slice(0,5)
// fiveDays.forEach((data)=>{
// const date =new Date(data.dt*1000)
// const day=date.toLocaleDateString('en-US' ,{
//     weekday:'short'
// })
       
//             const card = document.createElement('div')
//             card.classList.add('forecast-card')

//             card.innerHTML = `
//                 <p class="forecast-day">${day}</p>
//                 <span>${data.weather[0].main}</span>
//                 <h3>${data.main.temp}°C</h3>
//                 <small>${data.weather[0].description}</small>
//             `

//             forecastContainer.appendChild(card)
//         })

//     } catch (error) {
//         console.log('Forecast Not Found', error)
//     }
// }
    
// getWeatherData('Tokyo')
// getForecastData('Tokyo')

// City input       .city-input
// Search button    .search-btn
// City name        .city-name
// Weather icon     .weather-icon
// Temperature      .temperatureIn
// Weather condition .condition
// Humidity         .humidity
// Wind speed       .wind-speed
// Feels like       .feels-like
// Forecast         .forecast-container


const cityInput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')

const cityName = document.querySelector('.city-name')
const weatherIcon = document.querySelector('.weather-icon')
const weatherTemperature = document.querySelector('.temperatureIn')
const weatherCondition = document.querySelector('.condition')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed')
const feelsLike = document.querySelector('.feels-like')

const forecastContainer = document.querySelector('.forecast-container')


const apiKey = 'd57de0391da2d301eb6fc2e33f4908d6'


// Default city
cityInput.value = 'Tokyo'


// Search button
searchBtn.addEventListener('click', () => {

    if (cityInput.value == '') {
        alert('Enter City Name')
        return
    }

    const city = cityInput.value

    getWeatherData(city)
    getForecastData(city)
})


// ===============================
// CURRENT WEATHER
// ===============================

async function getWeatherData(city) {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )

        const weather = await response.json()

        console.log(weather)


        if (weather.cod == 200) {

            // City
            cityName.textContent = weather.name


            // Temperature
            weatherTemperature.textContent =
                weather.main.temp + '°C'


            // Condition
            weatherCondition.textContent =
                weather.weather[0].main


            // Humidity
            humidity.textContent =
                weather.main.humidity + '%'


            // Wind
            windSpeed.textContent =
                weather.wind.speed + ' m/s'


            // Feels like
            feelsLike.textContent =
                weather.main.feels_like + '°C'


            // ===============================
            // CURRENT WEATHER ICON
            // ===============================

            const iconCode = weather.weather[0].icon

            weatherIcon.innerHTML = `
                <img 
                    src="https://openweathermap.org/img/wn/${iconCode}@2x.png"
                    alt="${weather.weather[0].description}"
                >
            `

        } else {

            cityName.textContent = 'Enter Correct City'

        }

    } catch (error) {

        console.log('Unable To Access Weather', error)

    }
}



// ===============================
// 5 DAY FORECAST
// ===============================

async function getForecastData(city) {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        )

        const forecast = await response.json()

        console.log(forecast)


        if (forecast.cod != '200') {

            forecastContainer.innerHTML =
                '<p>Forecast Not Found</p>'

            return
        }


        // Clear old forecast cards
        forecastContainer.innerHTML = ''


        // ===============================
        // CREATE UNIQUE DAYS
        // ===============================

        const dailyForecast = {}


        forecast.list.forEach((data) => {

            const date = data.dt_txt.split(' ')[0]


            // Only save first record of each day
            if (!dailyForecast[date]) {

                dailyForecast[date] = data

            }

        })


        // Get only first 5 days
        const fiveDays =
            Object.values(dailyForecast).slice(0, 5)


        // ===============================
        // CREATE FORECAST CARDS
        // ===============================

        fiveDays.forEach((data) => {


            // Convert timestamp to Date
            const date =
                new Date(data.dt * 1000)


            // Get day name
            const day =
                date.toLocaleDateString('en-US', {
                    weekday: 'short'
                })


            // ===============================
            // GET OPENWEATHER ICON
            // ===============================

            const iconCode =
                data.weather[0].icon


            // Create card
            const card =
                document.createElement('div')


            card.classList.add('forecast-card')


            // Card HTML
            card.innerHTML = `

                <p class="forecast-day">
                    ${day}
                </p>

                <img
                    src="https://openweathermap.org/img/wn/${iconCode}@2x.png"
                    alt="${data.weather[0].description}"
                >

                <h3>
                    ${data.main.temp}°C
                </h3>

                <small>
                    ${data.weather[0].description}
                </small>

            `


            // Add card to container
            forecastContainer.appendChild(card)

        })

    } catch (error) {

        console.log('Forecast Not Found', error)

    }

}



// ===============================
// LOAD DEFAULT TOKYO WEATHER
// ===============================

getWeatherData('Tokyo')
getForecastData('Tokyo')