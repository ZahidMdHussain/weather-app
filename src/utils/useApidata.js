import { DEFAULT_WEATHER_DATA, API_KEY } from "../config";

async function getWeatherData(city, unit) {
  const data = await fetch(
    `${DEFAULT_WEATHER_DATA}${city}&appid=${API_KEY}&units=${unit}`
  );
  const json = await data.json();
  return json;
}

export default getWeatherData;
