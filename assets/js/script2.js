// establish constant for user city entry data
const city = document.getElementById('city');

// establish constant for askAoelus button to pull data
const askAeolusBtn = document.getElementById('askAeolus');

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

  setTimeout(()=> {
    getLatLong();
  }, 2000)

};

// parse city info for lat/long data and save data to local storage
const getLatLong = function() {

let cityInfoData = JSON.parse(localStorage.getItem('cityInfo'));
let latLong = [];

latLong.push(cityInfoData[0].boundingbox[0]);
latLong.push(cityInfoData[0].boundingbox[2]);

localStorage.setItem('latLong', JSON.stringify(latLong));
};

const getWeatherData = function(){

// openweather api key
const wApiKey = 'f83ed09bfef7deff4712ba233666aef9'

// get the data from the api
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=28.00&lon=-82.68&appid=${wApiKey}`, {
  method: 'GET', 
  credentials: 'same-origin', 
  redirect: 'follow', 
 
})
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {
    // store the data to local storage
    localStorage.setItem('weatherData', JSON.stringify(data.list));
    console.log(data);
  });

};


  // get location 

  // https://www.geoapify.com/how-to-get-user-location-with-javascript
if ("geolocation" in navigator) {
  // Prompt user for permission to access their location
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    (position) => {
      // Get the user's latitude and longitude coordinates
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Do something with the location data, e.g. display on a map
      console.log(`Latitude: ${lat}, longitude: ${lng}`);
    },
    // Error callback function
    (error) => {
      // Handle errors, e.g. user denied location sharing permissions
      console.error("Error getting user location:", error);
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}