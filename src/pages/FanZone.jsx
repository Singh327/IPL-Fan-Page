import { useState, useContext } from "react";
import PageWrapper from "../components/PageWrapper";
import { ThemeContext } from "../context/ThemeContext";

const players = ["MS Dhoni", "Ruturaj Gaikwad", "Ravindra Jadeja", "Deepak Chahar"];

const FanZone = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handlePollSubmit = () => {
    if (selected) setSubmitted(true);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <PageWrapper>
           <section
        className={`pt-30 min-h-[90vh] px-4 py-12 transition-all duration-500 ease-in-out ${
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
          🗳️ CSK Fan Zone
        </h1>

        {/* Poll Section */}
        <div
          className={`rounded-xl shadow-md p-6 mb-10 max-w-3xl mx-auto ${
            darkMode ? "bg-[#0f111138] text-gray-200" : "bg-white text-gray-600"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              darkMode ? "text-yellow-300" : "text-blue-800"
            }`}
          >
            Who is your Player of the Match?
          </h2>
          {!submitted ? (
            <div>
              {players.map((player) => (
                <label key={player} className="block mb-2">
                  <input
                    type="radio"
                    name="player"
                    value={player}
                    className="mr-2"
                    onChange={(e) => setSelected(e.target.value)}
                  />
                  {player}
                </label>
              ))}
              <button
                onClick={handlePollSubmit}
                className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-900"
              >
                Submit Vote
              </button>
            </div>
          ) : (
            <p className="text-green-400 font-semibold">
              Thank you for voting for <strong>{selected}</strong>! 🦁
            </p>
          )}
        </div>

        {/* Comment Section */}
        <div
          className={`rounded-xl shadow-md p-6 mb-10 max-w-3xl mx-auto ${
            darkMode ? "bg-[#0f111138]  text-gray-200" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              darkMode ? "text-yellow-300" : "text-blue-800"
            }`}
          >
            💬 Fan Comments
          </h2>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your thoughts..."
              className="w-full border border-yellow-400 rounded-lg p-3 mb-2"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded hover:bg-yellow-600"
            >
              Post Comment
            </button>
          </form>
          <div>
            {comments.length === 0 ? (
              <p className="text-sm text-gray-400">No comments yet. Be the first!</p>
            ) : (
              comments.map((cmt, idx) => (
                <p
                  key={idx}
                  className={`rounded p-2 mb-2 ${
                    darkMode ? "bg-[#162a21] text-yellow-300" : "bg-yellow-100 text-blue-800"
                  }`}
                >
                  {cmt}
                </p>
              ))
            )}
          </div>
        </div>

        {/* Social Embed */}
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-2xl font-semibold mb-4 ${
              darkMode ? "text-yellow-300" : "text-blue-800"
            }`}
          >
            📲 Follow CSK on Social Media
          </h2>
          <div className="rounded overflow-hidden shadow-md mb-6">
            <iframe
              src="https://www.instagram.com/chennaiipl/embed"
              title="CSK Instagram"
              className="w-full h-[500px] border-0"
              allowTransparency="true"
            ></iframe>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FanZone;
