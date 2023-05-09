import React from "react";
import { BiDroplet } from "react-icons/bi";
import { BsThermometerHalf } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";

const WeatherAddedDetails = ({ data }) => {
  return (
    <div className="flex flex-row justify-end items-center text-white mt-28">
      <div className="flex flex-col space-y-2 p-2 w-44 border rounded-md">
        <div className="flex font-light text-sm items-center justify-between">
          <BsThermometerHalf size={16} className="mx-1" />
          Real feel:
          <span className="font-medium ml-1">
            {Math.round(data.main?.feels_like) + "°"}
          </span>
        </div>
        <div className="flex font-light text-sm items-center justify-between">
          <BiDroplet size={16} className="mx-1" />
          Humidity:
          <span className="font-medium ml-1">{data.main?.humidity + "%"}</span>
        </div>
        <div className="flex font-light text-sm items-center justify-between">
          <GiSpeedometer size={16} className="mx-1" />
          Pressure:
          <span className="font-medium ml-1">
            {Math.round(data.main?.pressure) + " hPa"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherAddedDetails;
