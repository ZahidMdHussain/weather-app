import ct from "countries-and-timezones";

const fetchTimeZone = (countryCode) => {
  const timezones = ct.getTimezonesForCountry(countryCode);
  return timezones[0].name;
};

export default fetchTimeZone;
