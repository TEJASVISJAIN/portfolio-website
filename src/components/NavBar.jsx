import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Portfolio" },
    { id: 4, link: "postman", label: "Postman" },
    { id: 5, link: "experience", label: "Experience" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    let scrollY = 0;
    
    if (nav) {
      // Store current scroll position
      scrollY = window.scrollY;
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.left = '';
      document.body.style.right = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollY);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [nav]);

  const Link = ({ to, children, ...props }) => (
    <ScrollLink to={to} offset={-80} {...props}>
      {children}
    </ScrollLink>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tejasvi S Jain
            </h1>
      </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

          {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 p-2"
      >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          nav
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999
        }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-all duration-500 ${
            nav ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setNav(false)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        ></div>
        
        {/* Menu Content */}
        <div 
          className="relative flex flex-col items-center justify-center h-full w-full"
          style={{
            position: 'relative',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setNav(false)}
            className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <FaTimes size={24} className="text-white" />
          </button>

          {/* Navigation Links */}
          <div className="space-y-8 text-center">
            {links.map(({ id, link, label }, index) => (
              <div
                key={id}
                className={`transform transition-all duration-500 ${
                  nav 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
            <Link
              to={link}
              smooth
              duration={500}
                  onClick={() => setNav(false)}
                  className="group relative text-4xl font-bold text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 block"
                >
                  <span className="relative z-10">{label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-opacity duration-300"></div>
                </Link>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className={`mt-16 flex space-x-6 transition-all duration-700 ${
            nav 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          }`} style={{ transitionDelay: "600ms" }}>
            <a
              href="https://github.com/TEJASVISJAIN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/tejasvisjain/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:tejasvisjain0214@gmail.com"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className={`mt-12 text-center transition-all duration-800 ${
            nav 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          }`} style={{ transitionDelay: "800ms" }}>
            <p className="text-gray-400 text-sm mb-2">Let's work together</p>
            <a
              href="mailto:tejasvisjain0214@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              tejasvisjain0214@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
