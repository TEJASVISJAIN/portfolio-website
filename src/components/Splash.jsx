import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaCode, FaBrain, FaRocket } from 'react-icons/fa';

const Splashscreen = ({ slideOut }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const splashSteps = [
    {
      icon: <FaCode className="text-cyan-400" size={48} />,
      title: "Full Stack Developer",
      subtitle: "Building amazing digital experiences",
      duration: 1000
    },
    {
      icon: <FaBrain className="text-purple-400" size={48} />,
      title: "GenAI Specialist",
      subtitle: "Harnessing the power of AI",
      duration: 1000
    },
    {
      icon: <FaRocket className="text-green-400" size={48} />,
      title: "Innovation Driven",
      subtitle: "Turning ideas into reality",
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
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tejasvi S Jain
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Animated content */}
          <CSSTransition
            in={true}
            timeout={500}
            classNames="content"
            key={currentStep}
          >
            <div className="space-y-6">
              <div className="flex justify-center">
                {splashSteps[currentStep].icon}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {splashSteps[currentStep].title}
                </h2>
                <p className="text-xl text-gray-300">
                  {splashSteps[currentStep].subtitle}
                </p>
              </div>
            </div>
          </CSSTransition>

          {/* Loading indicator */}
          <div className="mt-12">
            <div className="flex justify-center space-x-2">
              {splashSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 w-64 mx-auto">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((currentStep + 1) / splashSteps.length) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Splashscreen;
