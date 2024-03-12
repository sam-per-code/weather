function changeBackground() {
    const citySelect = document.getElementById('citySelect');
    const selectedCity = citySelect.value;
    //const selectPlace = citySelect.place;//

    //API stuff??
    if (selectedCity) {
        const apiKey = 'c343c0f8b3b23c0ccc72d69477ca8e67'; //  personal API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`;

        // AJAX request to the OpenWeatherMap API
        $.get(apiUrl, function (data) {

            console.log(data); 
            // the weather information 

            const weatherIcon = data.weather[0].icon;
            const weatherDescription = data.weather[0].main;
            const temperature = Math.ceil(data.main.temp - 273.15);

            // Display the weather information 
            displayWeather(weatherDescription, temperature, weatherIcon);

            //API ICONS
            function displayWeather(description, temperature, weatherIcon) {
                const weatherDisplay = document.getElementById('weather-display');
                weatherDisplay.innerHTML = `<p style="color: orange; font-size: 60px;">${description}<br>${temperature}°C</p>`;
            
                // Display the weather icon
                const weatherIconElement = document.getElementById('weatherIcon');
                weatherIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather Icon" width="64" height="64">`;
            }

               });
    }
    //endof API

    document.body.style.transition = 'background-image 3s ease'; //  transition

    if (selectedCity) {
        const imageUrl = `images/${selectedCity}.jpg`;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = 'cover';
    }

    //  time and date for the selected city
    displayTimeAndDate(selectedCity);
}

function displayTimeAndDate(city) {
    const timeAndDateElement = document.getElementById('time-and-date');
    
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: cityTimeZones[city] || 'UTC', 
    };

    const currentTimeAndDate = new Intl.DateTimeFormat('en-US', options).format(new Date());
    
    timeAndDateElement.innerHTML = `<p>${currentTimeAndDate}</p>`;

     // Trigger the fade-in effect
     setTimeout(() => {
        timeAndDateElement.style.opacity = 1;
    }, 100);
}

//  time zones for each city
const cityTimeZones = {
    'London': 'Europe/London',
    'Barcelona': 'Europe/Paris', //  Using Paris time for Barcelona
    'Paris': 'Europe/Paris',
    'Prague': 'Europe/Prague',
    'Bombay': 'Asia/Kolkata', // Bombay (Mumbai) time zone
    'Florence': 'Europe/Rome', // Florence is in the same time zone as Rome
    'Tokyo': 'Asia/Tokyo',   // Tokyo time zone
    'Melbourne': 'Australia/Melbourne',  // Melbourne time zone
};


//more api


function displayWeather(description, temperature) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `<p style="color: orange; font-size: 60px;">${description}<br>${temperature}°C</p>`;
}
//end of api integrfation



// github icons
let locationIcon = document.querySelector('.weather-icon');
const { icon } = data.weather[0];
locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
