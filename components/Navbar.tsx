
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#354252] bg-[#182230]/95 px-3 py-3 backdrop-blur sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <h2 className="text-center text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-slate-100 via-sky-300 to-violet-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.25)] transition-all duration-300 hover:drop-shadow-[0_0_18px_rgba(56,189,248,0.75)] sm:text-2xl">
          Muhammad Tabish Ali
        </h2>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#BBC6D3] sm:w-auto sm:gap-6">
          <a href="#home" className="transition-colors duration-300 hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="transition-colors duration-300 hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="transition-colors duration-300 hover:text-blue-400">
            Skills
          </a>
          <a href="/media-experience" className="transition-colors duration-300 hover:text-blue-400">
            Experience
          </a>
          <a href="#projects" className="transition-colors duration-300 hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="transition-colors duration-300 hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}