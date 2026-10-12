import React from 'react'

const projects = [
  {
    title: 'OBE-Based Result Management System',
    image: 'OBE.png',
    stack: ['Python', 'Django', 'Bootstrap', 'SQLite'],
    description:
      'Built a role-based academic results platform where students view results, teachers analyze courses via auto-generated CO-PO attainment graphs, and administrators monitor performance department-wide.',
    github: 'https://github.com/whomping-willow/OBE',
  },
  {
    title: 'Konta Niben \u2013 an E-commerce System',
    image: 'kontaNiben.png',
    stack: ['MERN', 'Tailwind CSS', 'Jest', 'GitHub Actions'],
    description:
      'Developed a full-stack e-commerce platform following Agile/SDLC practices across 2 sprints, with JSDoc documentation, Jest unit tests, and CI via GitHub Actions.',
    github: 'https://github.com/SQA-PROJECT-1/Konta-Niben',
  },
  {
    title: 'JU CSE Routinery',
    image: 'routinery.png',
    stack: ['Java', 'Android SDK', 'SQLite'],
    description:
      'Built an Android app for organizing CSE department class routines for individual batches.',
    github: 'https://github.com/nn-fiha/JU-CSE-ROUTINARY',
  },
  {
    title: 'Cyber Bullying Detection using Machine Learning',
    image: 'cyber.jpg',
    stack: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'NLTK', 'Matplotlib', 'Seaborn', 'Jupyter'],
    description:
      'Classified Bengali social media posts into 3 classes (Non-Bullying, Bullying, Crime) by training machine learning models on an annotated dataset, with an NLTK preprocessing pipeline covering tokenization, stemming and stopword removal, and TF-IDF features.',
    github: 'https://github.com/SM2142/Cyber-Bullying-Detection-on-Scocial-Media-Plaform-Using-Machine-Learning',
  },
  {
    title: 'BoiPoka',
    image: 'boipoka.png',
    stack: ['React', 'Tailwind CSS'],
    description:
      'Developed a front-end bookstore application for browsing and discovering books while learning React.',
    demo: 'https://boi-poka.vercel.app/',
  },
  {
    title: 'Cineflix',
    image: 'cineflix1.png',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    description:
      'Cineflix is a frontend video rendering site, built while learning JavaScript and Tailwind CSS.',
    demo: 'https://cineflix-fiha.netlify.app/',
  },
]

const Projects = () => {
  return (
    <section id='projects' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Projects</h2>
      <span className='block text-xs text-gray-500 dark:text-slate-400 text-center mb-12'>My existing projects</span>

      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((p) => (
          <div
            key={p.title}
            className='group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col'
          >
            <div className='relative overflow-hidden bg-slate-50 dark:bg-slate-800 h-44'>
              <img
                src={process.env.PUBLIC_URL + '/images/' + p.image}
                alt={p.title}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>

            <div className='p-5 flex flex-col flex-1'>
              <h3 className='text-base font-semibold text-left text-slate-800 dark:text-white leading-snug'>
                {p.title}
              </h3>

              {p.stack && (
                <div className='flex flex-wrap gap-1.5 mt-2.5'>
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className='text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {p.description && (
                <p className='mt-3 text-sm text-left text-slate-800 dark:text-slate-300 leading-relaxed'>
                  {p.description}
                </p>
              )}

              <div className='flex gap-2 mt-auto pt-4'>
                {p.github && (
                  <a
                    href={p.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 border border-slate-700 text-slate-700 dark:border-slate-300 dark:text-slate-300 px-3 py-1.5 text-xs font-medium rounded-md hover:bg-slate-700 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 transition-colors'
                  >
                    <i className='bx bxl-github text-base'></i> Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 border border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400 px-3 py-1.5 text-xs font-medium rounded-md hover:bg-blue-700 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors'
                  >
                    <i className='bx bx-link-external text-base'></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
