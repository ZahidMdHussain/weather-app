import FavouriteCity from "./components/FavouriteCity";
import SearchNewCity from "./components/SearchNewCity";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-5 py-5 px-36 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 h-fit">
      <FavouriteCity />
      <SearchNewCity />
    </div>
  );
}

export default App;
