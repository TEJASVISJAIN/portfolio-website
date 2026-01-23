import React from "react";

function Footer() {
  return (
    <footer className="bg-black border-t-8 border-comic-yellow py-12 relative overflow-hidden">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone-bg opacity-20"></div>
      
      {/* Comic action words in background */}
      <div className="absolute top-5 left-10 font-comic text-6xl text-comic-yellow opacity-10 transform -rotate-12">
        BOOM!
      </div>
      <div className="absolute bottom-5 right-10 font-comic text-6xl text-comic-red opacity-10 transform rotate-12">
        POW!
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="text-center mb-8">
          <div className="inline-block comic-panel-yellow p-6 mb-6 transform hover:rotate-2 transition-transform">
            <h3 className="font-comic text-3xl md:text-4xl text-black mb-2">
              THANKS FOR VISITING!
            </h3>
            <div className="h-1 bg-black w-full"></div>
          </div>

          <div className="speech-bubble bg-white max-w-2xl mx-auto mb-6">
            <p className="font-speech text-lg text-black">
              © {new Date().getFullYear()} <strong className="text-comic-red">Tejasvi S Jain</strong>. 
              Built with <strong className="text-comic-blue">React</strong> and lots of ☕ (and comic book vibes!)
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="comic-panel bg-comic-blue p-3 inline-block">
              <p className="font-comic text-white text-sm">FULL STACK HERO!</p>
            </div>
            <div className="comic-panel bg-comic-green p-3 inline-block">
              <p className="font-comic text-white text-sm">GENAI SPECIALIST!</p>
            </div>
            <div className="comic-panel bg-comic-red p-3 inline-block">
              <p className="font-comic text-white text-sm">CODE CRUSADER!</p>
            </div>
          </div>

          <div className="thought-bubble bg-white inline-block p-4">
            <p className="font-handwriting text-sm text-black">
              💭 Designed and developed with passion for creating amazing digital experiences!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-comic-yellow pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="font-speech text-white text-sm">
              🚀 Always ready for the next adventure!
            </p>
            <div className="hidden md:block text-comic-yellow">|</div>
            <p className="font-speech text-white text-sm">
              💡 Let's build something <span className="text-comic-yellow font-bold">AWESOME</span> together!
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-5 left-5 text-4xl animate-bounce-comic opacity-30">⚡</div>
        <div className="absolute top-5 right-5 text-4xl animate-bounce-comic opacity-30" style={{animationDelay: '0.5s'}}>💥</div>
      </div>
    </footer>
  );
}

export default Footer;
