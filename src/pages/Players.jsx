import PageWrapper from "../components/PageWrapper";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import players from "../data/players";

const Players = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageWrapper>
      <section
        className={`min-h-[90vh] pt-30 py-12 px-4 transition-all duration-500 ease-in-out ${
          darkMode
            ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
            : "bg-gradient-to-br from-orange-100 via-yellow-200 to-pink-100 text-gray-900"
        }`}
      >
        <h2
          className={`text-4xl font-bold text-center mb-10 ${
            darkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-violet-400"
              : "text-blue-900"
          }`}
        >
          Meet Our Super Kings 🏏
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {players.map((player) => (
            <div
              key={player.id}
              className={`rounded-xl overflow-hidden shadow-lg p-4 transition-transform duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-[#1e293b] hover:bg-[#334155]"
                  : "bg-white hover:bg-yellow-100"
              }`}
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{player.name}</h3>
              <p className="text-sm mb-1">{player.role}</p>
              <p className="text-sm mb-1">Nationality: {player.nationality}</p>
              <p className="text-sm">Runs: {player.runs}</p>
              <p className="text-sm">Matches: {player.matches}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Players;
