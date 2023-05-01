import React from "react";
import { cities } from "../confiq";

const FavouriteCity = () => {
  return (
    <div className="flex items-center justify-around text-white font-semibold my-5">
      {cities.map((item) => {
        return (
          <button
            className="transition ease-in-out duration-200 hover:scale-125"
            key={item.id}
          >
            {item.city}
          </button>
        );
      })}
    </div>
  );
};

export default FavouriteCity;
