const apiKey = "a34e1a790d438ce58f99a5bb7894e2e8"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const input = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icons")
const errorMessage = document.querySelector(".error-message")
const weatherContainer = document.querySelector(".weather")

async function checkWeather(city) {
  const response = await fetch(`${url}${city}&appid=${apiKey}`)

  if (response.status === 404) {
    errorMessage.style.display = "block"
    weatherContainer.style.display = "none"
  } else {
      
      let data = await response.json()
      console.log(data)
    
      document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + " °C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./image/clouds.png"
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./image/clear.png"
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./image/rain.png"
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./image/drizzle.png"
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./image/mist.png"
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "./image/snow.png"
    }

    weatherContainer.style.display = "block"
    errorMessage.style.display = "none"
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(input.value)
})
