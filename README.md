# <Ask-Aeolus!>

## Description

This project has been created with the intention of providing a tool to display current and forecast weather data based on user city input. The app utilizes openweathermap and openstreetmap api's.         

## Table of Contents

- [Usage](#usage)
- [Tests](#Tests)

## Link to Website
https://petecodes4u.github.io/Ask-Aeolus/

## Usage

The intended usage of this application is to display weather data based on locations by city name. 

![](./assets/images/tbd.gif)

## Features

- User entry field for city.
- User form data is storred in  the browser localStorage using JSON.
- Search History is rendered as user clickable buttons.
- Today's weather.
- 5 day forecast weather. 

## Tests
 
 **Feature - Main landing page**
 
 **GIVEN :** the app loads successfully.
 
 **WHEN :** the app loads.
 
 **THEN :** The page loads and displays weather for "Mt. Olympus" (Pieria) and contains a button for Mt Olympus below the main card for today's weather and the 5 day forecast cards.

##

 **Feature - Main landing page**

 **GIVEN :** the webpage loads successfully.  
 
 **WHEN :** the app loads.
 
 **THEN :** a landing page containing an entry field for city is rendered a large card depicting todays weather and smaller cards bellow depicting a 5 day forecast.

##

 **Features - Main landing page**

 **GIVEN :** the app loads successufully.
 
 **WHEN :** the user enters a city name in the search field and clicks Ask Aeolus!
 
 **THEN :** The city name and weather cards update to reflect the conditions for that city and a button for that city is rendered below the weather data

##

 **Feature - Main landing page**

 **GIVEN :** a city button is present 
 
 **WHEN :**  the user clicks a city button.
 
 **THEN :**  the user weather data is updated to reflect the conditions in that city.

##

