export function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col justify-center reveal">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-6 leading-none">Who<br/>am I?</h2>
          <p className="font-mono text-xl md:text-2xl leading-relaxed mb-6 bg-neo-yellow border-2 border-black p-4 shadow-hard">
            I'm Vishesh Jha. I build
            <span className="bg-neo-black text-neo-green px-2 py-1 border border-black ml-1 mr-1">
              AI-powered
            </span>
            products that solve real problems. The web doesn't need more noise - it needs intelligence, clarity, and execution.
          </p>
          <div
            className="font-mono text-lg mb-8 text-black border-4 border-black p-6 bg-neo-white relative shadow-hard"
          >
            <div className="absolute -top-3 -left-3 bg-neo-pink border-2 border-black w-6 h-6 rotate-45"></div>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple"></i>
                <span>Specialized in Full-Stack Development & AI Integration</span>
              </li>
              <li className="flex gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple"></i>
                <span>Obsessed with Perfection and AI.</span>
              </li>
              <li className="flex gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple"></i>
                <span>Shipping real projects through freelancing & self-initiated builds.</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-6 flex-wrap">
            <div
              className="bg-neo-black text-white px-6 py-3 font-mono text-sm border-2 border-transparent w-max shadow-hard"
            >
              📍 LOCATION: WORLDWIDE
            </div>
            <a href="#projects" className="bg-neo-green text-black px-6 py-3 font-mono font-bold text-sm border-2 border-black w-max shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-transform cursor-hover uppercase">
              See my work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center reveal relative">
          <div className="absolute inset-0 bg-neo-blue translate-x-4 translate-y-4 border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-8 h-full flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-9xl">
              <i className="ri-terminal-box-line"></i>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-8 border-b-4 border-black pb-4">
                <div className="w-4 h-4 rounded-full bg-neo-red border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-neo-yellow border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-neo-green border-2 border-black"></div>
                <span className="ml-4 font-mono font-bold text-sm">vitals.sh</span>
              </div>
              
              <div className="space-y-6 font-mono text-lg font-bold">
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black">FRONTEND</span>
                  <span className="text-3xl text-neo-blue">95%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black">BACKEND</span>
                  <span className="text-3xl text-neo-pink">88%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black">AI / ML</span>
                  <span className="text-3xl text-neo-orange">80%</span>
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors">
                  <span className="text-gray-500 group-hover:text-black">DESIGN UI/UX</span>
                  <span className="text-3xl text-neo-purple">92%</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-4 border-t-4 border-black">
              <marquee scrollamount="6" className="font-black uppercase text-xl text-neo-red tracking-widest">
                ALWAYS LEARNING /// ALWAYS BUILDING /// ALWAYS ITERATING ///
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
