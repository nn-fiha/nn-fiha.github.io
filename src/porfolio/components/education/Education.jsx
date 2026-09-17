import React from 'react'

const educationItems = [
  {
    period: '2024 - 2025',
    degree: 'Master of Science (Eng.) in Computer Science and Engineering',
    institution: 'Jahangirnagar University, Savar, Dhaka.',
    grade: { label: 'CGPA', value: '3.83/4.00' },
    rank: '5th out of 56 students',
    thesis: 'Multilingual Sentiment Analysis of Social Media Reactions to OpenAI’s Ghibli-Style Image Generation Feature.',
  },
  {
    period: '2019 - 2024',
    degree: 'Bachelor of Science (Eng.) in Computer Science and Engineering',
    institution: 'Jahangirnagar University, Savar, Dhaka.',
    grade: { label: 'CGPA', value: '3.69/4.00' },
    rank: '9th out of 70 students',
    thesis: 'Deep Learning Based Bangladeshi Currency Coin Recognition.',
  },
]

const Education = () => {
  return (
    <section id='education' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center ml-2 md:ml-0 dark:text-white'>Educational Background</h2>
      <span className='block text-xs text-gray-500 dark:text-slate-400 text-center ml-2 md:ml-0 mb-12'>Institutions</span>

      <div className='max-w-5xl mx-auto md:px-8'>
        <div className='relative md:pl-10 md:before:content-[""] md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-0.5 md:before:bg-slate-200 md:dark:before:bg-slate-700'>
          {educationItems.map((item, idx) => (
            <div key={idx} className='relative mb-8 last:mb-0'>
              <span className='hidden md:block absolute -left-[34px] top-6 w-3.5 h-3.5 rounded-full bg-slate-600 dark:bg-slate-400 ring-4 ring-white dark:ring-slate-950 shadow'></span>

              <div className='border-l-4 border-s-slate-600 dark:border-s-slate-400 bg-white dark:bg-slate-900 shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow text-left'>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-3'>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-start gap-2'>
                      <i className='bx bxs-graduation text-xl text-slate-600 dark:text-slate-300 mt-1 shrink-0'></i>
                      <h3 className='font-semibold text-base md:text-lg leading-snug dark:text-white'>{item.degree}</h3>
                    </div>
                    <p className='text-slate-800 dark:text-slate-300 text-sm mt-1 md:ml-7'>{item.institution}</p>
                    <p className='text-sm text-slate-800 dark:text-slate-300 mt-2 md:ml-7'>
                      <span className='font-semibold'>{item.grade.label}:</span> {item.grade.value}
                      {item.rank && (
                        <>
                          <span className='mx-2 text-slate-300 dark:text-slate-600'>|</span>
                          <span className='font-semibold'>Position:</span> {item.rank}
                        </>
                      )}
                    </p>
                    {item.thesis && (
                      <p className='text-sm text-slate-800 dark:text-slate-400 mt-2 md:ml-7 text-justify'>
                        <span className='font-semibold'>Thesis: </span>{item.thesis}
                      </p>
                    )}
                  </div>
                  <span className='inline-flex self-start items-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap'>
                    <i className='bx bx-calendar mr-1'></i>
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
