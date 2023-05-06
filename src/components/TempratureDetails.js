import React from "react";
import sunimg from "../img/sunimg.png";
import { FaTemperatureLow, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { BiDroplet } from "react-icons/bi";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { formatToLocalTime } from "../utils/dateFormatter";

const TempratureDetails = ({ data }) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-center mt-3 text-xl text-cyan-300">
        {data.weather[0]?.main}
      </div>
      <div className="flex flex-row justify-between items-center text-white py-2">
        <img src={sunimg} alt="sunImage" className="w-16" />
        <p className="text-5xl">{Math.floor(data.main?.temp) + "°"}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={16} className="mx-1" />
            Real feel:
            <span className="font-medium ml-1">
              {Math.round(data.main?.feels_like) + "°"}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiDroplet size={16} className="mx-1" />
            Humidity:
            <span className="font-medium ml-1">
              {data.main?.humidity + "%"}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={16} className="mx-1" />
            Wind:
            <span className="font-medium ml-1">
              {Math.round(data.wind?.speed) + " Km/h"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsSunrise size={20} />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(data.sys?.sunrise, "Asia/Kolkata", "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <BsSunset size={20} />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(data.sys?.sunset, "Asia/Kolkata", "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <FaTemperatureHigh size={17} />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{data.main?.temp_max + "°"}</span>
        </p>
        <p className="font-light">|</p>

        <FaTemperatureLow size={17} />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{data.main?.temp_min + "°"}</span>
        </p>
      </div>
    </div>
  );
};

export default TempratureDetails;
