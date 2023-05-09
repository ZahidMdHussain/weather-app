import React from "react";
import { formatToLocalTime } from "../utils/dateFormatter";
import fetchTimeZone from "../utils/getTimezone";

const DateAndTime = ({ data }) => {
  return (
    <div className="my-3">
      <div className="flex justify-center items-center my-3">
        <p className="text-white text-2xl font-extralight">
          {formatToLocalTime(data.dt, fetchTimeZone(data.sys?.country))}
        </p>
      </div>
    </div>
  );
};

export default DateAndTime;
