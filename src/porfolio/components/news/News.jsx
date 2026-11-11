import React from 'react'

const news = [
  {
    date: 'Jan 2026',
    text: 'Awarded the National Science and Technology (NST) Fellowship for MSc research.',
  },
  {
    date: 'Jan 2026',
    text: 'Completed my MSc in Computer Science and Engineering at Jahangirnagar University, ranked 7th of 44.',
  },
  {
    date: 'Jan 2025',
    text: 'Presented Deep Learning Based Bangladeshi Currency Coin Recognition at ICREST 2025, published in IEEE Xplore.',
    link: { label: 'DOI', href: 'https://doi.org/10.1109/ICREST63960.2025.10914454' },
  },
  {
    date: 'Dec 2024',
    text: 'Joined Zelf AI as a Software Quality Assurance Engineer.',
  },
  {
    date: 'Oct 2024',
    text: '2nd Runner-up at Zelf Hackathon 2.0.',
  },
  {
    date: 'Jul 2024',
    text: 'Completed my BSc in Computer Science and Engineering at Jahangirnagar University, ranked 9th of 59.',
  },
  {
    date: 'Apr 2024',
    text: 'Joined Dynamic Solution Innovators as a Junior SQA Engineer.',
  },
  {
    date: 'Oct 2023',
    text: 'Passed the ITEE Fundamental Information Technology Engineer (FE) examination as a Full Passer, ranked 35th nationally. The ITEE is governed by IPA, Japan.',
  },
]

const News = () => {
  return (
    <section id='news' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>News</h2>
      <span className='block text-xs text-gray-500 dark:text-zinc-400 text-center mb-12'>Recent updates</span>

      <div className='max-w-3xl mx-auto'>
        <ul className='border-l border-slate-200 dark:border-ink-line'>
          {news.map((item, idx) => (
            <li key={idx} className='relative list-none pl-6 pb-6 last:pb-0 text-left'>
              <span className='absolute -left-[4.5px] top-2 w-2 h-2 rounded-full bg-slate-300 dark:bg-zinc-600' />
              {/* stacks on phones; this project sets the sm breakpoint to 350px, so switch at md */}
              <div className='md:flex md:gap-5'>
                <span className='block shrink-0 md:w-24 pt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-zinc-400'>
                  {item.date}
                </span>
                <p className='mt-1 md:mt-0 text-sm text-slate-800 dark:text-zinc-300 leading-relaxed'>
                  {item.text}
                  {item.link && (
                    <> <a href={item.link.href} target='_blank' rel='noopener noreferrer'
                          className='text-blue-600 dark:text-blue-400 hover:underline font-medium'>{item.link.label}</a></>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default News
