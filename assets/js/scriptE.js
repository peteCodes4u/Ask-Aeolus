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
  
  
    
    
       // Event data array
       const eventData = [
    
        {
            title: item.name,
            imageSrc: item.imageUrl,
            url: item.ticketingUrl
        },
    
      ];
      
      // Get the container element to append the dynamically created HTML
      const container = document.querySelector('.container-lg .row');
      
      // Loop through the event data array and create HTML for each event
      eventData.forEach((event, index) => {
        const eventHtml = `
            <div class="col m-3 p-3 rounded text-center cards">
                <h1 class="text-decoration-underline">${event.title}</h1>
                <img src="${event.imageSrc}" height="200px" width="300px" class="p-1" id="event${index + 1}-photo">
                <p><a href="${event.url}" id="event${index + 1}-url">Link to Event!</a></p>
            </div
            `;
      
        // Append the dynamically created event HTML to the container
        container.insertAdjacentHTML('beforeend', eventHtml);
      });
    
  
    
    };
  
    const groomForecastWeatherResults = function () {
      const fiveDayforecast = JSON.parse(localStorage.getItem('5dayforecast'));
      let aeolusPredictsThisWeek = []; // Initialize the array outside the loop
    
      for (let i = 0; i < fiveDayforecast.length; i++) {
        let temp = fiveDayforecast[i].main.temp;
        
        // Create an object for each day's temperature
        let dayTemperature = {
          temp: temp
        };
    
        // Push the day's temperature object to the array
        aeolusPredictsThisWeek.push(dayTemperature);
      }
    
      // Set the array containing all day temperatures in local storage
      localStorage.setItem("aeolusPredictsThisWeek", JSON.stringify(aeolusPredictsThisWeek));
    };