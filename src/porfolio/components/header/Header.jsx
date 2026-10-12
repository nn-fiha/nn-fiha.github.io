import React from 'react';
import "./Header.css";
import { useState } from "react";
import useTheme from "../../hooks/useTheme";

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
          <div className="w-20 ml-0 md:w-32 md:ml-16 dark:invert">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
          </div>

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
            <ul
              className={`items-center justify-center md:flex md:space-x-6 md:space-y-0 font-medium text-slate-800 dark:text-slate-200 ${
                navbar ? "grid grid-cols-3 gap-x-14" : "flex flex-row"
              }`}
            >
              <li className=" p-2 list-none md:hidden">
                <a href="#home">
                  <i className="bx bx-home-alt font-semibold text-xl"></i>
                </a>
              </li>


              <li className="p-2 list-none md:hidden">
                <a href="#experience">
                  <i className="bx bxs-briefcase font-semibold text-xl"></i>

                </a>
              </li>
              <li className="p-2 list-none md:hidden">
                <a href="#education">
                <i className="bx bxs-graduation font-semibold text-xl"> </i>
                </a>
              </li>

              <li className="p-2 list-none md:hidden">
                <a href="#research">
                <i className="bx bxs-flask font-semibold text-xl"> </i>
                </a>
              </li>

              <li className="p-2 list-none md:hidden">
                <a href="#skills">

                <i className='bx bx-cog font-semibold text-xl'></i>
                </a>
              </li>
              <li className="p-2 list-none md:hidden">
                <a href="#projects">

                  <i className='bx bx-code-alt font-semibold text-xl'></i>

                </a>
              </li>
              <li className="p-2 list-none md:hidden">
                <a href="#contact">
                 <i className='bx bxs-paper-plane font-semibold text-xl'></i>
                </a>
              </li>

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
    </nav>
  );
}
export default Header;
