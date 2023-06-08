import axios from "axios";

export type Coordinates={
    lat:number,
    lon:number
}

export type WeeklyWeather={
    date:Date,
    max:number,
    min:number
}

export const getCoords = async (city: string) => { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
                &appid=7fcec942249fb43b45edd62ab7ead6a9`
    
    try{
        const response = await axios.get(url)
        const dataLat = response.data.coord.lat
        const dataLon = response.data.coord.lon

        const coords: Coordinates = {
            lat: dataLat,
            lon: dataLon
        };
        return coords;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch latitutde and longitutde");
    }
}

export const getWeather = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=7fcec942249fb43b45edd62ab7ead6a9`
    try{
        const response =  await axios.get(url)
        const daily_weather = response.data.daily
        console.log('response:,', response)
        const output_results = []
        for (const weather of daily_weather) {
            // console.log('max & min:', weather.temp.max, weather.temp.min)
            const weeklydata: WeeklyWeather={
                date: new Date(weather.dt * 1000),
                max: weather.temp.max,
                min: weather.temp.min
            };
            output_results.push(weeklydata)
        }
        return output_results
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch weather data")
    }
}

