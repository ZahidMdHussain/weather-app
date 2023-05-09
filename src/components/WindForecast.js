import React from "react";
import { FaWind } from "react-icons/fa";
import { ImCompass2 } from "react-icons/im";
import { AiFillEyeInvisible } from "react-icons/ai";

const WindForecast = ({ data }) => {
  return (
    <div className="flex flex-row justify-end items-center text-white">
      <div className="flex flex-col space-y-2 p-2 w-44 border rounded-md">
        <div className="flex font-light text-sm items-center justify-between">
          <FaWind size={16} className="mx-1" />
          Wind:
          <span className="font-medium ml-1">
            {Math.round(data.wind?.speed) + " Km/h"}
          </span>
        </div>
        <div className="flex font-light text-sm items-center justify-between">
          <ImCompass2 size={16} className="mx-1" />
          Wind deg:
          <span className="font-medium ml-1">
            {Math.round(data.wind?.deg) + "°"}
          </span>
        </div>
        <div className="flex font-light text-sm items-center justify-between">
          <AiFillEyeInvisible size={16} className="mx-1" />
          Visibility:
          <span className="font-medium ml-1">{data.visibility + " m"}</span>
        </div>
      </div>
    </div>
  );
};

export default WindForecast;
