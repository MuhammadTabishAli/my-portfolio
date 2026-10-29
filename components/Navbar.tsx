
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-[#0b1220]/95 px-6 py-5 backdrop-blur">
      <h2 className="whitespace-nowrap text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-sky-400 to-violet-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.65)] sm:text-xl">
  Muhammad Tabish Ali
</h2>

      <div className="flex gap-6 text-sm text-slate-300">
        <a
  href="#home"
  className="text-slate-300 transition-colors duration-300 hover:text-blue-400"
>
  Home
</a>
        <a
  href="#about"
  className="text-slate-300 transition-colors duration-300 hover:text-blue-400"
>
  About
</a>
        <a
  href="#skills"
  className="text-slate-300 transition-colors duration-300 hover:text-blue-400"
>
  Skills
</a>
        <a
  href="#projects"
  className="text-slate-300 transition-colors duration-300 hover:text-blue-400"
>
  Projects
</a>
        <a
  href="#contact"
  className="text-slate-300 transition-colors duration-300 hover:text-blue-400"
>
  Contact
</a>
      </div>
    </nav>
  );
}
