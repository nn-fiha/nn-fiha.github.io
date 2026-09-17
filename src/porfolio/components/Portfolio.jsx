
import React from 'react';
import Body from "./body/Body";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Publications from "./publications/Publications";
import Research from "./research/Research";

function Portfolio() {
    return (
      <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 min-h-screen transition-colors">
       <Header/>
       <Body/>
       <Experience/>
       <Education/>
       <Research/>
       <Publications/>
       <Skills />
       <Projects/>
       <Contact />
       <Footer/>
      </div>
    );
  }
  
  export default Portfolio;