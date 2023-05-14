import axios from "axios";

export type WeatherDataType={
    lat:number,
    lon:number
}


const getCoords = async (city: string) => { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
                &appid=7fcec942249fb43b45edd62ab7ead6a9`
    
    try{
        const response = await axios.get(url)
        const dataLat = response.data.coord.lat
        const dataLon = response.data.coord.lon

        const coords: WeatherDataType = {
            lat: dataLat,
            lon: dataLon
        };
        console.log('r', coords)
        return coords;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch latitutde and longitutde");
    }
}

const getWeather = async (Latitude: number, Longitude: number) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${Latitude}
                &lon=${Longitude}&exclude=alerts&appid=7fcec942249fb43b45edd62ab7ead6a9`
    try{
        const response = await axios.get(url)
        console.log('response:,', response)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch weather data")
    }
}

export default getCoords;
