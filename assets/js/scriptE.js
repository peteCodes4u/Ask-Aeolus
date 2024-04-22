


const cityButtons = document.querySelectorAll('.button-btn btn-primary citySearch');

// Add event listener to each button
cityButtons.forEach(cityButtons => {
  cityButtons.addEventListener('click', function() {
    
    const buttonIdAsString = cityButtons.id;
      console.log(buttonIdAsString);
      localStorage.setItem("city", buttonIdAsString);
  });
});





