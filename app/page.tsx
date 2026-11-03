import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#182230] px-6 py-10 text-white sm:py-16">
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

            <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-[#BBC6D3] sm:text-lg md:mx-0">
              I am an experienced media professional with a strong background in television news production and a solid foundation in Python, TypeScript, Web Development, Prompt Engineering, and Agentic AI. I combine years of newsroom experience with technology skills to explore innovative solutions, build digital projects, and connect media with emerging technologies.
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
  <div className="relative h-72 w-72 rounded-full bg-linear-to-br from-cyan-400 via-sky-500 to-violet-500 p-1 shadow-[0_0_35px_rgba(56,189,248,0.25)] transition duration-500 hover:scale-105 hover:shadow-[0_0_45px_rgba(56,189,248,0.4)] sm:h-80 sm:w-80 md:h-96 md:w-96">
    <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#182230]">
      
<div className="flex justify-center md:justify-end">
  <div className="group relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
    {/* Circular picture */}
    <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-opacity duration-300 group-hover:opacity-0">
      <Image
        src="/Generated_Image.png"
        alt="Tabish Ali - Media Professional"
        fill
        sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
        className="object-cover object-center"
        priority
      />
    </div>

    
{/* Full picture on hover */}
<div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-2 border-cyan-400/80 bg-white/5 p-1 opacity-0 shadow-[0_0_30px_rgba(56,189,248,0.3)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
  <Image
    src="/Generated_Image.png"
    alt="Full portrait of Tabish Ali"
    fill
    sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
    className="rounded-xl object-contain"
  />
</div>

  </div>
</div>

    </div>
  </div>
</div>

        </section>

        <div className="mx-auto max-w-5xl border-t border-slate-700" />

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-4xl border-t border-[#354252] py-12"
        >
          <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(139,197,216,0.65)]">
  About Me
</h2>
          <div className="max-w-3xl text-lg leading-8 text-[#BBC6D3]">
  <p>
    I am a versatile professional with extensive experience in media,
    communication, and production, complemented by a growing expertise
    in technology and digital innovation. Throughout my career, I have
    developed strong skills in research, problem-solving, creative thinking,
    team coordination, and working effectively in fast-paced environments.
  </p>

  <p>
    Driven by continuous learning and professional growth, I have developed skills in Python, TypeScript, Web Development, Prompt Engineering, and Agentic AI. I believe in combining practical experience, creative thinking, and modern technology to solve problems, build meaningful digital solutions, and create value across different industries.
  </p>
</div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-4xl border-t border-[#354252] py-12"
        >
          <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(139,197,216,0.65)]">
  My Skills
</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Programming
              </h3>
              <p className="text-[#BBC6D3]">
                Python, TypeScript, HTML and CSS
              </p>
            </div>

            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Web Development
              </h3>
              <p className="text-[#BBC6D3]">
                React, Next.js and Tailwind CSS
              </p>
            </div>

            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Artificial Intelligence
              </h3>
              <p className="text-[#BBC6D3]">
                Prompt Engineering, Agentic AI, AI Tools & AI-Assisted Workflows
              </p>
            </div>

            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h3 className="mb-2 font-semibold text-cyan-400">
                Media Production
              </h3>
              <p className="text-[#BBC6D3]">
                Television News Production, Live Broadcasts and Newsroom Coordination
              </p>
            </div>
          </div>
        </section>
              {/* Education & Training */}
        <section
          id="education"
          className="mx-auto max-w-4xl border-t border-[#354252] py-12"
        >
          <h2 className="mb-6 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(139,197,216,0.65)]">
            Education & Training
          </h2>

          {/* Academic Qualifications */}
          <h3 className="mb-4 text-lg font-semibold text-cyan-400">
            Academic Qualifications
          </h3>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h4 className="mb-2 font-semibold text-white">
                Bachelor of Arts (Political Science)
              </h4>
              <p className="text-[#BBC6D3]">University of Karachi</p>
              <p className="mt-2 text-sm text-slate-400">2009</p>
            </div>

            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h4 className="mb-2 font-semibold text-white">
                Intermediate (Science)
              </h4>
              <p className="text-[#BBC6D3]">Govt. National College, Karachi</p>
              <p className="mt-2 text-sm text-slate-400">2005</p>
            </div>

            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h4 className="mb-2 font-semibold text-white">
                Matriculation (Science)
              </h4>
              <p className="text-[#BBC6D3]">
                Al-Mobeen School, Malir, Karachi
              </p>
              <p className="mt-2 text-sm text-slate-400">2002</p>
            </div>
          </div>

          {/* Professional Training */}
          <h3 className="mb-4 text-lg font-semibold text-cyan-400">
            Professional Training
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h4 className="mb-2 font-semibold text-white">
                Governor House Sindh IT Initiative
              </h4>
              <p className="leading-7 text-[#BBC6D3]">
                Python, TypeScript, Web Development, Prompt Engineering and Agentic AI.
              </p>
            </div>

            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <h4 className="mb-2 font-semibold text-white">
                Mobile Journalism
              </h4>
              <p className="text-[#BBC6D3]">
                Short Course — IBA Karachi
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects */}
        <section
          id="projects"
          className="mx-auto max-w-4xl border-t border-[#354252] py-12"
        >
          <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(139,197,216,0.65)]">
  My Projects
</h2>

