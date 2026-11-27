"use client";

import { useState } from "react";

type Project = {
  stack: string;
  title: string;
  description: string;
  url: string;
};

// 1) Top projects, in the order you asked for.
// Stack and description lines are guesses: edit them to match the real projects.
const featured: Project[] = [
  {
    stack: "Next.js / React / TypeScript",
    title: "Baba Transport Service",
    description:
      "My professional project as a web developer: a website for a transport service company.",
    url: "https://www.babatransportservice.com/",
  },
  {
    stack: "Next.js / React / TypeScript",
    title: "News Scripting Assistant",
    description: "A tool that helps write and organize scripts for news content.",
    url: "https://news-scripting-assistant.vercel.app/",
  },
  {
    stack: "Next.js / React / TypeScript",
    title: "Personal Portfolio",
    description:
      "My personal website showcasing my skills, projects, and experience in media, web development, and AI.",
    url: "https://muhammad-tabish.vercel.app/",
  },
];

// 2) All Streamlit projects live inside one box.
const streamlitApps: Project[] = [
  {
    stack: "Python / Streamlit",
    title: "Unit Converter",
    description: "A web app for converting values between different units.",
    url: "https://unit-convertor-tgeexippd3hzxpsmkbsxad.streamlit.app/",
  },
  {
    stack: "Python / Streamlit",
    title: "CSV & Excel Converter",
    description: "A tool for working with and converting CSV and Excel files.",
    url: "https://convertor-csv-or-excel-coazhqr8t4tmzdg4gtutjh.streamlit.app/",
  },
  {
    stack: "Python / Streamlit",
    title: "Password Strength Meter",
    description: "An app that evaluates password strength and provides feedback.",
    url: "https://password-strength-meter-lu4w2xkhwwuwugxom2udtc.streamlit.app/",
  },
  {
    stack: "Python / Streamlit",
    title: "Simple Calculator",
    description: "A simple calculator for performing everyday arithmetic operations.",
    url: "https://simple-calculator-app-kqgspvp9hkrfukgckqfsfv.streamlit.app/",
  },
  {
    stack: "Python / Streamlit",
    title: "To-Do List App",
    description: "A task management app for organizing and tracking daily tasks.",
    url: "https://to-do-app-5lnnbj6icp2nuq6mzgbdal.streamlit.app/",
  },
];

const stackClass =
  "text-xs font-medium uppercase tracking-wider text-ink-muted";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section id="projects" className="page-section">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <h2 className="section-title">My Projects</h2>
        <a
          href="https://github.com/MuhammadTabishAli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex min-h-11 items-center"
        >
          GitHub Profile ↗
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {featured.map((p) => (
          <article key={p.title} className="card px-5 py-4">
            <p className={stackClass}>{p.stack}</p>
            <h3 className="mt-1 text-xl font-semibold text-ink">{p.title}</h3>
            <p className="mt-1 leading-7 text-ink-muted">{p.description}</p>
            {/* -mb-3 keeps the 44px tap target without adding empty space below */}
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link -mb-3 inline-flex min-h-11 items-center"
            >
              Live Demo ↗
            </a>
          </article>
        ))}

        {/* One box for all Streamlit apps */}
        <div className="card">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="streamlit-apps"
            className={`group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-surface-hover focus-visible:-outline-offset-2 ${
              open ? "rounded-t-[11px]" : "rounded-[11px]"
            }`}
          >
            <span>
              <span className={`block ${stackClass}`}>Python / Streamlit</span>
              <span className="mt-1 block text-xl font-semibold text-ink transition-colors group-hover:text-accent-hover">
                Streamlit Apps ({streamlitApps.length})
              </span>
              <span className="mt-1 block leading-7 text-ink-muted">
                Small tools built with Python and Streamlit. Click to see all of them.
              </span>
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`size-6 shrink-0 text-accent transition-transform duration-200 group-hover:text-accent-hover ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              <path d="m5 7.5 5 5 5-5" />
            </svg>
          </button>

          <ul
            id="streamlit-apps"
            hidden={!open}
            className="divide-y divide-line-strong border-t border-line-strong"
          >
            {streamlitApps.map((app) => (
              <li key={app.title} className="group/item">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 px-5 py-3 transition-colors duration-200 group-last/item:rounded-b-[11px] hover:bg-surface-hover focus-visible:-outline-offset-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span>
                    <span className="block font-semibold text-ink transition-colors group-hover:text-accent-hover">
                      {app.title}
                    </span>
                    <span className="block text-sm leading-6 text-ink-muted">
                      {app.description}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors group-hover:text-accent-hover group-hover:decoration-accent-hover">
                    Live Demo ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
