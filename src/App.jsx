import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Loading from "./components/Loading"; 

import "./index.css";
const Players = lazy(() => import('./pages/Players'));
const Schedule = lazy(() => import('./pages/Schedule'));
const FanZone = lazy(() => import('./pages/FanZone'));
const News = lazy(() => import('./pages/News'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Suspense fallback={<Loading />}><Schedule /></Suspense>}  />
          <Route path="/players" element={<Suspense fallback={<Loading />}><Players /></Suspense>} />
          <Route path="/stats" element={<Suspense fallback={<Loading />}><Stats /></Suspense>}  />
          <Route path="/news" element={<Suspense fallback={<Loading />}><News /></Suspense>}  />
          <Route path="/fanzone" element={<Suspense fallback={<Loading />}><FanZone /></Suspense>} />
        </Routes>
      
    </ThemeContext.Provider>
  );
};

export default App;
