import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
  company: "Geo News",
  logo: "/media-experience/Geo News logo.png",
  role: "Producer",
    duration: "October 2017 – Present",
    current: true,
    responsibilities: [
      "Produce and manage daily news broadcasts, coordinating reporters, editors, and technical teams to deliver accurate content on time.",
      "Develop compelling story angles, coordinate breaking-news coverage, and maintain editorial accuracy under tight deadlines.",
      "Collaborate with editorial and production teams to improve broadcast quality, storytelling, and audience engagement.",
    ],
  },
  {
  company: "SAMAA News",
  logo: "/media-experience/SAMAA News logo.png",
  role: "News Producer",
    duration: "May 2016 – June 2017",
    responsibilities: [
      "Planned, scripted, and produced live news segments, with a focus on prime-time bulletins.",
      "Managed PCR operations during assigned bulletins, coordinating the control room and ensuring smooth on-air execution.",
      "Led editorial meetings, set story priorities, and assigned tasks while maintaining professional journalistic standards.",
      "Managed story selection, timing, and presentation according to editorial requirements.",
      "Coordinated on-location shoots, live coverage, and virtual-scene stories with the relevant production teams.",
    ],
  },
  {
  company: "Geo News",
  logo: "/media-experience/Geo News logo.png",
  role: "Senior Associate Producer",
    duration: "October 2013 – April 2016",
    responsibilities: [
      "Produced and formatted news bulletins by evaluating and coordinating news material from multiple sources.",
      "Supervised control-room operations during broadcasts, including changes to running order and presentation format.",
      "Coordinated with anchors, producers, and directors to meet bulletin production requirements.",
      "Selected and coordinated pre-production elements, including graphics and other visual components.",
    ],
  },
  {
  company: "AAJ News",
  logo: "/media-experience/AAJ News logo.png",
  role: "Panel Producer",
    duration: "September 2007 – September 2013",
    responsibilities: [
      "Produced live news bulletins and managed programme rundowns.",
      "Arranged relevant footage and coordinated real-time graphics playback.",
      "Coordinated panel and control-room operations to support accurate, timely broadcasts.",
    ],
  },
];

const specialCoverage = [
  {
    title: "General Elections 2013",
    detail: "Led production-side coordination for the election transmission.",
  },
  {
    title: "US Elections 2012",
    detail: "Contributed to special election transmission coverage.",
  },
  {
    title: "Budget 2012–13",
    detail: "Worked on special budget transmission production.",
  },
  {
    title: "Senate Elections 2012",
    detail: "Supported election coverage and broadcast production.",
  },
  {
    title: "General Elections 2008 & 2013",
    detail: "Worked with results and online graphics coverage.",
  },
];

const skills = [
  "News Production Management",
  "Live Bulletin Production",
  "PCR & Control Room Coordination",
  "Editorial Planning",
  "Breaking News Coverage",
  "Story Development & Scripting",
  "Team Leadership",
  "News Rundown Management",
  "Graphics & Visual Coordination",
  "Election Transmission Production",
  "Journalism Ethics & Accuracy",
  "Broadcast Operations",
];

const tools = [
  "ENPS",
  "GNMS",
  "Vidi DV",
  "On The Air",
  "Viz Content Pilot",
  "WASP",
];

export default function MediaExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-4 py-10 text-slate-200 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#skills"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/10"
        >
          <span aria-hidden="true">←</span>
          Back to Portfolio
        </Link>

        <header className="relative mt-10 overflow-hidden rounded-3xl border border-slate-700/70 bg-linear-to-br from-[#13243b] via-[#101c30] to-[#0b1220] p-6 sm:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
              Career Journey
            </p>

            <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
              Media Experience
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              A professional journey in television journalism, editorial
              planning, live news production, and broadcast operations.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-700 bg-[#0b1220]/60 p-4">
                <p className="text-2xl font-extrabold text-cyan-300">2007</p>
                <p className="mt-1 text-xs text-slate-400">
                  Career began
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-[#0b1220]/60 p-4">
                <p className="text-2xl font-extrabold text-cyan-300">4</p>
                <p className="mt-1 text-xs text-slate-400">
                  Professional roles
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-[#0b1220]/60 p-4">
                <p className="text-2xl font-extrabold text-cyan-300">
                  Live TV
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Production experience
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-12">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Professional Background
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Career Experience
            </h2>
          </div>

          <div className="space-y-5">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="group rounded-2xl border border-slate-700/80 bg-[#111c2e] p-5 transition duration-300 hover:border-cyan-400/60 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="mb-4 flex h-16 w-28 items-center justify-center rounded-xl border border-slate-700 bg-white p-2">
  <Image
    src={experience.logo}
    alt={`${experience.company} logo`}
    width={112}
    height={64}
    className="max-h-12 w-auto object-contain"
  />
</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {experience.role}
                      </h3>

                      {experience.current && (
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                          Current Role
                        </span>
                      )}
                    </div>

                    <p className="mt-2 font-semibold text-cyan-300">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit shrink-0 rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 text-xs text-slate-300 sm:text-sm">
                    {experience.duration}
                  </span>
                </div>

                <div className="my-5 border-t border-slate-700/70" />

                <h4 className="mb-4 text-sm font-semibold text-slate-200">
                  Key Responsibilities
                </h4>

                <ul className="space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-slate-400 sm:text-base"
                    >
                      <span className="mt-1 text-cyan-400">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Major Broadcast Assignments
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Special Coverage & Events
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Selected election and national-event transmissions during my
              time at AAJ News.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {specialCoverage.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl border border-slate-700/80 bg-[#111c2e] p-5 transition hover:border-cyan-400/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-300">
                  ✦
                </div>
                <h3 className="font-bold text-white">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {event.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Areas of Expertise
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Core Competencies
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-[#111c2e] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Broadcast Technology
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Software & Tools
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-slate-700/80 bg-[#111c2e] px-4 py-4 text-center text-sm font-medium text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-cyan-400/20 bg-linear-to-r from-cyan-400/10 to-blue-500/5 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
            Professional Focus
          </p>
          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
            Journalism, Editorial Judgment & Live Production
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Focused on accurate news presentation, effective newsroom
            coordination, clear storytelling, and the smooth delivery of
            live television broadcasts.
          </p>
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p className="font-semibold text-slate-300">
            Muhammad Tabish Ali
          </p>
          <p className="mt-1">Media Professional · News Production · AI Skills</p>

          <Link
            href="/#home"
            className="mt-4 inline-block text-cyan-400 transition hover:text-cyan-300"
          >
            Return to Home ↑
          </Link>
        </footer>
      </div>
    </main>
  );
}
