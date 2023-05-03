import { useEffect, useState } from "react";
import { DEFAULT_WEATHER_DATA } from "../config";

const useApidata = () => {
  const [tempData, setTeampData] = useState(null);
  useEffect(() => {
    getWeatherData();
  }, []);

  async function getWeatherData() {
    const data = await fetch(DEFAULT_WEATHER_DATA);
    const json = await data.json();
    setTeampData(json);
  }
  return tempData;
};

export default useApidata;
