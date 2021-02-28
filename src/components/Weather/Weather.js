import React, { useState } from 'react';

function Weather() {
  const [term, setTerm] = useState('london');
  const [weather, setWeather] = useState({});

  // const [loading, setLoading] = useState(false);
  // const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(null);

  const API_KEY = '5c8b3a7a1caf562b635ae7c8b9bcd5a4';
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${API_KEY}`;

  let handleChange = (e) => {
    const term = e.target.value;
    // console.log('search term', term);
    setTerm(term);
  };

  // useEffect(() => {
  //   async function getWeather() {
  //     setLoading(true);
  //     const response = await fetch(API_ENDPOINT);
  //     const data = await response.json();
  //     setWeather(data);
  //     setLoading(false);
  //     setLoaded(true);
  //   }
  //   if (!loaded && !loading) {
  //     getWeather();
  //   }
  //   return () => {};
  // }, [
  //   weather,
  //   setWeather,
  //   setLoaded,
  //   setLoading,
  //   API_ENDPOINT,
  //   loading,
  //   loaded,
  // ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(`weather data for ${term} is`, data);
        console.log('api response is', typeof weather);
        // setTerm('');
      });
  };

  // console.log('weather', weather);

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
        ></input>
        <button data-testid="search-btn">search</button>
      </form>
      {/* <p>{weatherDataDisplay.map()}</p> */}
    </div>
  );
}

export default Weather;
