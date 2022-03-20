const weather = document.querySelector("#Weather span:first-child");
const city = document.querySelector("#Weather span:last-child");
const API_KEY = "b16e987391b8375db102d3301e3d33b5";

function getGeo(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `You are in: ${data.weather[0].main}`;
    });
}

function failedGetGeo(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(getGeo, failedGetGeo);