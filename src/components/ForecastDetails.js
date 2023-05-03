import React from "react";
import sun from "../img/sunimg.png";

const ForecastDetails = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-2">
        <p className="font-light text-sm">04: 30 PM</p>
        <img src={sun} alt="sunImg" className="w-12 my-1" />
        <p className="font-medium">22°</p>
      </div>
    </div>
  );
};

export default ForecastDetails;
