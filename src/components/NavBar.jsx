import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/portfolio", label: "Portfolio" },
    { id: 3, path: "/experience", label: "Experience" },
    { id: 4, path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [nav]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in ${scrolled ? "bg-comic-yellow border-b-4 border-black shadow-comic" : "bg-comic-yellow/90"}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-comic font-bold text-black hover:scale-105 transition-transform duration-300">
                TEJASVI S JAIN
              </h1>
            </Link>
          </div>

          <ul className="hidden md:flex space-x-4">
            {links.map(({ id, path, label }) => (
              <li key={id}>
                <Link to={path} className={`comic-button transition-all duration-200 ${location.pathname === path ? "comic-button-red" : "comic-button-blue"}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer p-3 bg-black rounded-lg border-4 border-black shadow-comic hover:bg-comic-red transition-all duration-200">
            {nav ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
          </div>
        </div>
      </div>

      {nav && (
        <div className="fixed inset-0 z-50 md:hidden bg-black halftone-bg" style={{ zIndex: 9999 }}>
          <div className="relative flex flex-col items-center justify-center h-full w-full p-8">
            <button onClick={() => setNav(false)} className="absolute top-8 right-8 p-4 bg-comic-red rounded-full border-4 border-black shadow-comic-lg hover:scale-110 transition-transform duration-200">
              <FaTimes size={28} className="text-white" />
            </button>
            <div className="mb-12">
              <h2 className="font-comic text-5xl text-comic-yellow" style={{textShadow: '4px 4px 0px #000'}}>MENU!</h2>
            </div>
            <div className="space-y-6 w-full max-w-md">
              {links.map(({ id, path, label }) => (
                <Link key={id} to={path} onClick={() => setNav(false)} className="block">
                  <div className="speech-bubble bg-white hover:bg-comic-yellow transition-colors duration-300 hover:scale-105 transform">
                    <p className={`font-comic text-2xl text-center text-black ${location.pathname === path ? "text-comic-red" : ""}`}>{label}!</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
