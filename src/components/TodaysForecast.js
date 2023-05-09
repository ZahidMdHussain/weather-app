import React from "react";
import { iconUrl } from "../config";
import ForcastByUnit from "./ForcastByUnit";

const TodaysForecast = ({ data, unit, setUnit }) => {
  return (
    <div className="flex flex-row items-baseline text-white">
      <img
        src={iconUrl(data.weather[0].icon)}
        alt="sunImage"
        className=" object-cover"
      />
      <p className="text-7xl">{Math.floor(data.main?.temp) + "°"}</p>

      <ForcastByUnit unit={unit} setUnit={setUnit} />
    </div>
  );
};

export default TodaysForecast;
