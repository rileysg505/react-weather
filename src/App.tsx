import React, { useEffect, useState } from "react";
import getWeather from "./Api/getWeather";
import "./App.css";


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>("");

  const showWeatherData=() => {
    console.log('city:', city)
    fetchWeatherData(city)
  }

  const fetchWeatherData = async (city: string) => {
    try {
      const data = await getWeather(city);
      setWeatherData(data)
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <input
          id="new-location-input"
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          />
      <button onClick={showWeatherData}>Search</button>
      {weatherData ? (
        <div>
          <h2>Information</h2>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.temp.temp}°C</p>
          <p>Description: {weatherData.description[0]['description']}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
    
  );
};

export default App;
