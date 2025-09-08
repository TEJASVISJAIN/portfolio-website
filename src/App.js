import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import "./components/styles/splash.css"; // Import the CSS file
import Splashscreen from "./components/Splash";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timerFinished) {
      const slideOutTimer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(slideOutTimer);
    }
  }, [timerFinished]);

  return (
    <div className="App">
      <Analytics />
      {showSplash && <Splashscreen slideOut={timerFinished} />}
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
