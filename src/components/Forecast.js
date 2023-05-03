import React from "react";
import ForecastDetails from "./ForecastDetails";

const Forecast = ({ title }) => {
  return (
    <div className="my-5">
      <div className="flex flex-row items-center justify-start">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <ForecastDetails />
        <ForecastDetails />
        <ForecastDetails />
        <ForecastDetails />
        <ForecastDetails />
      </div>
    </div>
  );
};

export default Forecast;
