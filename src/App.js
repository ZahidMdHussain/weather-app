import { useEffect, useState } from "react";
import FavouriteCity from "./components/FavouriteCity";
import SearchNewCity from "./components/SearchNewCity";
import getWeatherData from "./utils/useApidata";
import WeatherAddedDetails from "./components/WeatherAddedDetails";
import ForecastCollectionCity from "./components/ForecastCollectionCity";
import ForecastCollectionTemp from "./components/ForecastCollectionTemp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [forecastData, setForecastData] = useState(null);
  const [byCity, setByCity] = useState("delhi");
  const [forecastUnit, setForecastUnit] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      const msg = byCity ? byCity : "current location";
      toast.info("Fetching weather for " + msg);
      const data = await getWeatherData(byCity, forecastUnit);
      setForecastData(data);
    };
    fetchWeather();
  }, [byCity, forecastUnit]);

  const formatBackground = () => {
    if (!forecastData) return "from-green-300 to-cyan-500";
    const thresold = forecastData.weather[0]?.main;
    if (thresold.toLowerCase() === "clear") return "from-cyan-500 to-blue-400";
    else if (
      thresold.toLowerCase() === "haze" ||
      thresold.toLowerCase() === "smoke"
    )
      return "from-slate-300 to-gray-500";
    else if (
      thresold.toLowerCase() === "clouds" ||
      thresold.toLowerCase() === "rain"
    )
      return "from-gray-500 to-gray-900";
    return "from-slate-200 to-cyan-600";
  };

  return (
    <div
      className={`w-screen h-screen  py-10 bg-gradient-to-br ${formatBackground()}`}
    >
      {!forecastData ? (
        <div className="text-xl text-red-500 font-semibold w-fit">
          Unable to fetch the data for searched location.
        </div>
      ) : (
        <div className="mx-auto max-w-screen-md py-6 px-14 bg-opacity-10 backdrop-blur-md bg-white shadow-md shadow-gray-600 rounded-md">
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
      <ToastContainer
        autoClose={2000}
        theme="colored"
        newestOnTop={true}
        position="top-right"
      />
    </div>
  );
}

export default App;
