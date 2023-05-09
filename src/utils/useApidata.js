import { DEFAULT_WEATHER_DATA } from "../config";

async function getWeatherData(city, unit) {
  const data = await fetch(DEFAULT_WEATHER_DATA(city, unit));
  const json = await data.json();
  return json;
}

export default getWeatherData;
