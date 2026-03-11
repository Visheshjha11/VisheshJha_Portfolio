import { useState, useEffect } from 'react';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the navbar when scrolled down more than 50px
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-none">
        <a
          href="#"
          className="bg-neo-white border-2 border-black px-4 py-1 text-2xl font-black shadow-hard hover:bg-neo-orange transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover pointer-events-auto"
          aria-label="Home / Vishesh Jha Logo"
        >
          VJ
        </a>

        <div 
          className={`hidden md:flex gap-4 bg-white border-2 border-black p-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] origin-top-left ${
            isVisible 
              ? 'translate-x-0 translate-y-0 rotate-0 skew-x-0 opacity-100 visible shadow-hard' 
              : 'translate-x-[150%] translate-y-24 rotate-[45deg] skew-x-[30deg] opacity-0 invisible shadow-none'
          }`}
        >
          <a
            href="#about"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /ABOUT
          </a>
          <a
            href="#skills"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /SKILLS
          </a>
          <a
            href="#experience"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /LOGS
          </a>
          <a
            href="#projects"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /WORK
          </a>
          <a
            href="#contact"
            className="px-3 py-1 font-mono font-bold text-sm bg-neo-yellow border border-black hover:bg-neo-pink transition-colors cursor-hover"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </nav>
  );
}
