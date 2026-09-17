import React from 'react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: 'bx bx-code-alt',
    skills: [
      { name: 'HTML5', img: 'html5.png', level: 'Advanced' },
      { name: 'CSS3', img: 'css.png', level: 'Advanced' },
      { name: 'JavaScript', img: 'js.png', level: 'Intermediate' },
      { name: 'React JS', img: 'react.png', level: 'Intermediate' },
      { name: 'Tailwind', img: 'tailwind.png', level: 'Advanced' },
      { name: 'Bootstrap5', img: 'bootstrap.png', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & Languages',
    icon: 'bx bx-server',
    skills: [
      { name: 'Node JS', img: 'nodejs.png', level: 'Intermediate' },
      { name: 'Django', img: 'django.png', level: 'Intermediate' },
      { name: 'Python', img: 'python.png', level: 'Intermediate' },
      { name: 'REST API', img: 'restapi.png', level: 'Intermediate' },
      { name: 'MySQL', img: 'mysql.png', level: 'Intermediate' },
      { name: 'MongoDB', img: 'mongo.png', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools',
    icon: 'bx bx-wrench',
    fullWidth: true,
    skills: [
      { name: 'Git & GitHub', img: 'github.png', level: 'Intermediate' },
      { name: 'Postman', img: 'postman.png', level: 'Intermediate' },
      { name: 'Cypress', img: 'Cypress.png', level: 'Intermediate' },
      { name: 'Jira', img: 'jira.png', level: 'Intermediate' },
      { name: 'VS Code', img: 'vscode.png', level: 'Intermediate' },
      { name: 'Azure DevOps', img: 'azure.png', level: 'Basic' },
      { name: 'Trello', img: 'trello.png', level: 'Intermediate' },
      { name: 'Slack', img: 'slack.png', level: 'Intermediate' },
    ],
  },
]

const levelToFilled = { Advanced: 3, Intermediate: 2, Basic: 1 }

const LevelDots = ({ level }) => {
  const filled = levelToFilled[level] ?? 0
  return (
    <div className='flex gap-1 mt-1.5' title={level} aria-label={`Proficiency: ${level}`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i < filled ? 'bg-slate-600 dark:bg-slate-300' : 'bg-slate-300 dark:bg-slate-700'}`}
        />
      ))}
    </div>
  )
}

const Skills = () => {
  return (
    <section id='skills' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Skills</h2>
      <span className='block text-xs text-gray-500 dark:text-slate-400 text-center mb-12'>My Technical Level</span>

      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className={`border-l-4 border-s-slate-600 dark:border-s-slate-400 bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow ${cat.fullWidth ? 'lg:col-span-2' : ''}`}
          >
            <div className='flex items-center gap-2 mb-5 pb-3 border-b border-slate-100 dark:border-slate-700'>
              <i className={`${cat.icon} text-xl text-slate-600 dark:text-slate-300`}></i>
              <h3 className='text-base md:text-lg font-semibold dark:text-white'>{cat.title}</h3>
              <span className='ml-auto text-xs text-gray-400 dark:text-slate-500'>{cat.skills.length} skills</span>
            </div>

            <div className={`grid grid-cols-3 sm:grid-cols-4 gap-3 ${cat.fullWidth ? 'lg:grid-cols-6 xl:grid-cols-8' : ''}`}>
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className='group flex flex-col items-center text-center p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors'
                >
                  <img
                    src={process.env.PUBLIC_URL + '/images/' + skill.img}
                    alt={skill.name}
                    className='w-12 h-12 object-contain group-hover:scale-110 transition-transform'
                  />
                  <h4 className='text-xs font-medium mt-2 text-slate-800 dark:text-slate-200'>{skill.name}</h4>
                  <LevelDots level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
