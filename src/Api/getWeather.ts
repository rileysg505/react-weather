import axios from "axios";

type WeatherData={
    temp:number,
    description:string,
    name:string
}

const getWeather = async (city: string) => { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7fcec942249fb43b45edd62ab7ead6a9`
    try{
        const response = await axios.get(url)
        const weatherTemp = response.data.main;
        const weatherDescription = response.data.weather;
        const cityName = response.data.name;

        const results: WeatherData = {
            temp:weatherTemp,
            description:weatherDescription,
            name:cityName
        };
        console.log('results', results)
        return results;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch weather dataaaa");
    }
}
    
export default getWeather

