export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center">
        Experience<span className="text-neo-red">_Log</span>
      </h2>

      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
        <div className="reveal relative pl-8 md:pl-16">
          <div className="absolute -left-[14px] top-2 w-6 h-6 bg-neo-blue border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
              <h3 className="text-3xl font-black uppercase">Content Executive</h3>
              <span className="font-mono font-bold bg-neo-black text-white px-2 py-1">
                Nov 2025 - PRESENT
              </span>
            </div>
            <p className="font-mono text-xl mb-2 text-neo-blue font-bold">
              @ Institution of Engineers (India) - IEI Student Chapter
            </p>
            <ul className="list-disc list-inside font-mono text-gray-700 space-y-2 mb-4">
              <li>
                Create, edit, and manage technical and non-technical content for the student community.
              </li>
              <li>
                Develop written content for events, announcements, social media, and internal communications.
              </li>
              <li>
                Collaborate with core team members to ensure consistent messaging and timely content delivery.
              </li>
              <li>
                Contribute to improving engagement and visibility of club activities through structured content.
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-gray-300 flex flex-wrap items-center gap-2">
              <span className="font-bold text-black uppercase tracking-wider text-sm mr-2">
                Skills Used:
              </span>
              <span className="font-mono text-sm bg-neo-black text-white px-2 py-1 whitespace-nowrap">
                Content Writing
              </span>
              <span className="font-mono text-sm bg-neo-black text-white px-2 py-1 whitespace-nowrap">
                Copywriting
              </span>
              <span className="font-mono text-sm bg-neo-black text-white px-2 py-1 whitespace-nowrap">
                Communication
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
