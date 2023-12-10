

const key = "ff6133e17d8a161d88cf61b3f6d17eb7";

function putDataOnScreen(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".text-forecast").innerHTML = data.weather[0].description;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(
    ".img-forecast"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function getCity(city) {

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

  putDataOnScreen(data);
}

function clickButton() {
  const city = document.querySelector('.input-city').value;

  getCity(city);
}