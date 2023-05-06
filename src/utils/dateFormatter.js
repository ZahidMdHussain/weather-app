import { DateTime } from "luxon";

export const formatToLocalTime = (
  sec,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(sec).setZone(zone).toFormat(format);
};
