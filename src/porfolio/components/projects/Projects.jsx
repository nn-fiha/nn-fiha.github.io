import React from 'react'

const projects = [
  {
    title: 'Cyber Bullying Detection using Machine Learning',
    image: 'cyber.jpg',
    stack: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'NLTK', 'Matplotlib', 'Seaborn', 'Jupyter'],
    description:
      'Classified Bengali social media posts into 3 classes (Non-Bullying, Bullying, Crime) by training machine learning models on an annotated dataset, with an NLTK preprocessing pipeline covering tokenization, stemming and stopword removal, and TF-IDF features.',
    github: 'https://github.com/SM2142/Cyber-Bullying-Detection-on-Scocial-Media-Plaform-Using-Machine-Learning',
  },
  {
    title: 'Konta Niben \u2013 an E-commerce System',
    image: 'kontaNiben.png',
    stack: ['MERN', 'Tailwind CSS', 'Jest', 'GitHub Actions'],
    description:
      'Konta Niben is a user-friendly platform for selling products directly to customers. Developed as a full-stack e-commerce application following Agile/SDLC practices across 2 sprints, with JSDoc documentation, Jest unit tests, and CI via GitHub Actions.',
    github: 'https://github.com/SQA-PROJECT-1/Konta-Niben',
  },
  {
    title: 'OBE-Based Result Management System',
    image: 'OBE.png',
    stack: ['Python', 'Django', 'Bootstrap', 'SQLite'],
    description:
      'OBE introduces an Outcome-Based Education (OBE) result management system for streamlined and effective academic assessment and reporting. It not only rectifies the deficiencies of conventional systems but also incorporates additional features for enhanced functionality.',
    github: 'https://github.com/whomping-willow/OBE',
  },
  {
    title: 'IoT Based Plant Watering System',
    image: 'iot-circuit.png',
    stack: ['Arduino C++', 'NodeMCU ESP8266', 'Blynk', 'DHT11'],
    description:
      'Connected a soil moisture sensor and water pump to a NodeMCU ESP8266 that streams readings to the Blynk cloud, so soil moisture, temperature and humidity can be checked from a phone, with alerts when soil goes too dry or too wet and remote control of the pump.',
    github: 'https://github.com/nn-fiha/iot-plant-watering-system',
  },
  {
    title: 'JU CSE Routinery',
    image: 'routinery.png',
    stack: ['Java', 'Android SDK', 'SQLite'],
    description:
      'Class routines in the department were shared as static files, which made it hard for students to find their schedule for the day or notice changes. JU CSE Routinery puts the routine in one app: students can check their daily and full routines by batch, and admins can add or update classes directly.',
    github: 'https://github.com/nn-fiha/JU-CSE-ROUTINARY',
  },
  {
    title: 'BoiPoka',
    image: 'boipoka-library.jpg',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    description:
      'BoiPoka is a bookshelf for every book you have read. Readers sign up, put books on their wooden shelf, and keep a journal for each one: status, rating, how it felt, their thoughts and the lines they loved. Shelves are public by default, so readers can browse each other\'s shelves and see what others felt about a book.',
    github: 'https://github.com/nn-fiha/BoiPoka',
    demo: 'https://boi-poka.vercel.app/',
  },
  // Hidden for now
  // {
  //   title: 'Cineflix',
  //   image: 'cineflix1.png',
  //   stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
  //   description:
  //     'Cineflix is a frontend video rendering site, built while learning JavaScript and Tailwind CSS.',
  //   demo: 'https://cineflix-fiha.netlify.app/',
  // },
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
                <p className='mt-3 text-sm text-justify text-slate-800 dark:text-slate-300 leading-relaxed'>
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
