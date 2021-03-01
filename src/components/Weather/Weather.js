import React, { useState, useEffect } from 'react';

function Weather(spy = () => {}) {
  const [term, setTerm] = useState('');
  const [weather, setWeather] = useState(() => {
    return JSON.parse(localStorage.getItem('weather')) || [];
  });

  const API_KEY = '5c8b3a7a1caf562b635ae7c8b9bcd5a4';
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${API_KEY}`;

  let weatherArray;

  let handleChange = (e) => {
    const term = e.target.value;
    // console.log('search term', term);
    setTerm(term);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        weatherArray = data;
        localStorage.setItem('weather', JSON.stringify(data));
        setWeather(data);
        console.log(`weather data for ${term} is`, data);
        setTerm('');
        console.log('raw weather data', weatherArray);
      });
  };

  // TODO convert api resonse to array and render
  // weatherArray = Object.entries(weather).map(([key, value]) => {
  //   const weatherItems = weather[key];
  //   return weatherItems;
  // });

  return (
    <div>
      <h1>today's weather</h1>
      <form type="submit" onSubmit={handleSubmit}>
        <label htmlFor="search-input-text">
          search for the weather where you are
        </label>
        <input
          data-testid="search-input"
          onChange={handleChange}
          value={term}
          className="input"
        ></input>
        <button data-testid="search-btn">search</button>
      </form>
      <ul>
        {/* <li>{weatherArray}</li> */}
        {/* <li>{weatherArray[11]}</li> */}
        {/* <li>temperature today is {weatherArray[3]}C</li> */}
        {/* <li>right now it feels like {weatherArray[3][0]}C</li>
        <li> the upshot is {weatherArray[1][0].description}</li> */}
      </ul>
    </div>
  );
}

export default Weather;
