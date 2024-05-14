import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import "./splashScreenText.css"

const Splashscreen = () => {
  const helloLanguages = [
    'Hello',
    'Hola',
    'Bonjour',
    'Ciao',
    'Hallo',
    'Привет',
  ];
  const [currentHelloIndex, setCurrentHelloIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true); // Trigger fade-out animation
      setTimeout(() => {
        setCurrentHelloIndex((currentHelloIndex + 1) % helloLanguages.length); // Increment index
        setIsFadingOut(false); // Reset for next fade-in
      }, 300); // Adjust fade-out duration as needed
    }, 500); // Adjust interval between greetings

    return () => clearTimeout(timer);
  }, [currentHelloIndex, helloLanguages.length]); // Trigger effect only on currentHelloIndex or helloLanguages length change

  const handleTransitionEnd = () => {
    if (isFadingOut) { // Ensure fade-out is complete
      setIsFadingOut(false); // Reset fading state
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 9999,
        backgroundColor: '#000',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <CSSTransition
        in={!isFadingOut} // Fade in when not fading out
        timeout={300} // Adjust fade-in duration as needed
        classNames="hello-text"
        onEnter={() => setIsFadingOut(false)} // Reset fading on enter
        onExited={handleTransitionEnd} // Handle fade-out completion
      >
        <div className="splash-screen-text" style={{ fontSize: 36, fontWeight: 'bold' }}>{helloLanguages[currentHelloIndex]}</div>
      </CSSTransition>
    </div>
  );
};

export default Splashscreen;
