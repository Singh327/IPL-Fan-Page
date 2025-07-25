import { useContext } from "react";
import PageWrapper from "../components/PageWrapper";
import schedule from "../data/schedule.json";
import { ThemeContext } from "../context/ThemeContext";

const Schedule = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageWrapper>
      <section
        className={`pt-30 min-h-[90vh] py-12 px-4 transition-all duration-500 ease-in-out ${
          darkMode
            ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
            : "bg-gradient-to-br from-orange-100 via-yellow-200 to-pink-100 text-gray-900"
        }`}
      >
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            darkMode ? "text-yellow-400" : "text-blue-900"
          }`}
        >
          🏏 CSK Match Schedule 2025
        </h1>

        <div className="overflow-x-auto">
          <table
            className={`table-auto w-full max-w-5xl mx-auto border shadow-lg rounded-lg ${
              darkMode ? "border-yellow-600" : "border-yellow-400"
            }`}
          >
            <thead
              className={`${
                darkMode ? "bg-yellow-600 text-black" : "bg-yellow-500 text-white"
              }`}
            >
              <tr>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Opponent</th>
                <th className="px-4 py-3 text-left">Venue</th>
                <th className="px-4 py-3 text-left">Result</th>
              </tr>
            </thead>

            <tbody className={darkMode ? "bg-[#1e1e1e]" : "bg-white"}>
              {schedule.map((match) => (
                <tr
                  key={match.id}
                  className={`border-t ${
                    darkMode
                      ? "border-yellow-700 hover:bg-yellow-900"
                      : "border-yellow-300 hover:bg-yellow-100"
                  } transition`}
                >
                  <td className="px-4 py-3">{match.date}</td>
                  <td className="px-4 py-3">{match.opponent}</td>
                  <td className="px-4 py-3">{match.venue}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`font-semibold ${
                        match.result.includes("Won")
                          ? "text-green-500"
                          : match.result.includes("Lost")
                          ? "text-red-400"
                          : darkMode
                          ? "text-blue-400"
                          : "text-blue-700"
                      }`}
                    >
                      {match.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Schedule;
