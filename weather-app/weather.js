const apiKey = "a34e1a790d438ce58f99a5bb7894e2e8"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const input = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')


async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + " °C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';


}

searchBtn.addEventListener('click', () => {
    checkWeather(input.value)
})

