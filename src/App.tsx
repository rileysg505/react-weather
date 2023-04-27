import React, {useEffect, useState } from "react";
import { ChangeEvent } from 'react';
import getWeather from "./Api/getWeather";
import "./App.css";

function App() {
  const [searchCityInput, setSearchCity] = useState('')
  const [weather, setWeather] = useState(); // weather is current value of state, setWeather is function to update the state

  useEffect(() => {
    getWeather(); // returns weatherData
  }, []); // tells useEffect to only render if certain values change

  function changeCity(input: React.SetStateAction<undefined>) {
    setWeather(input)
  }
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.currentTarget.value;
  // }


  return (
    <div className="App">
      <h1>Weather: {searchCityInput} </h1>
      <h2>{getWeather}</h2>
      <form id ='new-location-form'>
        <input id='new-location-input'
          type='text'
          placeholder='Enter City Name'
          value = {searchCityInput} 
          onChange={(location) => setSearchCity(location.target.value)} />
      </form>
        <button id = "search-location-button" 
          onClick={() => setSearchCity}> Search </button>
      <ol className = 'list weather data'>
          

      </ol>
    </div>

  );
}


export default App;
