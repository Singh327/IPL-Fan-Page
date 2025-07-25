import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const PlayerCard = ({ player }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300 ${
        darkMode ? "bg-[#371454] text-gray-200" : "bg-white"
      }`}
    >
      <img
        src={player.image}
        alt={player.name}
        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-yellow-500"
      />
      <h2
        className={`text-xl font-bold mt-4 ${
          darkMode ? "text-yellow-400" : "text-blue-900"
        }`}
      >
        {player.name}
      </h2>
      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-blue-800"}`}>
        {player.role}
      </p>
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Matches: {player.matches}
      </p>
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Runs: {player.runs}
      </p>
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {player.nationality}
      </p>
    </div>
  );
};

export default PlayerCard;
