const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const id = "4492a07cd573111f336a4e5dd41384bc";

const temp = document.querySelector(".temp");
const cityy = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");

const img = document.querySelector(".weather-icon");

async function weather(city) {
    const response = await fetch(URL + city + `&appid=${id}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        temp.innerText = data.main.temp + "°c";
        cityy.innerText = data.name;
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            img.src = "clouds.png";
        }
        else if (data.weather[0].main == "Smoke") {
            img.src = "clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            img.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            img.src = "mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            img.src = "rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            img.src = "snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

button.addEventListener("click", () => {
    weather(input.value);
})