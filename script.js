document.getElementById('searchBtn').addEventListener('click', function () {
    var city = document.getElementById('cityInput').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=63a90ae96d390ec37d6c1252f5a86e1a')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${kelvinToCelsius(data.main.temp)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function kelvinToCelsius(k) {
    return Math.round(k - 273.15);
}
