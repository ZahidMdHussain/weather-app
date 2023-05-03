import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
const SearchNewCity = () => {
  const [searchCity, setSearchCity] = useState("");
  return (
    <div className="flex justify-center flex-row my-5">
      <div className="flex flex-row items-center justify-center w-3/4 space-x-4">
        <input
          className="px-2 py-[6px] text-sm w-full font-medium text-black rounded-sm shadow-md shadow-gray-700 focus:outline-none capitalize placeholder:lowercase"
          type="text"
          name="inputCity"
          value={searchCity}
          placeholder="search for city..."
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <BsSearch
          size={20}
          className="text-white cursor-pointer transition ease-out duration-150 hover:scale-125"
        />
        <GoLocation
          size={18}
          className="text-white cursor-pointer transition ease-out duration-150 hover:scale-125"
        />
      </div>
      <div className="flex flex-row items-center justify-center w-1/4">
        <button name="metric" className="text-lg text-white font-normal">
          °C
        </button>
        <p className="text-lg text-white font-normal mx-[6px]">|</p>
        <button name="imperial" className="text-lg text-white font-normal">
          °F
        </button>
      </div>
    </div>
  );
};

export default SearchNewCity;
