
import React from 'react';
import './Body.css';
import CV from './Resume.pdf'
import ScholarIcon from '../icons/ScholarIcon'

const linkClass = 'text-blue-600 dark:text-blue-400 hover:underline font-medium';

function Data({ name }) {
    return (
        <div className='-ml-24 md:ml-[1%]'>
            <h1 className='text-left mb-2 text-3xl font-bold dark:text-white'>{name}</h1>
            <div className='flex flex-wrap items-center gap-3 mb-6 text-slate-600 dark:text-slate-400'>
                <span className='inline-block w-10 h-px bg-slate-400 dark:bg-slate-500'></span>
                <span className='text-sm font-medium tracking-wide uppercase'>SQA Engineer</span>
                <span className='hidden md:inline text-slate-300 dark:text-slate-600'>&middot;</span>
                <span className='text-sm font-medium tracking-wide uppercase'>Prospective PhD Student</span>
            </div>
            <p className='text-justify mb-8 max-w-[375px] md:max-w-[680px] text-sm text-slate-800 dark:text-slate-200'>
                I am a Software Quality Assurance Engineer at <a href='https://www.hellozelf.com/' target='_blank' rel='noopener noreferrer' className={linkClass}>Zelf AI</a>, where I contribute to enhancing software quality and ensuring the delivery of efficient and reliable systems. Being detail-oriented and a good communicator, I enjoy solving problems alongside developers, analysts, and stakeholders.
                <br /><br />
                I completed my MSc in Computer Science and Engineering at Jahangirnagar University, where my thesis, <i>Multilingual Sentiment Analysis of Social Media Reactions to OpenAI&rsquo;s Ghibli-Style Image Generation Feature</i>, studied how audiences across different languages responded to a widely discussed generative AI release. It was conducted under the supervision of <a href='https://juniv.edu/teachers/israt' target='_blank' rel='noopener noreferrer' className={linkClass}>Professor Dr. Israt Jahan</a>. Earlier, my undergraduate thesis, <i>Deep Learning Based Bangladeshi Currency Coin Recognition</i>, built to help visually impaired users identify currency, was published at ICREST&rsquo;25. It was conducted under the supervision of <a href='https://scholar.google.com/citations?user=vuqUDk0AAAAJ' target='_blank' rel='noopener noreferrer' className={linkClass}>Professor Md. Golam Moazzam</a>.
                <br /><br />
                <span className='block border-l-4 border-blue-500 dark:border-blue-400 pl-4 my-1 text-slate-800 dark:text-slate-200'>I am a <strong className='font-semibold'>prospective graduate student</strong> and my research interests include <strong className='font-semibold'>Natural Language Processing (NLP)</strong>, <strong className='font-semibold'>Machine Learning (ML)</strong>, <strong className='font-semibold'>Artificial Intelligence (AI)</strong>, and <strong className='font-semibold'>Human-Computer Interaction (HCI)</strong>. Within NLP, I am drawn to low-resource and multilingual settings, the reliability and evaluation of language models, and how people interact with and rely on these systems.</span>
            </p>

            <div className='flex flex-wrap gap-3'>
                <a download="" href={CV}>
                    <button className='inline-flex items-center gap-2 text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded-md hover:bg-slate-600'>
                        Resume <i className="uil uil-file-download-alt text-xl"></i>
                    </button>
                </a>
                <a href="#contact">
                    <button className='inline-flex items-center gap-2 border-2 border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-200 hover:bg-slate-700 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 px-4 py-2 text-sm font-medium transition-all rounded-md'>
                        <i className='bx bxs-paper-plane text-base'></i>
                        Get in Touch
                    </button>
                </a>
            </div>
        </div>
    );
}


function Social() {
    return (
        <div className='flex flex-col gap-4 md:gap-8 mt-10 md:mt-0 ml-[8%] md:ml-[13%]'>
            <a href="https://twitter.com/nn_fiha" className='icon'><i className="uil uil-twitter"></i></a>
            <a href="https://www.linkedin.com/in/nnfiha/" className='icon'><i className="uil uil-linkedin-alt"></i></a>
            <a href="https://github.com/nn-fiha" className='icon'><i className="uil uil-github-alt"></i></a>
            <a href="https://scholar.google.com/citations?hl=en&user=EGe-L9cAAAAJ" target="_blank" rel="noopener noreferrer" className='icon' aria-label="Google Scholar"><ScholarIcon className="w-5 h-5" /></a>
        </div>
    );
}

function Body() {
    return (
        <div id='home' className='mb-10 md:mb-20'>
            <div className='flex text-left md:items-center mt-28 md:mt-40 gap-8 md:gap-6 p-8'>
                <Social />
                <div className='flex flex-col-reverse md:p-8 md:flex-row md:items-center text-left gap-10'>
                    <Data name="Nurun Nahar Fiha" />
                    <div className='img-container'></div>
                </div>
            </div>
        </div>
    );
}




export default Body;
