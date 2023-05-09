import React from "react";
import WindForecast from "./WindForecast";
import LocationForecast from "./LocationForecast";

const ForecastCollectionCity = ({ data }) => {
  return (
    <div className="flex flex-row items-center justify-between mt-6">
      <LocationForecast data={data} />
      <WindForecast data={data} />
    </div>
  );
};

export default ForecastCollectionCity;
