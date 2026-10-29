import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1220] px-6 py-10 text-white sm:py-16">
        {/* Hero: Introduction on left, photo on right */}
        <section
          id="home"
          className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-12 lg:gap-16"
        >
          <div className="text-center md:text-left">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
              MEDIA PROFESSIONAL / AI & TECHNOLOGY
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
  <span className="bg-linear-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
    Journalism & AI.
  </span>
</h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg md:mx-0">
              I am a media professional exploring Artificial Intelligence,
              Python, and Web Development. I enjoy news production,
              learning new technologies, and building useful digital projects.
            </p>

            
<div className="flex flex-wrap justify-center gap-4 md:justify-start">
  <a
    href="#about"
    className="inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/30"
  >
    About Me
  </a>

  <a
    href="#projects"
    className="inline-block rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition duration-300 hover:border-blue-400 hover:bg-slate-800"
  >
    View My Projects
  </a>
</div>

          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-80 w-64 overflow-hidden rounded-2xl border border-slate-700 shadow-xl sm:h-96 sm:w-72">
              <Image
                src="/tabish-profile.jpeg"
                alt="Tabish Ali - Media Professional"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl border-t border-slate-700" />

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-4xl border-t border-slate-800 py-12"
        >
          <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent">
  About Me
</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            I work in media and news production, where storytelling,
            research, and clear communication matter. Alongside my media
            experience, I am developing skills in Python, web development,
            and Artificial Intelligence to explore new ways of creating
            meaningful digital content.
          </p>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-4xl border-t border-slate-800 py-12"
        >
          <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent">
  My Skills
</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Programming
              </h3>
              <p className="text-slate-300">
                Python, TypeScript, HTML and CSS
              </p>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Web Development
              </h3>
              <p className="text-slate-300">
                React, Next.js and Tailwind CSS
              </p>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Artificial Intelligence
              </h3>
              <p className="text-slate-300">
                Prompt Engineering and Agentic AI fundamentals
              </p>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Media Production
              </h3>
              <p className="text-slate-300">
                News Production, Storytelling and Content Development
              </p>
            </div>
          </div>
        </section>

        
        {/* Projects */}
        <section
          id="projects"
          className="mx-auto max-w-4xl border-t border-slate-800 py-12"
        >
          <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent">
  My Projects
</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Personal Portfolio */}
            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Next.js / React / TypeScript
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Personal Portfolio
              </h3>
              <p className="mb-4 leading-7 text-slate-300">
                My personal website showcasing my skills, projects, and
                experience in media, web development, and AI.
              </p>
              <span className="text-sm text-slate-400">
                Current Website
              </span>
            </div>

            {/* Unit Converter */}
            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Unit Converter
              </h3>
              <p className="mb-4 leading-7 text-slate-300">
                A web app for converting values between different units.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/Unit-Convertor"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a className="text-cyan-400 hover:underline"
                   href="https://unit-convertor-tgeexippd3hzxpsmkbsxad.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* CSV and Excel Converter */}
            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                CSV &amp; Excel Converter
              </h3>
              <p className="mb-4 leading-7 text-slate-300">
                A tool for working with and converting CSV and Excel files.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/Convertor-CSV-or-Excel"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a className="text-cyan-400 hover:underline"
                   href="https://convertor-csv-or-excel-coazhqr8t4tmzdg4gtutjh.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* Password Strength Meter */}
            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Password Strength Meter
              </h3>
              <p className="mb-4 leading-7 text-slate-300">
                An app that evaluates password strength and provides feedback.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/Password-Strength-Meter"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a className="text-cyan-400 hover:underline"
                   href="https://password-strength-meter-lu4w2xkhwwuwugxom2udtc.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* Simple Calculator */}
            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Simple Calculator
              </h3>
              <p className="mb-4 leading-7 text-slate-300">
                A simple calculator for performing everyday arithmetic operations.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/simple-calculator-streamlit"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a className="text-cyan-400 hover:underline"
                   href="https://simple-calculator-app-kqgspvp9hkrfukgckqfsfv.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* To-Do App */}
            <div className="rounded-xl border border-slate-700/80 bg-[#111c2e] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                To-Do List App
              </h3>
              <p className="mb-4 leading-7 text-slate-300">
                A task management app for organizing and tracking daily tasks.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/TO-DO-app"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a className="text-cyan-400 hover:underline"
                   href="https://to-do-app-5lnnbj6icp2nuq6mzgbdal.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            
          </div>
        </section>


        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-4xl border-t border-slate-800 py-12"
        >
          <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent">
  Contact Me
</h2>

          <p className="mb-6 max-w-2xl leading-7 text-slate-300">
            Interested in working together or discussing an opportunity?
            Feel free to get in touch.
          </p>

          <a
            href="mailto:ttabish9@gmail.com"
            className="inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>
        </section>
      </main>
    </>
  );
}
