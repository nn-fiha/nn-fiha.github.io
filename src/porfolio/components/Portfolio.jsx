
import React from 'react';
import Body from "./body/Body";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Research from "./research/Research";
import Publications from "./publications/Publications";
import News from "./news/News";

function Portfolio() {
    return (
      <div className="bg-white dark:bg-ink-page text-slate-800 dark:text-zinc-200 min-h-screen transition-colors">
       <Header/>
       <Body/>
       <News/>
       <Experience/>
       <Education/>
       <Publications/>
       <Research/>
       <Skills />
       <Projects/>
       <Contact />
       <Footer/>
      </div>
    );
  }
  
  export default Portfolio;