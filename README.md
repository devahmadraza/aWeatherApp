# 🌤️ Weather App

A modern and responsive Weather App built with HTML, CSS, and JavaScript that fetches real-time weather information and a 5-day forecast using the OpenWeather API.

The app allows users to search for any city and instantly view its current weather conditions, temperature, humidity, wind speed, feels-like temperature, and upcoming forecast.

✨ Features
🌍 Search Weather by City
🌡️ Current Temperature in Celsius
☁️ Real-time Weather Condition
💧 Humidity Information
💨 Wind Speed
🌡️ Feels Like Temperature
📅 5-Day Weather Forecast
🖼️ Dynamic Weather Icons
🔄 Real-time API Data
🏙️ Default Tokyo Weather on App Load
⚠️ Invalid City Handling
📱 Responsive User Interface
🔐 Async/Await & Error Handling
🛠️ Technologies Used
Technology	Purpose
HTML5	Structure of the application
CSS3	Styling and responsive UI
JavaScript	Application logic and API integration
OpenWeather API	Weather and forecast data
Fetch API	Making HTTP requests
Async/Await	Handling asynchronous API requests
DOM Manipulation	Updating weather information dynamically
🔌 API Integration

This project uses the OpenWeather API to retrieve weather information.

Current Weather API

The app requests:

https://api.openweathermap.org/data/2.5/weather
5-Day Forecast API

The forecast is retrieved from:

https://api.openweathermap.org/data/2.5/forecast

The API returns information such as:

City
Temperature
Humidity
Wind
Feels Like
Weather Condition
Weather Icon
Forecast Data
🌦️ How the App Works
1. User enters a city
Enter city name
       ↓
Click Search
2. JavaScript gets the input
cityInput.value
       ↓
City name
3. API request is sent
City
 ↓
OpenWeather API
 ↓
Weather response
4. JSON response is converted into JavaScript data
const weather = await response.json()
5. Weather information is displayed
API Data
   ↓
DOM
   ↓
Weather UI
📅 5-Day Forecast Logic

OpenWeather provides multiple forecast records for each day.

Instead of simply selecting every 8th record, this project groups the forecast data by date.

40 forecast records
        ↓
Group by date
        ↓
Unique dates
        ↓
First 5 dates
        ↓
5 forecast cards

The project uses:

const dailyForecast = {}

Then each forecast record is assigned to its date:

dailyForecast[date] = data

Finally, only five days are selected:

const fiveDays = Object.values(dailyForecast).slice(0, 5)

This makes the forecast logic more flexible than relying on fixed array positions.

🖼️ Dynamic Weather Icons

The app uses the icon code provided by OpenWeather:

data.weather[0].icon

For example:

01d → Clear
10d → Rain
02d → Clouds

The icon code is then used to display the appropriate weather image.

API
 ↓
Weather Icon Code
 ↓
Dynamic Image
 ↓
Weather Card
📂 Project Structure
weather-app/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
🚀 Getting Started
1. Clone the repository
git clone YOUR_REPOSITORY_URL
2. Open the project
weather-app/
3. Add your OpenWeather API key

Inside script.js:

const apiKey = 'YOUR_API_KEY'

Replace YOUR_API_KEY with your OpenWeather API key.

4. Run the application

You can open index.html directly in your browser, or use Live Server in VS Code.

🔑 API Key

You need an API key from OpenWeather to run this project.

For security, do not upload your real API key to a public GitHub repository.

A better approach for a public project is to use environment variables/backend protection.

🎯 What I Learned From This Project

This project helped me practice several important JavaScript concepts:

DOM selectors
Event listeners
Functions
Arrays and objects
forEach()
Object.values()
.slice()
.split()
Date objects
Template literals
fetch()
Promises
async/await
try...catch
JSON parsing
API integration
Dynamic DOM creation
Conditional rendering
Working with nested API objects
Dynamic images
Handling API errors
🧠 Key JavaScript Concepts
Fetch API
const response = await fetch(url)
JSON Parsing
const weather = await response.json()
DOM Manipulation
cityName.textContent = weather.name
Dynamic Elements
const card = document.createElement('div')
Event Handling
searchBtn.addEventListener('click', ...)
Error Handling
try {
    // API request
} catch (error) {
    // Handle error
}
🔮 Future Improvements

Possible improvements for future versions:

🌙 Dark/Light mode
📍 Current location weather using Geolocation API
🌅 Sunrise and sunset information
🌬️ Wind direction
🌧️ Chance of rain
🌡️ Celsius/Fahrenheit toggle
🔍 Search suggestions
⏳ Loading animation
🎨 Dynamic background based on weather
📊 More detailed weather charts
📱 Progressive Web App (PWA)
🔒 Secure API key handling
📸 Project Preview

Add a screenshot of your project here:

![Weather App Screenshot](./screenshots/weather-app.png)
👨‍💻 Author

Ahmad Raza

Built as a JavaScript practice project to learn API integration, asynchronous JavaScript, DOM manipulation, and dynamic UI rendering.

⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

📌 Project Summary

A responsive JavaScript Weather App that uses the OpenWeather API to display real-time weather information and a dynamic 5-day forecast with weather-specific icons.