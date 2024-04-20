// function to render results in the viewport
const generateResults = function () {

    // Retrieve the array from localStorage
    const weatherDataArray = JSON.parse(localStorage.getItem('weatherData')) || [];
    const forcastData = [];
  
    weatherDataArray.forEach((item) => {
  
      while(weatherDataArray.length < 5) {
  
        weatherDataArray[0].push(forcastData)
        weatherDataArray[1].push(forcastData)
        weatherDataArray[2].push(forcastData)
        weatherDataArray[3].push(forcastData)
        weatherDataArray[4].push(forcastData)
        weatherDataArray[5].push(forcastData)
      }
    })

 

    const displayForecastResults = function () {
      const forecastArray = JSON.parse(localStorage.getItem('aeolusPredictsThisWeek')) || [];
  
      const container = document.getElementById('forecast');
      // Add Bootstrap row class to the container
  
      forecastArray.forEach(item => {
          const forecastData = [
              {
                  temp: item.temp,
                  humidity: item.humidity,
                  wind: item.wind,
                  weather: item.weather
              },
          ];
  
          forecastData.forEach((day) => {
              const forecastHtml = `
                  <div class="col-md-3 m-3 rounded text-center cards">
                      <div class="card"> 
                          <div class="card-body">
                              <h1>${Math.round(day.temp)}°F</h1>
                              <p>Humidity: ${day.humidity}%</p>
                              <p>Wind: ${day.wind} MPH</p>
                              <p>${day.weather}</p>
                          </div>
                      </div>
                  </div>
              `;
  
              // Append the dynamically created forecast card HTML to the container
              container.insertAdjacentHTML('beforeend', forecastHtml);
          });
      });
  };