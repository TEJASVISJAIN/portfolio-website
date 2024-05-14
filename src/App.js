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
      {showSplash && <Splashscreen slideOut={timerFinished} />} {/* Pass slideOut prop */}
      <Base />
    </div>
  );
}

export default App;
