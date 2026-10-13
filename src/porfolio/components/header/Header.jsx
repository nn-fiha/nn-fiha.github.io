import React from 'react';
import "./Header.css";
import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import BrainCircuitIcon from "../icons/BrainCircuitIcon";
import GraduationCapIcon from "../icons/GraduationCapIcon";

// Single source of truth for the nav; rendered as a slide-in drawer on mobile.
const navLinks = [
  { href: '#home', label: 'Home', icon: 'bx bx-home-alt' },
  { href: '#experience', label: 'Experience', icon: 'bx bx-briefcase' },
  { href: '#education', label: 'Education', Svg: GraduationCapIcon },
  { href: '#publications', label: 'Publications', icon: 'bx bx-book-content' },
  { href: '#research', label: 'Research', icon: 'bx bx-file-find' },
  { href: '#skills', label: 'Skills', Svg: BrainCircuitIcon },
  { href: '#projects', label: 'Projects', icon: 'bx bx-code-alt' },
  { href: '#contact', label: 'Contact', icon: 'bx bx-envelope' },
];

const Glyph = ({ link }) =>
  link.Svg ? <link.Svg className='w-5 h-5 shrink-0' /> : <i className={`${link.icon} text-xl shrink-0`}></i>;

function MobileDrawer({ open, onClose }) {
  return (
    <div className='md:hidden' aria-hidden={!open}>
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-900/50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* panel: sits just under the bar, sized to its content */}
      <aside
        className={`absolute top-full right-0 z-50 w-60 max-w-[75vw] origin-top-right rounded-bl-2xl bg-slate-50 dark:bg-slate-900 border-l border-b border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300 ease-out ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className='flex flex-col p-2'>
          {navLinks.map((l) => (
            <li key={l.href} className='list-none'>
              <a
                href={l.href}
                onClick={onClose}
                className='flex items-center min-h-[44px] gap-3 px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors'
              >
                <Glyph link={l} />
                <span className='text-sm font-medium'>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function Header() {
  const [navbar, setNavbar] = useState(false);
  const { theme, toggle } = useTheme();

  const ThemeButton = ({ className = "" }) => (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ${className}`}
    >
      <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
    </button>
  );

  return (
    <nav className="w-full bg-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 fixed z-50 left-0 right-0 top-0 transition-colors">
      <section className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="#home" aria-label="Home" className="block w-20 ml-0 md:w-32 md:ml-2 dark:invert">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Nurun Nahar Fiha" />
          </a>

          <div className="md:hidden flex items-center gap-1">
            <ThemeButton />
            <button
              className="p-2 text-gray-700 dark:text-slate-200 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <i className="uil uil-times"></i>
              ) : (
                <i className="bx bx-grid-alt"></i>
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center md:flex md:space-x-2 md:space-y-0 font-medium text-slate-800 dark:text-slate-200">
              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#home">Home</a>
              </li>

              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#experience">Experience</a>
              </li>

              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#education">Education</a>
              </li>

              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#publications">Publications</a>
              </li>

              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#research">Research</a>
              </li>

              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#skills">Skills</a>
              </li>
              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#projects">Projects</a>
              </li>
              <li className="p-2 list-none hidden md:block hover:text-slate-900 dark:hover:text-white">
                <a href="#contact">Contact</a>
              </li>
              <li className="p-2 list-none hidden md:block">
                <ThemeButton />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <MobileDrawer open={navbar} onClose={() => setNavbar(false)} />
    </nav>
  );
}
export default Header;