<div className="mb-5 flex justify-end">
  <a
    href="https://github.com/MuhammadTabishAli"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-slate-600 bg-slate-800/70 px-4 py-2 text-xs font-semibold text-slate-200 shadow-md shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-linear-to-r hover:from-cyan-500/20 hover:to-violet-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
  >
    GitHub Profile ↗
  </a>
</div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            
{/* Personal Portfolio */}
<div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
    Next.js / React / TypeScript
  </p>

  <h3 className="mb-3 text-lg font-semibold text-cyan-400">
    Personal Portfolio
  </h3>

  <p className="mb-4 leading-7 text-[#BBC6D3]">
    My personal website showcasing my skills, projects, and
    experience in media, web development, and AI.
  </p>

  
<div className="flex flex-wrap gap-4 text-sm">
  {/* <a
    className="text-cyan-400 hover:underline"
    href="https://github.com/MuhammadTabishAli/my-portfolio"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub ↗
  </a> */}

  <a
    className="text-cyan-400 hover:underline"
    href="https://my-portfolio-pi-three-azvpma3f03.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Live Demo ↗
  </a>
</div>

</div>


            {/* Unit Converter */}
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Unit Converter
              </h3>
              <p className="mb-4 leading-7 text-[#BBC6D3]">
                A web app for converting values between different units.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {/* <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/Unit-Convertor"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a> */}
                <a className="text-cyan-400 hover:underline"
                   href="https://unit-convertor-tgeexippd3hzxpsmkbsxad.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* CSV and Excel Converter */}
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                CSV &amp; Excel Converter
              </h3>
              <p className="mb-4 leading-7 text-[#BBC6D3]">
                A tool for working with and converting CSV and Excel files.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {/* <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/Convertor-CSV-or-Excel"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a> */}
                <a className="text-cyan-400 hover:underline"
                   href="https://convertor-csv-or-excel-coazhqr8t4tmzdg4gtutjh.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* Password Strength Meter */}
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Password Strength Meter
              </h3>
              <p className="mb-4 leading-7 text-[#BBC6D3]">
                An app that evaluates password strength and provides feedback.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {/* <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/Password-Strength-Meter"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a> */}
                <a className="text-cyan-400 hover:underline"
                   href="https://password-strength-meter-lu4w2xkhwwuwugxom2udtc.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* Simple Calculator */}
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Simple Calculator
              </h3>
              <p className="mb-4 leading-7 text-[#BBC6D3]">
                A simple calculator for performing everyday arithmetic operations.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {/* <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/simple-calculator-streamlit"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a> */}
                <a className="text-cyan-400 hover:underline"
                   href="https://simple-calculator-app-kqgspvp9hkrfukgckqfsfv.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            {/* To-Do App */}
            <div className="rounded-xl border border-[#3B4C60] bg-[#243344] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                Python / Streamlit
              </p>
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                To-Do List App
              </h3>
              <p className="mb-4 leading-7 text-[#BBC6D3]">
                A task management app for organizing and tracking daily tasks.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {/* <a className="text-cyan-400 hover:underline"
                   href="https://github.com/MuhammadTabishAli/TO-DO-app"
                   target="_blank" rel="noopener noreferrer">GitHub ↗</a> */}
                <a className="text-cyan-400 hover:underline"
                   href="https://to-do-app-5lnnbj6icp2nuq6mzgbdal.streamlit.app/"
                   target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              </div>
            </div>

            
          </div>
        </section>

{/* Media Experience CTA */}
<section className="px-4 py-12 sm:py-16">
  <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-[#243344] via-[#12253b] to-[#243344] p-7 text-center shadow-lg shadow-cyan-500/10 sm:p-10">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
      My Professional Journey
    </p>

    <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
      Explore My Media Experience
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#BBC6D3] sm:text-base">
      Discover my journey in television journalism, news production,
      live broadcasts, and editorial coordination.
    </p>

    <a
      href="/media-experience"
      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-400 px-6 py-3 text-sm font-bold text-[#182230] shadow-[0_0_20px_rgba(34,211,238,0.2)] transition duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
    >
      View Media Experience
      <span aria-hidden="true">↗</span>
    </a>
  </div>
</section>


        
{/* Contact */}
<section
  id="contact"
  className="mx-auto max-w-4xl border-t border-[#354252] py-12"
>
  <h2 className="mb-4 text-2xl font-bold bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(139,197,216,0.65)]">
    Contact Me
  </h2>

  <p className="mb-6 max-w-2xl leading-7 text-[#BBC6D3]">
    Interested in working together or discussing an opportunity?
    Feel free to get in touch.
  </p>

  <div className="flex flex-wrap gap-4">
    {/* Email */}
    <a
      href="mailto:ttabish9@gmail.com"
      className="inline-block rounded-lg border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-400/20"
    >
      Email Me
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/muhammad-tabish-ali-3864652b8/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-lg border border-[#8BC5D8] bg-[#243344] px-6 py-3 font-semibold text-[#E5EAF1] transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:text-white hover:shadow-lg hover:shadow-sky-400/20"
    >
      LinkedIn Profile
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/923213203026"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-lg border border-emerald-400/60 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-300 transition-all duration-300 hover:bg-emerald-400 hover:text-slate-950 hover:shadow-lg hover:shadow-emerald-400/20"
    >
      WhatsApp Me
    </a>
  </div>
</section>

      </main>
    </>
  );
}
