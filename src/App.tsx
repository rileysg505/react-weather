import React, { useEffect, useState } from "react";
import {getCoords, getWeather} from "./Api/getWeather";
import {Coordinates} from "./Api/getWeather";
import {WeeklyWeather} from "./Api/getWeather";
import style from "./App.module.css";


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeeklyWeather[]>([]);

  const showWeatherData=() => {
    fetchWeatherData(city)
  }

  const fetchWeatherData = async (city: string) => {
    try {
      const coords: Coordinates = await getCoords(city);
      const weekly_weather_data = await getWeather(coords.lat, coords.lon);
      
      setWeatherData(weekly_weather_data)
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };
  useEffect(()=>{console.log(weatherData)}, [weatherData])
  
  return (
    <div className="App">
      <h1 className = {style.Weather}>Weather</h1>
      <input className={style.Input}
          id="new-location-input"
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          />
      {/* <button onClick={showWeatherData}>Search</button>   */}
      <button className={style.btn} onClick={()=>fetchWeatherData(city)}>Search</button>  
      <>
        {weatherData.map((weatherDay:WeeklyWeather)=>{
          return (
          <div className={style.data}>
            <p>{weatherDay.date.toDateString()}</p>
            <p>{Math.trunc(weatherDay.max) + "/" + Math.trunc(weatherDay.min) + "°F"}</p>
          </div>)
        })}</>
    </div>
    
  );
};

export default App;
