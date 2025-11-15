import { useState, useEffect } from 'react';

const announcements = [
  "Now booking Q1 engagements",
  "New: Scent packaging case study",
  "First response within 24 hours",
  "Founder-friendly retainers available"
];

export default function LandingBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded flex items-center justify-center font-bold text-white text-sm">
            D3
          </div>
          <span className="text-white font-semibold text-sm hidden sm:inline">Atelier Dream 3</span>
        </div>

        <div
          className="flex-1 max-w-md mx-8 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20">
              {announcements[currentIndex]}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#work" className="text-gray-300 hover:text-white transition-colors duration-200">Work</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors duration-200">Process</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
          </nav>
          <button
            onClick={scrollToContact}
            className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-xs font-medium rounded hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
}
