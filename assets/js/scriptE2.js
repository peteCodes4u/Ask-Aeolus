// openweather api key
const wApiKey = 'f83ed09bfef7deff4712ba233666aef9'

// establish constant for user city entry data
const city = document.getElementById('city');

// establish constant for askAoelus button to pull data
const askAeolusBtn = document.getElementById('askAeolus');

// set time out for getCoordinates so that it does not fire off before data exists
setTimeout(()=> {
    getCoordinates();
  }, 2000)

  let latLong = [] || '';

// event listener to set city and run city search for lat / long
askAeolusBtn.addEventListener("click", function(){

localStorage.setItem("city", JSON.stringify(city.value));

});

// city info value https://nominatim.openstreetmap.org/search?
const getCoordinates = function () {

  let cityData = JSON.parse(localStorage.getItem("city"));

   fetch(`https://nominatim.openstreetmap.org/search?q=${cityData}&format=json&addressdetails=1&limit=1&polygon_svg=1`)
  .then(response => response.json())
  .then(response => localStorage.setItem('cityInfo', JSON.stringify(response)))
  .catch(err => console.error(err));

// adds delay to execute get latLong to ensure api has returned the necessary data
  setTimeout(()=> {
    getLatLong();
    getWeatherForcastData();
    todayWeather();
  }, 2000)

};

// parse city info for lat/long data and save data to local storage
const getLatLong = function() {

let cityInfoData = JSON.parse(localStorage.getItem('cityInfo'));


latLong.push(cityInfoData[0].boundingbox[0]);
latLong.push(cityInfoData[0].boundingbox[2]);

localStorage.setItem('latLong', JSON.stringify(latLong));
};

const getWeatherForcastData = function(){



// get lat/long from localstorage
const latLongData = JSON.parse(localStorage.getItem('latLong'))
const latitude = parseFloat(latLongData[0]);
const longitude = parseFloat(latLongData[1]);

// round the data for API consumption
const roundLat = latitude.toFixed(2);
const roundLong = longitude.toFixed(2); 

// get the 5day forcast data from the api
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
    localStorage.setItem('forcast', JSON.stringify(data.list));

  });

};

// prepare Results
const prepareForcastResults = function () {

  // retrieve weatherData from local storage
  const forcast = JSON.parse(localStorage.getItem('forcast'));
  const day1Weather =  forcast[4];
  const day2Weather =   forcast[12];
  const day3Weather =   forcast[20];
  const day4Weather =   forcast[28];
  const day5Weather =   forcast[36];
  

  // push data to new array for processing
  let fiveDayForcast = [];

  fiveDayForcast.push(day1Weather);
  fiveDayForcast.push(day2Weather);
  fiveDayForcast.push(day3Weather);
  fiveDayForcast.push(day4Weather);
  fiveDayForcast.push(day5Weather);

  localStorage.setItem('5dayForcast', JSON.stringify(fiveDayForcast));


};

// get today's weather
const todayWeather = function (){

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





// display resutls
const displayResults = function () {};