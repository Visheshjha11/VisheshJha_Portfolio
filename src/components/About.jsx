export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-black bg-white overflow-hidden w-full box-border"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 w-full">
        <div className="lg:col-span-7 flex flex-col justify-center reveal">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase mb-6 leading-none break-words">Who<br/>am I?</h2>
          <p className="font-mono text-base sm:text-lg md:text-2xl leading-relaxed mb-6 bg-neo-yellow border-2 border-black p-4 md:p-6 shadow-hard text-justify sm:text-left">
            I'm Vishesh Jha. I build
            <span className="bg-neo-black text-neo-green px-2 py-1 border border-black mx-1 inline-block my-1 sm:my-0 shadow-[2px_2px_0_#000]">
              AI-powered
            </span>
            products that solve real problems. The web doesn't need more noise - it needs intelligence, clarity, and execution.
          </p>
          <div
            className="font-mono text-sm sm:text-base md:text-lg mb-8 text-black border-4 border-black p-4 md:p-6 bg-neo-white relative shadow-[4px_4px_0_#000] md:shadow-[8px_8px_0_#000]"
          >
            <div className="absolute -top-3 -left-3 bg-neo-pink border-2 border-black w-6 h-6 rotate-45"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-1 flex-shrink-0 text-lg"></i>
                <span className="flex-1 leading-snug">Specialized in Full-Stack Development & AI Integration</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-1 flex-shrink-0 text-lg"></i>
                <span className="flex-1 leading-snug">Obsessed with Perfection and AI.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-1 flex-shrink-0 text-lg"></i>
                <span className="flex-1 leading-snug">Shipping real projects through freelancing & self-initiated builds.</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 md:gap-6 flex-col sm:flex-row flex-wrap w-full">
            <div
              className="bg-neo-black text-white px-4 md:px-6 py-3 font-mono text-xs sm:text-sm border-2 border-transparent w-full sm:flex-1 shadow-[4px_4px_0_rgba(0,0,0,0.2)] md:shadow-[8px_8px_0_rgba(0,0,0,0.2)] text-center flex items-center justify-center min-h-[50px] whitespace-nowrap overflow-hidden text-ellipsis"
            >
              📍 LOCATION: WORLDWIDE
            </div>
            <a href="#projects" className="bg-neo-green text-black px-4 md:px-6 py-3 font-mono font-bold text-xs sm:text-sm border-2 border-black w-full sm:flex-1 shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-transform cursor-hover uppercase text-center flex items-center justify-center min-h-[50px]">
              See my work
            </a>
          </div>
        </div>

        {/* Using a pr and pb wrapper so the absolute shadow element doesn't bleed out of bounds on tiny screens */}
        <div className="lg:col-span-5 flex flex-col justify-center reveal relative mt-6 lg:mt-0 w-full pr-2 pb-2 md:pr-4 md:pb-4 mx-auto max-w-[500px] lg:max-w-full">
          <div className="absolute top-2 left-2 right-0 bottom-0 md:top-4 md:left-4 bg-neo-blue border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between relative z-10 w-full group overflow-hidden">
            
            <div>
              <div className="flex items-center gap-2 mb-6 md:mb-8 border-b-4 border-black pb-4 overflow-hidden">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neo-red border-2 border-black flex-shrink-0"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neo-yellow border-2 border-black flex-shrink-0"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neo-green border-2 border-black flex-shrink-0"></div>
                <span className="ml-2 md:ml-4 font-mono font-bold text-xs sm:text-sm truncate">vitals.sh</span>
              </div>
              
              <div className="space-y-4 md:space-y-6 font-mono text-sm sm:text-base md:text-lg font-bold">
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">Frontend</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-blue ml-2">95%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">Backend</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-pink ml-2">88%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">AI / ML</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-orange ml-2">80%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">Design UI/UX</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-purple ml-2">92%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-4 border-t-4 border-black overflow-hidden relative">
              <div className="w-full h-6 sm:h-8 flex items-center">
                <marquee scrollamount="5" className="font-black uppercase text-sm sm:text-lg md:text-xl text-neo-red tracking-widest leading-none block whitespace-nowrap m-0 pt-1">
                  ALWAYS LEARNING /// ALWAYS BUILDING /// ALWAYS ITERATING /// ALWAYS LEARNING /// ALWAYS BUILDING /// ALWAYS ITERATING 
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
