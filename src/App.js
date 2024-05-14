import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import Base from "./components/Base";
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
  }, []); // Run once on component mount

  useEffect(() => {
    if (timerFinished) {
      const slideOutTimer = setTimeout(() => {
        setShowSplash(false);
      }, 500); // Adjust the duration to match the slide-out animation duration
      return () => clearTimeout(slideOutTimer);
    }
  }, [timerFinished]); // Run when timerFinished changes

  return (
    <div className="App">
      <Analytics />
      {showSplash && <Splashscreen slideOut={timerFinished} />} {/* Pass slideOut prop */}
      <Base />
    </div>
  );
}

export default App;
