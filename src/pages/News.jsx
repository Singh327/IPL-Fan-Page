import { useContext } from "react";
import newsList from "../data/news.json";
import NewsCard from "../components/NewsCard";
import PageWrapper from "../components/PageWrapper";
import { ThemeContext } from "../context/ThemeContext";

const News = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PageWrapper>
      <section
        className={`pt-30 min-h-[100vh] py-12 px-4 transition-all duration-500 ease-in-out ${
          darkMode
            ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
            : "bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 text-gray-900"
        }`}
      >
        <h1
          className={`text-4xl font-bold text-center mb-10 transition-colors duration-300 ${
            darkMode ? "text-violet-400" : "text-blue-900"
          }`}
        >
          📰 CSK News & Updates
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default News;
