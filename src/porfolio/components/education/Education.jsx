import React from 'react'

const educationItems = [
  {
    period: '2024 - 2026',
    level: 'M.Sc.',
    degree: 'Master of Science (Eng.) in Computer Science and Engineering',
    institution: 'Jahangirnagar University',
    location: 'Savar, Dhaka',
    cgpa: '3.83',
    scale: '4.00',
    rank: '7th',
    cohort: '44',
  },
  {
    period: '2019 - 2024',
    level: 'B.Sc.',
    degree: 'Bachelor of Science (Eng.) in Computer Science and Engineering',
    institution: 'Jahangirnagar University',
    location: 'Savar, Dhaka',
    cgpa: '3.69',
    scale: '4.00',
    rank: '9th',
    cohort: '59',
  },
]

const Stat = ({ value, unit, label }) => (
  <div className='flex-1 rounded-lg bg-slate-50 dark:bg-ink-raised/60 px-3 py-3 text-center'>
    <p className='text-xl font-bold text-slate-900 dark:text-white leading-none'>
      {value}
      {unit && <span className='text-xs font-medium text-slate-500 dark:text-zinc-400'>{unit}</span>}
    </p>
    <p className='mt-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400'>{label}</p>
  </div>
)

const Education = () => {
  return (
    <section id='education' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Educational Background</h2>
      <span className='block text-xs text-gray-500 dark:text-zinc-400 text-center mb-12'>Institutions</span>

      <div className='max-w-5xl mx-auto md:px-8'>
        <div className='grid gap-6 md:grid-cols-2'>
          {educationItems.map((item, idx) => (
            <div
              key={idx}
              className='flex flex-col rounded-xl border border-slate-200 dark:border-ink-line bg-white dark:bg-ink-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all text-left'
            >
              <div className='flex items-center justify-between gap-3 mb-4'>
                <span className='inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-bold'>
                  {item.level}
                </span>
                <span className='inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-zinc-300 bg-slate-100 dark:bg-ink-raised px-3 py-1 rounded-full whitespace-nowrap'>
                  <i className='bx bx-calendar'></i>
                  {item.period}
                </span>
              </div>

              <h3 className='font-semibold text-base leading-snug text-slate-900 dark:text-white'>{item.degree}</h3>
              <p className='mt-1.5 text-sm text-slate-800 dark:text-zinc-300'>
                {item.institution}
                <span className='text-slate-500 dark:text-zinc-400'> · {item.location}</span>
              </p>

              <div className='flex gap-3 mt-5 pt-5 border-t border-slate-100 dark:border-ink-line'>
                <Stat value={item.cgpa} unit={`/${item.scale}`} label='CGPA' />
                <Stat value={item.rank} unit={` of ${item.cohort}`} label='Class position' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
