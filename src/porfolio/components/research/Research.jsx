import React from 'react'

const SUPERVISORS = {
  israt: 'https://juniv.edu/teachers/israt',
  moazzam: 'https://scholar.google.com/citations?user=vuqUDk0AAAAJ',
}

// tone drives the badge colour: how far along the work is
const badgeTone = {
  published: 'bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/30',
  progress: 'bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/30',
  course: 'bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700',
}

const researchItems = [
  {
    title: 'Multilingual Sentiment Analysis of Social Media Reactions to OpenAI’s Ghibli-Style Image Generation Feature',
    badge: 'Manuscript in preparation',
    tone: 'progress',
    context: 'M.Sc. thesis',
    supervisor: { name: 'Dr. Israt Jahan', href: SUPERVISORS.israt },
    bullets: [
      'Studied how the public perceives AI-generated art, conducting one of the first large-scale sentiment analyses of a viral generative-AI feature, by building a 36.7K-record multilingual corpus of Twitter and YouTube reactions with translation, emoji-aware preprocessing, and VADER-based weak supervision.',
      'Benchmarked 21 transformer and hybrid Transformer–RNN configurations to identify the best accuracy-efficiency trade-off for monitoring fast-moving social discourse; BERT-base performed best (91.27%), with a lightweight DistilBERT–BiGRU hybrid matching it at a fraction of the compute.',
    ],
  },
  {
    title: 'Deep Learning Based Bangladeshi Currency Coin Recognition',
    badge: 'Published · ICREST 2025, IEEE Xplore',
    tone: 'published',
    href: 'https://ieeexplore.ieee.org/abstract/document/10914454',
    context: 'B.Sc. thesis',
    supervisor: { name: 'Md. Golam Moazzam', href: SUPERVISORS.moazzam },
    bullets: [
      'Addressed coin identification for visually impaired users, as Bangladeshi coins are nearly identical in size and texture, by building a 2,800-image, 14-class dataset captured under real-world lighting and rotation conditions.',
      'Trained a Faster R-CNN (ResNet-50 FPN) against a CNN baseline in PyTorch, reaching 91.18% test accuracy (vs. 84.04%).',
    ],
  },
  {
    title: 'A Comparative Analysis of Low-Resource Techniques for Named Entity Recognition in Bengali',
    badge: 'M.Sc. course research project (NLP)',
    tone: 'course',
    bullets: [
      'Investigated the effectiveness of modeling approaches for Bengali, a widely spoken but low-resource language, by benchmarking CRF, BiLSTM-CRF, mBERT, and XLM-RoBERTa on a custom 25K-sentence dataset merged from three public corpora.',
      'Enhanced models with FastText embeddings, character-level CNNs, and linguistic features; XLM-RoBERTa achieved the best F1 (0.758).',
    ],
  },
  {
    title: 'Cyberbullying Detection in Bengali Social Media Comments',
    badge: 'B.Sc. course research project (ML)',
    tone: 'course',
    bullets: [
      'Relabeled a 16K-comment Bengali toxic-comment dataset into 3 classes and trained TF-IDF-based classifiers; XGBoost with class-imbalance weighting achieved the best 10-fold CV score (0.761).',
    ],
  },
]

const Research = () => {
  return (
    <section id='research' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Research Experience</h2>
      <span className='block text-xs text-gray-500 dark:text-slate-400 text-center mb-12'>Theses &amp; Projects</span>

      <div className='max-w-5xl mx-auto md:px-8'>
        <div className='relative md:pl-10 md:before:content-[""] md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-0.5 md:before:bg-slate-200 md:dark:before:bg-slate-700'>
          {researchItems.map((item, idx) => (
            <div key={idx} className='relative mb-8 last:mb-0'>
              <span className='hidden md:block absolute -left-[34px] top-6 w-3.5 h-3.5 rounded-full bg-slate-600 dark:bg-slate-400 ring-4 ring-white dark:ring-slate-950 shadow'></span>

              <div className='border-l-4 border-s-slate-600 dark:border-s-slate-400 bg-white dark:bg-slate-900 shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow text-left'>
                <h3 className='font-semibold text-base md:text-lg leading-snug dark:text-white'>
                  {item.href ? (
                    <a href={item.href} target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400 hover:underline'>
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>

                <div className='flex flex-wrap items-center gap-x-2 gap-y-2 mt-3'>
                  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ${badgeTone[item.tone]}`}>
                    {item.badge}
                  </span>
                  {item.context && (
                    <span className='text-sm text-slate-800 dark:text-slate-300'>
                      {item.context}
                      {item.supervisor && (
                        <>
                          {' '}&mdash; supervised by{' '}
                          <a href={item.supervisor.href} target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400 hover:underline font-medium'>
                            {item.supervisor.name}
                          </a>
                        </>
                      )}
                    </span>
                  )}
                </div>

                <ul className='mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-300'>
                  {item.bullets.map((b, i) => (
                    <li key={i} className='flex gap-2 text-justify'>
                      <i className='bx bx-chevron-right text-base shrink-0 mt-0.5 text-slate-500 dark:text-slate-400'></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research
