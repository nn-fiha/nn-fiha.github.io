import React from "react";
import ScholarIcon from "../icons/ScholarIcon";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: "bx bxl-linkedin", href: "https://www.linkedin.com/in/nnfiha/", label: "LinkedIn" },
  { icon: "bx bxl-github", href: "https://github.com/nn-fiha", label: "GitHub" },
  { icon: "bx bxl-instagram", href: "https://www.instagram.com/nn_fiha/", label: "Instagram" },
  { icon: "bx bxl-twitter", href: "https://twitter.com/nn_fiha", label: "Twitter" },
  { svg: true, href: "https://scholar.google.com/citations?hl=en&user=EGe-L9cAAAAJ", label: "Google Scholar" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-bold">Nurun Nahar Fiha</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 max-w-md">
              SQA Engineer & CSE graduate from Jahangirnagar University.
            </p>
            <p className="mt-4 text-xs text-slate-500 inline-flex items-center gap-1.5">
              <i className="bx bx-map text-base"></i>
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col items-center gap-2">
              <a
                href="mailto:nnfiha2000@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors break-all"
              >
                <i className="bx bx-envelope text-base shrink-0"></i>
                nnfiha2000@gmail.com
              </a>
              <a
                href="mailto:fiha.stu2018@juniv.edu"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors break-all"
              >
                <i className="bx bx-envelope text-base shrink-0"></i>
                fiha.stu2018@juniv.edu
              </a>
            </div>

            <div className="flex justify-center gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-md bg-slate-800 text-slate-300 hover:bg-white hover:text-slate-900 transition-colors"
                >
                  {s.svg ? <ScholarIcon /> : <i className={`${s.icon} text-lg`}></i>}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            &copy; {year} Nurun Nahar Fiha. All rights reserved.
          </span>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            Back to top <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
