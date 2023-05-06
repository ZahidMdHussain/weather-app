import { useEffect, useState } from "react";
import DateAndTime from "./components/DateAndTime";
import FavouriteCity from "./components/FavouriteCity";
import Forecast from "./components/Forecast";
import SearchNewCity from "./components/SearchNewCity";
import TempratureDetails from "./components/TempratureDetails";
import getWeatherData from "./utils/useApidata";

function App() {
  const [forecastData, setForecastData] = useState(null);
  const [byCity, setByCity] = useState("delhi");
  const [forecastUnit, setForecastUnit] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(byCity, forecastUnit);
      setForecastData(data);
    };
    fetchWeather();
  }, [byCity, forecastUnit]);

  return (
    forecastData && (
      <div className="mx-auto max-w-screen-md my-3 py-4 px-28 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 h-fit">
        <FavouriteCity city={byCity} setCity={setByCity} />
        <SearchNewCity
          unit={forecastUnit}
          setUnit={setForecastUnit}
          city={byCity}
          setCity={setByCity}
        />
        <DateAndTime data={forecastData} />
        <TempratureDetails data={forecastData} />
        <Forecast title={"hourly forecast"} />
        <Forecast title={"daily forecast"} />
      </div>
    )
  );
}

export default App;
