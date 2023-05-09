import React from "react";

const LocationForecast = ({ data }) => {
  return (
    <div className="flex flex-row items-baseline justify-between">
      <p className="text-white text-2xl font-medium">
        {data.name}, {data.sys?.country}
      </p>
      <div className="ml-6 text-xl text-cyan-300">{data.weather[0]?.main}</div>
    </div>
  );
};

export default LocationForecast;
