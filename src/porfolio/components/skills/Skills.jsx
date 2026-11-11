import React from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: 'bx bx-code-alt',
    skills: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'ML / AI',
    icon: 'bx bx-brain',
    skills: ['PyTorch', 'scikit-learn', 'OpenCV', 'NLTK', 'Hugging Face Transformers', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Web Development',
    icon: 'bx bx-globe',
    skills: ['React', 'Django', 'Node.js', 'REST APIs', 'HTML5', 'CSS3', 'Bootstrap 5', 'Tailwind CSS'],
  },
  {
    title: 'Testing & Automation',
    icon: 'bx bx-test-tube',
    skills: ['Playwright', 'Cypress', 'Postman', 'Qase'],
  },
  {
    title: 'Databases',
    icon: 'bx bx-data',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'bx bx-wrench',
    skills: ['Git & GitHub', 'Linux', 'LaTeX', 'VS Code', 'Azure Boards', 'Jira', 'Trello', 'Slack'],
  },
]

const Skills = () => {
  return (
    <section id='skills' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Skills &amp; Technologies</h2>
      <span className='block text-xs text-gray-500 dark:text-zinc-400 text-center mb-12'>My Technical Level</span>

      <div className='max-w-5xl mx-auto grid gap-5 md:grid-cols-2'>
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className='rounded-xl border border-slate-200 dark:border-ink-line bg-white dark:bg-ink-card p-5 shadow-sm hover:shadow-lg transition-shadow text-left'
          >
            <div className='flex items-center gap-2.5 mb-4'>
              <span className='inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900'>
                <i className={`${cat.icon} text-lg`}></i>
              </span>
              <h3 className='font-semibold text-base text-slate-900 dark:text-white'>{cat.title}</h3>
              <span className='ml-auto text-xs text-slate-400 dark:text-zinc-500'>{cat.skills.length}</span>
            </div>

            <div className='flex flex-wrap gap-2'>
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className='text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 dark:bg-ink-raised dark:text-zinc-300'
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
