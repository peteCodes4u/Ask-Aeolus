// openweather api key
const wApiKey = 'f83ed09bfef7deff4712ba233666aef9'

// establish constant for user city entry data
const city = document.getElementById('city');

// today's date formatting with dayJs
const today = dayjs();
$('#todayDate').text(today.format('MMM D, YYYY'));

// day of week formatting with  dayJs
const dayWeek = today.format(`dddd`);
$('#dayOfWeek').text(dayWeek)

// city display
$('#cityDisplay').text(JSON.parse(localStorage.getItem('city')));

// set city to mt. olympus on load

if (localStorage.getItem('city') == null) { $('#cityDisplay').text('Mt. Olympus') };



// establish constant for askAoelus button to pull data
const askAeolusBtn = document.getElementById('askAeolus');

// set time out for getCoordinates so that it does not fire off before data exists
setTimeout(() => {
  getCoordinates();
}, 100)

let latLong = [] || '';
let fiveDayforecast = [] || '';
let aeolusPredictsToday = [] || '';
let citiesSearched = JSON.parse(sessionStorage.getItem("citiesSearched")) || [];


// event listener to set city and run city search for lat / long
askAeolusBtn.addEventListener("click", function () {
  localStorage.clear();
  localStorage.setItem("city", JSON.stringify(city.value));
  citiesSearched.push(city.value);
  sessionStorage.setItem("citiesSearched", JSON.stringify(citiesSearched));

});

// city info value https://nominatim.openstreetmap.org/search?
const getCoordinates = function () {

  let cityData = JSON.parse(localStorage.getItem("city"));

  fetch(`https://nominatim.openstreetmap.org/search?q=${cityData}&format=json&addressdetails=1&limit=1&polygon_svg=1`)
    .then(response => response.json())
    .then(response => localStorage.setItem('cityInfo', JSON.stringify(response)))
    .catch(err => console.error(err));

  // adds delay to execute get latLong to ensure api has returned the necessary data
  setTimeout(() => {
    getLatLong();
    getWeatherforecastData();
    todayWeather();
  }, 1000)

  setTimeout(() => {
    prepareforecastResults();
    groomTodayWeatherResults();
    groomForecastWeatherResults();
    displayTodayResults();
    displayForecastResults();
  }, 2000)

};

// parse city info for lat/long data and save data to local storage
const getLatLong = function () {

  let cityInfoData = JSON.parse(localStorage.getItem('cityInfo'));


  latLong.push(cityInfoData[0].boundingbox[0]);
  latLong.push(cityInfoData[0].boundingbox[2]);

  localStorage.setItem('latLong', JSON.stringify(latLong));
};

const getWeatherforecastData = function () {



  // get lat/long from localstorage
  const latLongData = JSON.parse(localStorage.getItem('latLong'))
  const latitude = parseFloat(latLongData[0]);
  const longitude = parseFloat(latLongData[1]);

  // round the data for API consumption
  const roundLat = latitude.toFixed(2);
  const roundLong = longitude.toFixed(2);

  // get the 5day forecast data from the api
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${roundLat}&lon=${roundLong}&appid=${wApiKey}`, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',

  })
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      // store the data to local storage
      localStorage.setItem('forecast', JSON.stringify(data.list));

    });

};

// prepare Results
const prepareforecastResults = function () {

  // retrieve weatherData from local storage
  const forecast = JSON.parse(localStorage.getItem('forecast'));
  const day1Weather = forecast[8];
  const day2Weather = forecast[16];
  const day3Weather = forecast[24];
  const day4Weather = forecast[32];
  const day5Weather = forecast[39];


  // push data to new array for processing
  let fiveDayforecast = [];

  fiveDayforecast.push(day1Weather);
  fiveDayforecast.push(day2Weather);
  fiveDayforecast.push(day3Weather);
  fiveDayforecast.push(day4Weather);
  fiveDayforecast.push(day5Weather);

  localStorage.setItem('5dayforecast', JSON.stringify(fiveDayforecast));

};

// get today's weather
const todayWeather = function () {

  const latLongData = JSON.parse(localStorage.getItem('latLong'))
  const latitude = parseFloat(latLongData[0]);
  const longitude = parseFloat(latLongData[1]);
  const roundLat = latitude.toFixed(2);
  const roundLong = longitude.toFixed(2);

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${roundLat}&lon=${roundLong}&appid=${wApiKey}`, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',

  })
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      // store the data to local storage
      localStorage.setItem('todayWeather', JSON.stringify(data));

    });

};

