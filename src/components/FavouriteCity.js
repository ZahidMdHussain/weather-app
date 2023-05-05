import React from "react";
import { cities } from "../config";

const FavouriteCity = ({ city, setCity }) => {
  function forecastByCity(e) {
    if (city !== e.target.value) setCity(e.target.value);
  }
  return (
    <div className="flex items-center justify-around text-white font-semibold my-3">
      {cities.map((item) => {
        return (
          <button
            className="transition ease-in-out duration-200 hover:scale-125"
            key={item.id}
            value={item.city.toLowerCase()}
            onClick={(e) => forecastByCity(e)}
          >
            {item.city}
          </button>
        );
      })}
    </div>
  );
};

export default FavouriteCity;
