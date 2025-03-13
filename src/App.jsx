import { useState, useEffect } from 'react';
import './App.css';
import { getWeather } from './services/WeatherService';
import { getDateFromHours } from './utils';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setLoading(true);
    getWeather(city)
    .then((data) => {
      setWeather(data)
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    })
  }, [city]);

  return (
    <main>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Weather Loading</p>
      ):
      <section>
        <form >
          <label htmlFor='search-city'>
            <input type='text' name='search-city' id='search-city' placeholder='Search by City' />
            <button type='submit'>Search</button>
          </label>
        </form>
        <h1>Weather Details For: {city}</h1>
        <p>{weather?.main.temp} C° | {weather?.weather[0].description}</p>
      <p>Sunset: {getDateFromHours(weather?.sys.sunset)}</p>
      <p>Humidity: {weather?.main.humidity}</p>
      <p>Sea Level: {weather?.main.sea_level}</p>
      <p>Wind Speed: {weather?.wind.speed}</p>
      </section>}
    </main>
    );
}

export default App;