// prep the results for display
const groomTodayWeatherResults = function () {

  const todayWeather = JSON.parse(localStorage.getItem('todayWeather'));

  const temp = ((todayWeather.main.temp - 273.15) * 1.8 + 32);
  const wind = todayWeather.wind.speed;
  const humidity = todayWeather.main.humidity;
  const description = todayWeather.weather[0].description;

  let aeolusPredictsToday = [];

  let weather = {
    temp: temp,
    wind: wind,
    humidity: humidity,
    weather: description
  };

  aeolusPredictsToday.push(weather);
  localStorage.setItem("aeolusPredictsToday", JSON.stringify(aeolusPredictsToday))
};

// prep results for 5day forcast
const groomForecastWeatherResults = function () {
  const fiveDayforecast = JSON.parse(localStorage.getItem('5dayforecast'));
  let aeolusPredictsThisWeek = [];

  for (let i = 0; i < fiveDayforecast.length; i++) {
    let temp = (fiveDayforecast[i].main.temp - 273.15) * 1.8 + 32;
    let wind = fiveDayforecast[i].wind.speed;
    let humidity = fiveDayforecast[i].main.humidity;
    let weather = fiveDayforecast[i].weather[0].main;
    let date = fiveDayforecast[i].dt_txt;

    let weatherData = {
      temp: temp,
      wind: wind,
      humidity: humidity,
      weather: weather,
      date: date
    };

    aeolusPredictsThisWeek.push(weatherData);
  }

  localStorage.setItem("aeolusPredictsThisWeek", JSON.stringify(aeolusPredictsThisWeek));
};


// display results for today's weather
const displayTodayResults = function () {

  const todayWeather = JSON.parse(localStorage.getItem('aeolusPredictsToday'))

  const container = document.getElementById('todayWeather');


  const todayWeatherHtml = `
      <div class="col m-3 p-3 rounded text-center cards">
          <h1>${Math.round(todayWeather[0].temp)}°F</h1>
          <p><a>humiditiy: ${todayWeather[0].humidity}%</a></p>
          <p><a>wind: ${todayWeather[0].wind} MPH</a></p>
          <p><a>${todayWeather[0].weather}</a></p>
          
      </div >
      `;

  container.insertAdjacentHTML('beforeend', todayWeatherHtml);

};

const displayForecastResults = function () {
  const forecastArray = JSON.parse(localStorage.getItem('aeolusPredictsThisWeek')) || [];
  let currentDate = dayjs().add(1, 'day');

  forecastArray.forEach(item => {
    const forecastData = [
      {
        temp: item.temp,
        humidity: item.humidity,
        wind: item.wind,
        weather: item.weather,
      },
    ];

    const formattedDate = currentDate.format('MMM D, YYYY');

    const container = document.getElementById('forecast');

    forecastData.forEach((day) => {
      const forecastHtml = `
              <div class="col m-3 p-3 rounded text-center cards">
                  <h1>${Math.round(day.temp)}°F</h1>
                  <p><a>humidity: ${day.humidity}%</a></p>
                  <p><a>wind: ${day.wind} MPH</a></p>
                  <p><a>${day.weather}</a></p>
                  <p><a>${formattedDate}</a></p> 
              </div>
          `;

      container.insertAdjacentHTML('beforeend', forecastHtml);

      currentDate = currentDate.add(1, 'day');
    });
  });

  addCityButtons();
};


const addCityButtons = function () {

  let citiesSearched = JSON.parse(sessionStorage.getItem("citiesSearched"));
  const citySearchArray = citiesSearched;
  const container = document.getElementById('cityButtons');

  if (citiesSearched != null) {

    citySearchArray.forEach(item => {
      const citySearchedHtml = `
      <div >
      <section class="d-flex flex-column bd-highlight mb-3">
        <button id="${item}"class="citySearch" type="submit">${item}</button>
      </section>
      </div>
          `;

      container.insertAdjacentHTML('beforeend', citySearchedHtml);
    })

  }

};

// when user clicks city buttons run code to pull and display weather data (event delegation required)
document.getElementById('appContent').addEventListener('click', function (event) {
  if (event.target.classList.contains('citySearch')) {

    localStorage.setItem("city", JSON.stringify(event.target.id));
    setTimeout(() => {
      getCoordinates();
    }, 1000)

    location.reload();
  }
});

