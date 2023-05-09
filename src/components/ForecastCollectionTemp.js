import React from "react";
import ForcastAddedInfo from "./ForcastAddedInfo";
import TodaysForecast from "./TodaysForecast";
import DateAndTime from "./DateAndTime";

const ForecastCollectionTemp = ({ data, unit, setUnit }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <TodaysForecast data={data} unit={unit} setUnit={setUnit} />
        <DateAndTime data={data} />
      </div>
      <ForcastAddedInfo data={data} />
    </div>
  );
};

export default ForecastCollectionTemp;
