const API_KEY = "be4a5eb1044b596f561c944c91873f63";
export const DEFAULT_WEATHER_DATA = (city, unit) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;

export const iconUrl = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export const cities = [
  {
    id: 1,
    city: "Delhi",
  },
  {
    id: 2,
    city: "Mumbai",
  },
  {
    id: 3,
    city: "Kolkata",
  },
  {
    id: 4,
    city: "Chennai",
  },
  {
    id: 5,
    city: "Bengaluru",
  },
];
