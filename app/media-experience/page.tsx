import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";

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

const highlights = [
  { value: "2007", label: "Career began" },
  { value: "4", label: "Professional roles" },
  { value: "Live TV", label: "Production experience" },
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <>
      <p className="eyebrow">{label}</p>
      <h2 className="section-title mt-2">{title}</h2>
    </>
  );
}

export default function MediaExperiencePage() {
  return (
    <main className="min-h-screen bg-page px-5 py-8 text-ink sm:px-6 sm:py-12">
      <div className="container-page">
        <Link href="/" className="btn btn-secondary">
          <span aria-hidden="true">←</span>
          Back to Portfolio
        </Link>

        <header className="mt-8 rounded-xl border border-line-strong bg-surface p-6 sm:p-10">
          <p className="eyebrow mb-3">Career Journey</p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Media Experience
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">
            A professional journey in television journalism, editorial
            planning, live news production, and broadcast operations.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-line-strong bg-nav p-4"
              >
                <p className="text-2xl font-bold text-accent">{item.value}</p>
                <p className="mt-1 text-sm text-ink-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="py-12 sm:py-14">
          <div className="mb-6">
            <SectionHeading
              label="Professional Background"
              title="Career Experience"
            />
          </div>

          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="card p-5 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={112}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-xl font-bold text-ink">
                        {experience.role}
                      </h3>

                      {experience.current && (
                        <span className="rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-hover">
                          Current Role
                        </span>
                      )}
                    </div>

                    <p className="mt-1 font-semibold text-accent">
                      {experience.company}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm text-ink-muted sm:self-start sm:text-right">
                    {experience.duration}
                  </p>
                </div>

                <div className="my-5 border-t border-line-strong" />

                <h4 className="mb-3 text-sm font-semibold text-ink">
                  Key Responsibilities
                </h4>

                <ul className="space-y-2">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-ink-muted transition-colors duration-200 hover:text-ink sm:text-base"
                    >
                      <span aria-hidden="true" className="text-accent">
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="mb-6">
            <SectionHeading
              label="Major Broadcast Assignments"
              title="Special Coverage & Events"
            />
            <p className="mt-3 max-w-2xl leading-7 text-ink-muted">
              Selected election and national-event transmissions during my
              time at AAJ News.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {specialCoverage.map((event) => (
              <article
                key={event.title}
                className="card p-5 sm:last:odd:col-span-2"
              >
                <h3 className="font-semibold text-ink">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">
                  {event.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="mb-6">
            <SectionHeading
              label="Areas of Expertise"
              title="Core Competencies"
            />
          </div>

          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="card px-4 py-2 text-sm text-ink-muted hover:text-ink"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="page-section">
          <div className="mb-6">
            <SectionHeading
              label="Broadcast Technology"
              title="Software & Tools"
            />
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="card p-4 text-center text-sm font-medium text-ink-muted hover:text-ink"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>

{/*
        <section className="mt-14 rounded-2xl border border-cyan-400/20 bg-linear-to-r from-cyan-400/10 to-blue-500/5 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
            Professional Focus
          </p>
          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
            Journalism, Editorial Judgment & Live Production
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#BBC6D3] sm:text-base">
            Focused on accurate news presentation, effective newsroom
            coordination, clear storytelling, and the smooth delivery of
            live television broadcasts.
          </p>
        </section> */}

        <Contact />

        <footer className="border-t border-line pt-6 text-sm text-ink-muted">
          <p className="font-semibold text-ink">Muhammad Tabish Ali</p>
          <p className="mt-1">Media Professional · News Production · AI Skills</p>

          <Link
            href="/#home"
            className="text-link mt-2 inline-flex min-h-11 items-center"
          >
            Return to Home ↑
          </Link>
        </footer>
      </div>
    </main>
  );
}
