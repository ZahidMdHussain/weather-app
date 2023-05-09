import React from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { formatToLocalTime } from "../utils/dateFormatter";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import fetchTimeZone from "../utils/getTimezone";

const ForcastAddedInfo = ({ data }) => {
  return (
    <div className="flex flex-row justify-end items-center text-white my-6">
      <div className="flex flex-col space-y-2 p-2 w-44 border rounded-md">
        <div className="flex font-light text-sm items-center justify-between">
          <BsSunrise size={16} className="mx-1" />
          Rise:
          <span className="font-medium ml-1">
            {formatToLocalTime(
              data.sys?.sunrise,
              fetchTimeZone(data.sys?.country),
              "hh:mm a"
            )}
          </span>
        </div>

        <div className="flex font-light text-sm items-center justify-between">
          <BsSunset size={16} className="mx-1" />
          Set:
          <span className="font-medium ml-1">
            {formatToLocalTime(
              data.sys?.sunset,
              fetchTimeZone(data.sys?.country),
              "hh:mm a"
            )}
          </span>
        </div>

        <div className="flex font-light text-sm items-center justify-between">
          <FaTemperatureHigh size={16} className="mx-1" />
          High:
          <span className="font-medium ml-1">{data.main?.temp_max + "°"}</span>
        </div>

        <div className="flex font-light text-sm items-center justify-between">
          <FaTemperatureLow size={16} className="mx-1" />
          Low:
          <span className="font-medium ml-1">{data.main?.temp_min + "°"}</span>
        </div>
      </div>
    </div>
  );
};

export default ForcastAddedInfo;
