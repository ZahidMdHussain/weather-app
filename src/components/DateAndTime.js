import React from "react";
import { formatToLocalTime } from "../utils/dateFormatter";

const DateAndTime = ({ data }) => {
  // console.log(data);
  return (
    <div className="my-5">
      <div className="flex justify-center items-center my-3">
        <p className="text-white text-xl font-extralight">
          {/* Tuesday, 28 April 2022 | Local time: 12:24 AM */}
          {formatToLocalTime(data.dt, "Asia/Kolkata")}
        </p>
      </div>
      <div className="flex justify-center items-center my-3">
        <p className="text-white text-2xl font-medium">
          {data.name}, {data.sys?.country}
        </p>
      </div>
    </div>
  );
};

export default DateAndTime;
