import { DEFAULT_WEATHER_DATA } from "../config";

async function getWeatherData(city, unit) {
  try {
    const data = await fetch(DEFAULT_WEATHER_DATA(city, unit));
    if (!data.ok) {
      throw Error("Could not fetch data from resource");
    }
    const json = await data.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
}

export default getWeatherData;
