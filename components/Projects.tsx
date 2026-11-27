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
      "My first professional project: a website for a transport service company.",
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

const card =
  "rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/25";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section id="projects" className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">My Projects</h2>
        <a
          href="https://github.com/MuhammadTabishAli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-4"
        >
          GitHub Profile ↗
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {featured.map((p) => (
          <div key={p.title} className={card}>
            <p className="text-xs opacity-60">{p.stack}</p>
            <h3 className="mt-1 text-xl font-medium">{p.title}</h3>
            <p className="mt-2 text-sm opacity-80">{p.description}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm underline underline-offset-4"
            >
              Live Demo ↗
            </a>
          </div>
        ))}

        {/* One box for all Streamlit apps */}
        <div className={card}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="streamlit-apps"
            className="flex w-full items-center justify-between text-left"
          >
            <span>
              <span className="block text-xs opacity-60">Python / Streamlit</span>
              <span className="mt-1 block text-xl font-medium">
                Streamlit Apps ({streamlitApps.length})
              </span>
              <span className="mt-2 block text-sm opacity-80">
                Small tools built with Python and Streamlit. Click to see all of them.
              </span>
            </span>
            <span
              className={`ml-4 text-2xl transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              ⌄
            </span>
          </button>

          {open && (
            <ul
              id="streamlit-apps"
              className="mt-5 divide-y divide-white/10 border-t border-white/10"
            >
              {streamlitApps.map((app) => (
                <li key={app.title}>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-3 hover:opacity-80"
                  >
                    <span>
                      <span className="block font-medium">{app.title}</span>
                      <span className="block text-sm opacity-70">{app.description}</span>
                    </span>
                    <span className="shrink-0 text-sm underline underline-offset-4">
                      Live Demo ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
