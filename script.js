// Asynchronous function to fetch and display weather data
async function getWeather() {
  // Get the city name entered by the user
  const city = document.getElementById('cityInput').value;

  // OpenWeatherMap API key (keep it secure in real apps)
  const apiKey = 'abb11f6be25c00d9d85a0e9601ad35b0';

  // Construct the API URL with city name, API key, and temperature unit in metric (Celsius)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    // Fetch data from the API
    const response = await fetch(url);

    // Convert the response to JSON format
    const data = await response.json();

    // Check if response is successful (code 200 means OK)
    if (data.cod === 200) {
      // Display weather information inside the 'weatherResult' div
      document.getElementById('weatherResult').innerHTML = `
        <p><strong>${data.name}</strong></p> <!-- City name -->
        <p>Temperature: ${data.main.temp} °C</p> <!-- Current temperature -->
        <p>Weather: ${data.weather[0].description}</p> <!-- Weather description -->
      `;
    } else {
      // If city is not found or other error, show message
      document.getElementById('weatherResult').innerText = 'City not found!';
    }
  } catch (error) {
    // If there's a network or API error, show generic error message
    document.getElementById('weatherResult').innerText = 'Error fetching data.';
  }
}
