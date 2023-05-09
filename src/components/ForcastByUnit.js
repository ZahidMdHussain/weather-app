import React from "react";

const ForcastByUnit = ({ unit, setUnit }) => {
  function toggleForecastUnit(e) {
    if (unit !== e.target.name) setUnit(e.target.name);
  }

  return (
    <div className="flex flex-row items-center ml-4">
      <button
        name="metric"
        className="text-lg text-white font-normal"
        onClick={(e) => {
          toggleForecastUnit(e);
        }}
      >
        °C
      </button>
      <p className="text-lg text-white font-normal mx-[6px]">|</p>
      <button
        name="imperial"
        className="text-lg text-white font-normal"
        onClick={(e) => {
          toggleForecastUnit(e);
        }}
      >
        °F
      </button>
    </div>
  );
};

export default ForcastByUnit;
