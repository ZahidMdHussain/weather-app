import DateAndTime from "./components/DateAndTime";
import FavouriteCity from "./components/FavouriteCity";
import SearchNewCity from "./components/SearchNewCity";
import TempratureDetails from "./components/TempratureDetails";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-5 py-5 px-28 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 h-fit">
      <FavouriteCity />
      <SearchNewCity />
      <DateAndTime />
      <TempratureDetails />
    </div>
  );
}

export default App;
