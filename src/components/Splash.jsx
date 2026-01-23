import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const Splashscreen = ({ slideOut }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const splashSteps = [
    {
      text: "POW!",
      subtitle: "Full Stack Developer",
      color: "comic-red",
      duration: 1000
    },
    {
      text: "BOOM!",
      subtitle: "GenAI Specialist",
      color: "comic-blue",
      duration: 1000
    },
    {
      text: "ZAP!",
      subtitle: "Ready to Code!",
      color: "comic-yellow",
      duration: 1000
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < splashSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, splashSteps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep, splashSteps]);

  return (
    <CSSTransition
      in={isVisible && !slideOut}
      timeout={800}
      classNames="splash"
      unmountOnExit
    >
      <div className="fixed inset-0 z-50 bg-comic-paper flex items-center justify-center overflow-hidden">
        {/* Halftone background pattern */}
        <div className="absolute inset-0 halftone-bg opacity-30"></div>

        {/* Comic action words in background */}
        <div className="absolute top-10 left-10 font-comic text-8xl text-comic-blue opacity-10 transform -rotate-12 animate-pulse">
          WHAM!
        </div>
        <div className="absolute bottom-10 right-10 font-comic text-8xl text-comic-red opacity-10 transform rotate-12 animate-pulse">
          BANG!
        </div>
        <div className="absolute top-1/3 right-20 font-comic text-6xl text-comic-green opacity-10 transform rotate-45 animate-pulse">
          CRASH!
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          {/* Logo/Name in Comic Style */}
          <div className="mb-12 animate-zoom-in">
            <div className="inline-block comic-panel-yellow p-8 transform hover:rotate-2 transition-transform">
              <h1 className="font-comic text-5xl md:text-7xl font-bold text-black mb-4" style={{
                textShadow: '5px 5px 0px rgba(0,0,0,0.3)'
              }}>
                TEJASVI S JAIN!
              </h1>
              <div className="h-2 bg-black mx-auto"></div>
            </div>
          </div>

          {/* Animated Action Words */}
          <CSSTransition
            in={true}
            timeout={500}
            classNames="content"
            key={currentStep}
          >
            <div className="space-y-6 animate-zoom-in">
              {/* Main Action Word */}
              <div className="relative">
                <h2 className={`font-comic text-7xl md:text-9xl font-bold text-${splashSteps[currentStep].color} transform rotate-2 animate-shake`} style={{
                  textShadow: '8px 8px 0px #000, -4px -4px 0px #fff'
                }}>
                  {splashSteps[currentStep].text}
                </h2>
                
                {/* Explosion stars around the text */}
                <div className="absolute -top-8 -left-8 text-5xl animate-spin">⭐</div>
                <div className="absolute -top-8 -right-8 text-5xl animate-spin" style={{animationDelay: '0.5s'}}>💥</div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-5xl animate-bounce">⚡</div>
              </div>

              {/* Subtitle in Speech Bubble */}
              <div className="flex justify-center mt-12">
                <div className="speech-bubble bg-white max-w-md">
                  <p className="font-speech text-2xl md:text-3xl text-black font-bold">
                    {splashSteps[currentStep].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </CSSTransition>

          {/* Comic Panel Progress Indicators */}
          <div className="mt-16">
            <div className="flex justify-center space-x-4">
              {splashSteps.map((step, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 border-4 border-black rounded-lg transition-all duration-300 flex items-center justify-center font-comic text-xl ${
                    index === currentStep
                      ? `bg-${step.color} scale-125 shadow-comic-lg animate-pulse-fast`
                      : 'bg-white opacity-50'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Comic Progress Bar */}
          <div className="mt-8 w-80 mx-auto">
            <div className="h-4 bg-white border-4 border-black rounded-full overflow-hidden shadow-comic">
              <div 
                className="h-full bg-comic-red border-r-4 border-black transition-all duration-300"
                style={{ 
                  width: `${((currentStep + 1) / splashSteps.length) * 100}%`,
                  background: currentStep === 0 ? '#FF0040' : currentStep === 1 ? '#00BFFF' : '#FFE135'
                }}
              />
            </div>
          </div>

          {/* Loading text */}
          <div className="mt-8">
            <p className="font-handwriting text-2xl text-black animate-bounce-comic">
              Loading awesomeness... 🚀
            </p>
          </div>
        </div>

        {/* Comic Speed Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-black"
              style={{
                width: `${50 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                left: i % 2 === 0 ? '-100px' : 'auto',
                right: i % 2 === 1 ? '-100px' : 'auto',
                transform: `rotate(${i % 2 === 0 ? -10 : 10}deg)`,
                animation: `speedLineMove ${2 + Math.random() * 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Floating comic symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['💥', '⚡', '⭐', '💫', '✨'].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-bounce-comic opacity-30"
              style={{
                left: `${(i * 20) + 10}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Splashscreen;
