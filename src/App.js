import { useEffect, useState } from "react";
import FavouriteCity from "./components/FavouriteCity";
import SearchNewCity from "./components/SearchNewCity";
import getWeatherData from "./utils/useApidata";
import WeatherAddedDetails from "./components/WeatherAddedDetails";
import ForecastCollectionCity from "./components/ForecastCollectionCity";
import ForecastCollectionTemp from "./components/ForecastCollectionTemp";

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
    <div className="w-screen h-screen bg-yellow-100 my-auto">
      {forecastData && (
        <div className="mx-auto max-w-screen-md my-auto py-6 px-14 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 h-fit rounded-md border border-white">
          <FavouriteCity city={byCity} setCity={setByCity} />
          <SearchNewCity city={byCity} setCity={setByCity} />
          <WeatherAddedDetails data={forecastData} />
          <ForecastCollectionCity data={forecastData} />
          <ForecastCollectionTemp
            data={forecastData}
            unit={forecastUnit}
            setUnit={setForecastUnit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
