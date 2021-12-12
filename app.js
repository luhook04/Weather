const button = document.querySelector('button');
const fahrenheitDisplay = document.querySelector('#tempF');
const celsiusDisplay = document.querySelector('#tempC');

const getWeather = async function() {
  try {
    const city = document.querySelector('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9215a6e503537298c8c0bc16e653f76f`;
    const response = await fetch(url, { mode: 'cors' });
    const cityWeather = await response.json();
    console.log(cityWeather.main.temp);
    makeCelsius(cityWeather.main.temp);
    makeFahrenheit(cityWeather.main.temp);
  } catch (error) {
    console.log(error);
  }
};

const makeFahrenheit = (temp) => {
  let newTemp = (temp - 273.15) * (9 / 5) + 32;
  fahrenheitDisplay.textContent = `${Math.round(newTemp)}°F`;
};
const makeCelsius = (temp) => {
  let newTemp = temp - 273.15;
  celsiusDisplay.textContent = `${Math.round(newTemp)}°C`;
};

button.addEventListener('click', getWeather);
