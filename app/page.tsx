import Navbar from "../components/Navbar";
import Image from "next/image";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const portraitSizes =
  "(max-width: 639px) 288px, (max-width: 767px) 320px, (max-width: 1023px) 288px, 384px";

const skills = [
  {
    title: "Programming",
    detail: "Python, TypeScript, HTML and CSS",
  },
  {
    title: "Web Development",
    detail: "React, Next.js and Tailwind CSS",
  },
  {
    title: "Artificial Intelligence",
    detail: "Prompt Engineering, Agentic AI, AI Tools & AI-Assisted Workflows",
  },
  {
    title: "Media Production",
    detail:
      "Television News Production, Live Broadcasts and Newsroom Coordination",
  },
];

const qualifications = [
  {
    title: "Bachelor of Arts (Political Science)",
    institute: "University of Karachi",
    year: "2009",
  },
  {
    title: "Intermediate (Science)",
    institute: "Govt. National College, Karachi",
    year: "2005",
  },
  {
    title: "Matriculation (Science)",
    institute: "Al-Mobeen School, Malir, Karachi",
    year: "2002",
  },
];

const training = [
  {
    title: "Governor House Sindh IT Initiative",
    detail:
      "Python, TypeScript, Web Development, Prompt Engineering and Agentic AI.",
  },
  {
    title: "Mobile Journalism",
    detail: "Short Course — IBA Karachi",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-page px-5 pb-8 text-ink sm:px-6">
        {/* Hero: Introduction on left, photo on right */}
        <section
          id="home"
          className="container-page grid grid-cols-1 items-center gap-10 py-12 sm:py-16 md:grid-cols-[1.25fr_1fr] lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:py-20"
        >
          <div>
            <p className="eyebrow mb-4 leading-5">
              MEDIA PROFESSIONAL / AI & TECHNOLOGY
            </p>

            <h1 className="mb-6 text-[2.5rem] font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-ink">Journalism</span>
              <span className="text-accent"> & AI</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-ink-muted sm:text-lg">
              I am a television news producer with 19 years of experience in newsroom operations, live news production, editorial coordination, and special transmissions. Alongside my media career, I have developed skills in Python, TypeScript, web development, prompt engineering, and Agentic AI, exploring how emerging technologies can support modern journalism and digital media.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#about" className="btn btn-primary">
                About Me
              </a>

              <a href="#projects" className="btn btn-secondary">
                View My Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="group relative size-72 sm:size-80 md:size-72 lg:size-96">
              {/* Circular picture */}
              <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-accent p-1.5 transition-opacity duration-300 group-hover:opacity-0">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/Generated_Image.png"
                    alt="Tabish Ali - Media Professional"
                    fill
                    sizes={portraitSizes}
                    className="object-cover object-center"
                    preload
                  />
                </div>
              </div>

              {/* Full picture on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-1/2 aspect-[1200/1312] -translate-x-1/2 overflow-hidden rounded-2xl border-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <Image
                  src="/Generated_Image.png"
                  alt=""
                  fill
                  sizes={portraitSizes}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="page-section">
          <h2 className="section-title mb-4">About Me</h2>

          <div className="max-w-3xl space-y-4 text-base leading-8 text-ink-muted sm:text-lg">
            <p>
              I am a versatile professional with extensive experience in media,
              communication, and production, complemented by a growing expertise
              in technology and digital innovation. Throughout my career, I have
              developed strong skills in research, problem-solving, creative
              thinking, team coordination, and working effectively in fast-paced
              environments.
            </p>

            <p>
              Driven by continuous learning and professional growth, I have developed skills in Python, TypeScript, Web Development, Prompt Engineering, and Agentic AI. I believe in combining practical experience, creative thinking, and modern technology to solve problems, build meaningful digital solutions, and create value across different industries.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="page-section">
          <h2 className="section-title mb-6">My Skills</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.title} className="card p-5">
                <h3 className="mb-2 font-semibold text-accent">
                  {skill.title}
                </h3>
                <p className="leading-7 text-ink-muted">{skill.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Training */}
        <section id="education" className="page-section">
          <h2 className="section-title mb-6">Education & Training</h2>

          {/* Academic Qualifications */}
          <h3 className="mb-4 text-lg font-semibold text-accent">
            Academic Qualifications
          </h3>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {qualifications.map((item) => (
              <div key={item.title} className="card flex flex-col p-5">
                <h4 className="mb-2 font-semibold text-ink">{item.title}</h4>
                <p className="leading-7 text-ink-muted">{item.institute}</p>
                <p className="mt-auto pt-2 text-sm text-ink-muted">
                  {item.year}
                </p>
              </div>
            ))}
          </div>

          {/* Professional Training */}
          <h3 className="mb-4 text-lg font-semibold text-accent">
            Professional Training
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {training.map((item) => (
              <div key={item.title} className="card p-5">
                <h4 className="mb-2 font-semibold text-ink">{item.title}</h4>
                <p className="leading-7 text-ink-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <Projects />

        {/* Media Experience CTA */}
        <section className="container-page pb-12 sm:pb-14">
          <div className="rounded-xl border border-line-strong bg-surface p-7 text-center sm:p-10">
            <p className="eyebrow mb-3">My Professional Journey</p>

            <h2 className="section-title">Explore My Media Experience</h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-ink-muted">
              Discover my journey in television journalism, news production,
              live broadcasts, and editorial coordination.
            </p>

            <a href="/media-experience" className="btn btn-primary mt-6">
              View Media Experience
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
