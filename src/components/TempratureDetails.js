import React from "react";
import sunimg from "../img/sunimg.png";
import { FaTemperatureLow, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { BiDroplet } from "react-icons/bi";
import { BsSunrise, BsSunset } from "react-icons/bs";

const TempratureDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-8 text-xl text-cyan-300">
        Cloudy
      </div>
      <div className="flex flex-row justify-between items-center text-white py-3">
        <img src={sunimg} alt="sunImage" className="w-16" />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={16} className="mx-1" />
            Real feel:
            <span className="font-medium ml-1">34°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiDroplet size={16} className="mx-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={16} className="mx-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsSunrise size={20} />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:15 AM</span>
        </p>
        <p className="font-light">|</p>

        <BsSunset size={20} />
        <p className="font-light">
          Set: <span className="font-medium ml-1">06:45 PM</span>
        </p>
        <p className="font-light">|</p>

        <FaTemperatureHigh size={17} />
        <p className="font-light">
          High: <span className="font-medium ml-1">34°</span>
        </p>
        <p className="font-light">|</p>

        <FaTemperatureLow size={17} />
        <p className="font-light">
          Low: <span className="font-medium ml-1">26°</span>
        </p>
      </div>
    </div>
  );
};

export default TempratureDetails;
