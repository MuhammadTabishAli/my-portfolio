"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "/media-experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const linkClass =
  "flex min-h-11 items-center rounded-md px-3 text-ink-muted underline decoration-transparent decoration-2 underline-offset-8 transition-colors duration-200 hover:bg-surface-hover hover:text-ink hover:decoration-accent md:px-0 md:hover:bg-transparent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b border-line bg-nav/95 px-5 py-2 backdrop-blur sm:px-6 md:py-4"
    >
      <div className="container-page md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 items-center whitespace-nowrap rounded-md text-base font-semibold tracking-wide text-ink transition-colors duration-200 hover:text-accent-hover min-[375px]:text-lg sm:text-2xl"
          >
            Muhammad Tabish Ali
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex min-h-11 min-w-[4.5rem] shrink-0 items-center justify-center rounded-md border border-line-strong px-3 text-sm font-medium text-ink cursor-pointer transition-colors duration-200 hover:border-accent hover:bg-surface-hover hover:text-accent-hover md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <ul
          id="primary-navigation"
          className={`${
            open ? "mt-2 flex" : "hidden"
          } flex-col border-t border-line pt-2 text-base md:mt-0 md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0 md:text-sm`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
