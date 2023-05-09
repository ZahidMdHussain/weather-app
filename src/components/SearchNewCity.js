import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const SearchNewCity = ({ city, setCity }) => {
  const [searchCity, setSearchCity] = useState("");

  function cityForecast() {
    if (searchCity !== "" && city !== searchCity)
      setCity(searchCity.toLowerCase());
  }

  return (
    <div className="flex justify-end flex-row my-8">
      <div className="flex flex-row items-center justify-end space-x-2">
        <input
          className="px-1 py-[6px] text-sm border-b focus:outline-none capitalize placeholder:lowercase bg-transparent text-white placeholder-slate-100"
          type="text"
          name="inputCity"
          value={searchCity}
          placeholder="search for city..."
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <BsSearch
          size={17}
          className="text-white cursor-pointer transition ease-out duration-150 hover:scale-125"
          onClick={() => {
            cityForecast();
            setSearchCity("");
          }}
        />
        <GoLocation
          size={18}
          className="text-white cursor-pointer transition ease-out duration-150 hover:scale-125"
          onClick={() => {
            if (city !== "patna") setCity("patna");
          }}
        />
      </div>
    </div>
  );
};

export default SearchNewCity;
