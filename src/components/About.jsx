export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 border-y-4 border-black bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pl-1 pr-3 md:pl-0 md:pr-0">
        <div className="lg:col-span-7 flex flex-col justify-center reveal">
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-6 leading-none">Who<br/>am I?</h2>
          <p className="font-mono text-lg md:text-2xl leading-relaxed mb-6 bg-neo-yellow border-2 border-black p-4 md:p-6 shadow-hard">
            I'm Vishesh Jha. I build
            <span className="bg-neo-black text-neo-green px-2 py-1 border border-black mx-1 inline-block mt-1 mb-1 sm:mt-0 sm:mb-0">
              AI-powered
            </span>
            products that solve real problems. The web doesn't need more noise - it needs intelligence, clarity, and execution.
          </p>
          <div
            className="font-mono text-base md:text-lg mb-8 text-black border-4 border-black p-4 md:p-6 bg-neo-white relative shadow-hard"
          >
            <div className="absolute -top-3 -left-3 bg-neo-pink border-2 border-black w-6 h-6 rotate-45"></div>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-0"></i>
                <span className="flex-1">Specialized in Full-Stack Development & AI Integration</span>
              </li>
              <li className="flex gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-0"></i>
                <span className="flex-1">Obsessed with Perfection and AI.</span>
              </li>
              <li className="flex gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-0"></i>
                <span className="flex-1">Shipping real projects through freelancing & self-initiated builds.</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 md:gap-6 flex-col sm:flex-row flex-wrap">
            <div
              className="bg-neo-black text-white px-4 md:px-6 py-3 font-mono text-xs md:text-sm border-2 border-transparent w-full sm:w-max shadow-hard text-center flex items-center justify-center"
            >
              📍 LOCATION: WORLDWIDE
            </div>
            <a href="#projects" className="bg-neo-green text-black px-4 md:px-6 py-3 font-mono font-bold text-xs md:text-sm border-2 border-black w-full sm:w-max shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-transform cursor-hover uppercase text-center flex items-center justify-center">
              See my work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center reveal relative mt-8 lg:mt-0 w-full max-w-full">
          <div className="absolute inset-0 bg-neo-blue translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-5 md:p-8 h-full flex flex-col justify-between relative overflow-hidden group">
            
            <div>
              <div className="flex items-center gap-2 mb-6 md:mb-8 border-b-4 border-black pb-4">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neo-red border-2 border-black flex-shrink-0"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neo-yellow border-2 border-black flex-shrink-0"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neo-green border-2 border-black flex-shrink-0"></div>
                <span className="ml-2 md:ml-4 font-mono font-bold text-xs md:text-sm truncate">vitals.sh</span>
              </div>
              
              <div className="space-y-4 md:space-y-6 font-mono text-base md:text-lg font-bold">
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black text-xs sm:text-sm md:text-base uppercase">Frontend</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-blue">95%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black text-xs sm:text-sm md:text-base uppercase">Backend</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-pink">88%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black text-xs sm:text-sm md:text-base uppercase">AI / ML</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-orange">80%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black text-xs sm:text-sm md:text-base uppercase">Design UI/UX</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-neo-purple">92%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-4 border-t-4 border-black">
              <marquee scrollamount="6" className="font-black uppercase text-lg md:text-xl text-neo-red tracking-widest leading-none py-1">
                ALWAYS LEARNING /// ALWAYS BUILDING /// ALWAYS ITERATING /// ALWAYS LEARNING /// ALWAYS BUILDING /// ALWAYS ITERATING 
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
