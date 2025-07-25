import cskBanner from "../assets/csk-banner.jpg";
import PageWrapper from "../components/PageWrapper";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ArrowRightCircle } from "lucide-react";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageWrapper>
      <section
        className={`my-5 text-center min-h-[85vh] py-12 px-4 flex flex-col justify-center items-center transition-all duration-500 ease-in-out
          ${
            darkMode
              ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
              : "bg-gradient-to-br from-yellow-100 via-orange-200 to-pink-200 text-gray-900"
          }
        `}
      >
        <img
          src={cskBanner}
          alt="CSK Banner"
          className="w-[400px] max-w-[450px] rounded-3xl shadow-2xl m-10 transition-transform duration-500 hover:scale-105"
        />

        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${
            darkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-violet-400"
              : "text-blue-900"
          }`}
        >
          Welcome to the <br />
          Chennai Super Kings Fan Hub{" "}
          <span className={darkMode ? "text-yellow-300" : "text-yellow-600"}>🦁</span>
        </h1>

        <p
          className={`text-lg md:text-xl max-w-2xl mb-6 ${
            darkMode ? "text-gray-300" : "text-blue-800"
          }`}
        >
          Your ultimate fan-made destination for everything CSK – match schedules,
          player profiles, thrilling stats, breaking news, and more!
        </p>

        <a
          href="/schedule"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition duration-300 group text-lg shadow-md ${
            darkMode
              ? "bg-violet-600 text-white hover:bg-violet-800"
              : "bg-blue-700 text-white hover:bg-blue-900"
          }`}
        >
          View Match Schedule
          <ArrowRightCircle className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>

        <p
          className={`mt-10 italic text-sm sm:text-base ${
            darkMode ? "text-yellow-300" : "text-yellow-700"
          }`}
        >
          "Whistle Podu 💛 Let’s roar louder this season!"
        </p>
      </section>
    </PageWrapper>
  );
};

export default Home;
