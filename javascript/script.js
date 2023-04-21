function displayWeatherDetails(city) {
  const apiKey = "05afb335b93d9ff9cf2ddf150f1ecba9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      
      const weatherDetailsContainer = document.querySelector("#weather-details");
      weatherDetailsContainer.innerHTML = `
        <h2>Current Weather in ${city}</h2>
        <p>Temperature: ${temperature} Kelvin</p>
        <p>Description: ${description}</p>
      `;
    })
    .catch((error) => {
      console.log(error);
    });
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
  const cityInput = document.querySelector("#city-input");
  const city = cityInput.value;
  displayWeatherDetails(city);
});
