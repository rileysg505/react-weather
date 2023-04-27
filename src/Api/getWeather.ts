import axios from "axios";

// this is a test

type Weather={
    description: string;
    icon: string
}

type Main={
    temp: number;
    temp_min: number;
    temp_max: number;
}


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Irvine&appid=7fcec942249fb43b45edd62ab7ead6a9'

const getWeather = async () => { 
    await axios.get(url)
    .then((response) => {
        const weatherTemp = response.data.main
        const weatherDescription = response.data.weather
        const locationName = response.data.name
        console.log(weatherTemp)
        console.log(weatherDescription)
        console.log(locationName)
        return [weatherTemp, weatherDescription, locationName]
    })
    .catch((error: any) => {
        console.log(error)
    });
    
}

// const getWeather = async () => {
//     const weatherData = await axios.get(url)
//     console.log(weatherData.data.name)
//     return weatherData
// }

export default getWeather // purpose?

