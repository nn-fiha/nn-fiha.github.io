import React from 'react'

const experiences = [
  {
    role: 'SQA Engineer',
    company: 'Zelf AI',
    companyUrl: 'https://www.hellozelf.com/',
    location: 'Brooklyn, New York, USA',
    remote: true,
    period: 'Dec 2024 – Present',
    current: true,
    logo: process.env.PUBLIC_URL + '/images/zelflogo-Cv6SuQ3l.png',
    bullets: [
      { label: 'NLP system auditing', text: 'Audit production NLP features, including translation, sentiment analysis, summarization, and AI-generated insights, by tracing errors through Google Cloud logs, database queries, and API testing.' },
      { label: 'Root-cause analysis', text: 'Investigate failures to identify their underlying causes, supporting faster fixes and preventing recurrence.' },
      { label: 'Testing and coverage', text: 'Run functional, regression, smoke, sanity, and user acceptance testing. Build and maintain automated test suites in Playwright and write detailed test cases to improve coverage.' },
      { label: 'Collaboration', text: 'Track and manage defects in Jira and work with developers and stakeholders to keep releases aligned with project goals.' },
    ],
  },
  {
    role: 'Junior SQA Engineer',
    company: 'Dynamic Solution Innovators (DSi)',
    companyUrl: 'https://www.dsinnovators.com/',
    location: 'Mohakhali, Dhaka',
    period: 'April 2024 – Dec 2024',
    logo: 'https://www.openrefactory.com/wp-content/uploads/2020/01/DSI-Logo-1.png',
    project: 'KeyPleaz — a USA-based app connecting Real Estate Agents instantly.',
    bullets: [
      'Conducted functional, regression, sanity, smoke, and user acceptance testing.',
      'Reported and tracked bugs using Microsoft Azure Board.',
      'Developed and managed test cases in Qase.',
      'Assisted PM & BA with writing, reviewing, and providing feedback on user stories, coordinating with developers for project alignment.',
    ],
  },
]

const Experience = () => {
  return (
    <section id='experience' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Work Experience</h2>
      <span className='block text-xs text-gray-500 dark:text-zinc-400 text-center mb-12'>Companies</span>

      <div className='max-w-5xl mx-auto md:px-8'>
        <div className='relative md:pl-10 md:before:content-[""] md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-0.5 md:before:bg-slate-200 md:dark:before:bg-zinc-700'>
          {experiences.map((exp, idx) => (
            <div key={idx} className='relative mb-8 last:mb-0'>
              <span className={`hidden md:block absolute -left-[36px] top-6 w-4 h-4 rounded-full ring-4 ring-white dark:ring-ink-page shadow ${exp.current ? 'bg-blue-600 dark:bg-blue-400' : 'bg-white dark:bg-ink-card border-2 border-slate-300 dark:border-zinc-600'}`}></span>

              <div className={`border-l-4 bg-white dark:bg-ink-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow text-left ${exp.current ? 'border-s-blue-600 dark:border-s-blue-400' : 'border-s-slate-300 dark:border-s-zinc-600'}`}>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4'>
                  <div className='flex items-start gap-4 flex-1 min-w-0'>
                    {exp.logo && (
                      <div className='hidden md:flex shrink-0 w-14 h-14 rounded-md bg-white dark:bg-ink-raised border border-slate-100 dark:border-ink-line items-center justify-center p-2 overflow-hidden'>
                        <img src={exp.logo} alt={exp.company} className='max-w-full max-h-full object-contain' />
                      </div>
                    )}
                    <div className='min-w-0'>
                      <h3 className='text-lg font-semibold dark:text-white leading-snug'>{exp.role}</h3>
                      <p className='text-sm mt-1'>
                        <a href={exp.companyUrl} target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400 hover:underline font-medium'>
                          {exp.company}
                        </a>
                        <span className='text-gray-600 dark:text-zinc-400'> · {exp.location}{exp.remote && ' · Remote'}</span>
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center gap-2 self-start'>
                    {exp.current && (
                      <span className='inline-flex items-center gap-1.5 bg-blue-600 text-white dark:bg-blue-500 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full whitespace-nowrap'>
                        <span className='w-1.5 h-1.5 rounded-full bg-white animate-pulse'></span>
                        Current
                      </span>
                    )}
                    <span className='inline-flex items-center gap-1 bg-slate-100 dark:bg-ink-raised text-slate-700 dark:text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap'>
                      <i className='bx bx-calendar'></i>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className='space-y-2 text-sm text-slate-800 dark:text-zinc-300'>
                  {exp.bullets.map((b, i) => (
                    <li key={i} className='flex gap-2'>
                      <i className='bx bx-check text-base text-slate-500 dark:text-zinc-400 mt-0.5 shrink-0'></i>
                      <span>
                        {b.label ? (
                          <>
                            <strong className='font-semibold text-slate-900 dark:text-white'>{b.label}:</strong> {b.text}
                          </>
                        ) : (
                          b
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {exp.project && (
                  <p className='mt-4 pt-4 border-t border-slate-100 dark:border-ink-line text-sm text-slate-800 dark:text-zinc-400'>
                    <span className='font-semibold text-slate-700 dark:text-zinc-200'>Key Project: </span>
                    {exp.project}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
