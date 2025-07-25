import { useContext } from "react";
import PageWrapper from "../components/PageWrapper";
import stats from "../data/stats.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";

const Stats = () => {
  const { darkMode } = useContext(ThemeContext);
  const labelStyle = darkMode ? "text-yellow-400" : "text-blue-800";

  return (
    <PageWrapper>
     <section
        className={`pt-24 min-h-[90vh] px-4 py-12 transition-all duration-500 ease-in-out ${
          darkMode
            ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
            : "bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 text-gray-900"
        }`}
      >
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            darkMode ? "text-yellow-400" : "text-blue-900"
          }`}
        >
          📊 CSK Team Stats
        </h1>

        <div className="max-w-4xl mx-auto grid gap-10">
          {/* Matches Summary */}
          <div className={`p-6 rounded-xl shadow-md text-center ${darkMode ? "bg-[#1e1e1e]" : "bg-white"}`}>
            <h2 className={`text-2xl font-bold mb-2 ${labelStyle}`}>Matches Summary</h2>
            <p>Played: <strong>{stats.teamStats.matchesPlayed}</strong></p>
            <p>Won: <strong className="text-green-500">{stats.teamStats.matchesWon}</strong></p>
            <p>Lost: <strong className="text-red-500">{stats.teamStats.matchesLost}</strong></p>
            <p>Winning %: {stats.teamStats.winningPercentage}</p>
            <p>IPL Titles: {stats.teamStats.iplTitles}</p>
            <p>Finals Played: {stats.teamStats.finalsPlayed}</p>
            <p>Highest Team Total: {stats.teamStats.highestTeamTotal}</p>
            <p>Lowest Team Total: {stats.teamStats.lowestTeamTotal}</p>
          </div>

          {/* Top Run Scorers */}
          <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-[#1e1e1e]" : "bg-white"}`}>
            <h2 className={`text-xl font-bold mb-4 ${labelStyle}`}>🏏 Top Run Scorers</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.topRunScorers}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
                <XAxis dataKey="name" stroke={darkMode ? "#e5e7eb" : "#000"} />
                <YAxis stroke={darkMode ? "#e5e7eb" : "#000"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#2d2d2d" : "#fff",
                    color: darkMode ? "#fef3c7" : "#000",
                    border: "1px solid #ccc",
                  }}
                />
                <Legend />
                <Bar dataKey="runs" fill="#2563eb" name="Runs" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Wicket Takers */}
          <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-[#1e1e1e]" : "bg-white"}`}>
            <h2 className={`text-xl font-bold mb-4 ${labelStyle}`}>🎯 Top Wicket Takers</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.topWicketTakers}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
                <XAxis dataKey="name" stroke={darkMode ? "#e5e7eb" : "#000"} />
                <YAxis stroke={darkMode ? "#e5e7eb" : "#000"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#2d2d2d" : "#fff",
                    color: darkMode ? "#fef3c7" : "#000",
                    border: "1px solid #ccc",
                  }}
                />
                <Legend />
                <Bar dataKey="wickets" fill="#facc15" name="Wickets" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Batting Stats */}
          <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-[#1e1e1e]" : "bg-white"}`}>
            <h2 className={`text-xl font-bold mb-4 ${labelStyle}`}>🧢 Additional Batting Stats</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.battingStats}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
                <XAxis dataKey="player" stroke={darkMode ? "#e5e7eb" : "#000"} />
                <YAxis stroke={darkMode ? "#e5e7eb" : "#000"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#2d2d2d" : "#fff",
                    color: darkMode ? "#fef3c7" : "#000",
                    border: "1px solid #ccc",
                  }}
                />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" name="Stat" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Bowling Stats */}
          <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-[#1e1e1e]" : "bg-white"}`}>
            <h2 className={`text-xl font-bold mb-4 ${labelStyle}`}>💥 Additional Bowling Stats</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.bowlingStats}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
                <XAxis dataKey="player" stroke={darkMode ? "#e5e7eb" : "#000"} />
                <YAxis stroke={darkMode ? "#e5e7eb" : "#000"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#2d2d2d" : "#fff",
                    color: darkMode ? "#fef3c7" : "#000",
                    border: "1px solid #ccc",
                  }}
                />
                <Legend />
                <Bar dataKey="value" fill="#eab308" name="Stat" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Fielding Stats */}
          <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-[#1e1e1e]" : "bg-white"}`}>
            <h2 className={`text-xl font-bold mb-4 ${labelStyle}`}>🧤 Fielding Stats</h2>
            <ul className="space-y-2">
              {stats.fieldingStats.map((stat, index) => (
                <li key={index} className="text-lg">
                  {stat.label}: <strong>{stat.player}</strong> ({stat.value})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Stats;
