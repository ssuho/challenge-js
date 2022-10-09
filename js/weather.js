const API_KEY = "7fd72483391e7229ea0c7d240f971864";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
  });
}


function onGeoError() {
  alert("Can't fine you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);