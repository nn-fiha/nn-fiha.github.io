import React, { useState } from 'react'

const SUPERVISORS = {
  israt: 'https://juniv.edu/teachers/israt',
  moazzam: 'https://scholar.google.com/citations?user=vuqUDk0AAAAJ',
}

// tone drives the badge colour: how far along the work is
const badgeTone = {
  published: 'bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/30',
  progress: 'bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/30',
  course: 'bg-slate-100 text-slate-600 ring-slate-200 dark:bg-ink-raised dark:text-zinc-300 dark:ring-zinc-700',
}

const researchItems = [
  {
    title: 'Multilingual Sentiment Analysis of Social Media Reactions to OpenAI’s Ghibli-Style Image Generation Feature',
    badge: 'Manuscript in preparation',
    tone: 'progress',
    context: 'M.Sc. thesis',
    supervisor: { name: 'Dr. Israt Jahan', href: SUPERVISORS.israt },
    metrics: [
      { value: '36.7K', label: 'multilingual corpus' },
      { value: '21', label: 'configs benchmarked' },
      { value: '91.27%', label: 'BERT-base accuracy' },
    ],
    bullets: [
      'Built a 36.7K-record multilingual corpus of Twitter and YouTube reactions to a viral generative-AI feature to study public sentiment toward AI-generated art, using machine translation of non-English posts, emoji-aware preprocessing, and VADER-based weak supervision.',
      'Benchmarked 21 transformer and hybrid Transformer-RNN configurations on accuracy and calibration (ECE). BERT-base performed best (91.27% accuracy on VADER-derived labels), while a lighter 1-layer DistilBERT-BiGRU hybrid nearly matched it (91.12%) with the lowest calibration error of all models.',
      'Found that accuracy varied by under 3 percentage points across models while calibration error varied more than fourfold, and that 16 of 18 hybrids were worse calibrated than their base transformer.',
    ],
  },
  {
    title: 'Deep Learning Based Bangladeshi Currency Coin Recognition',
    badge: 'Published · ICREST 2025, IEEE Xplore',
    tone: 'published',
    href: 'https://ieeexplore.ieee.org/abstract/document/10914454',
    context: 'B.Sc. thesis',
    supervisor: { name: 'Md. Golam Moazzam', href: SUPERVISORS.moazzam },
    bibtex: `@INPROCEEDINGS{10914454,
  author={Monira, Serajum and Fiha, Nurun Nahar and Moazzam, Md. Golam and Anwar, Md. Musfique},
  booktitle={2025 4th International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST)},
  title={Deep Learning Based Bangladeshi Currency Coin Recognition},
  year={2025},
  pages={161-166},
  doi={10.1109/ICREST63960.2025.10914454}
}`,
    metrics: [
      { value: '2,800', label: 'image dataset' },
      { value: '14', label: 'coin classes' },
      { value: '91.18%', label: 'test accuracy' },
    ],
    bullets: [
      'Addressed coin identification for visually impaired users, as Bangladeshi coins are nearly identical in size and texture, by building a 2,800-image, 14-class dataset captured under real-world lighting and rotation conditions.',
      'Trained a Faster R-CNN (ResNet-50 FPN) against a CNN baseline in PyTorch, reaching 91.18% test accuracy (vs. 84.04%).',
    ],
  },
  {
    title: 'A Comparative Analysis of Low-Resource Techniques for Named Entity Recognition in Bengali',
    readMore: 'https://drive.google.com/file/d/16XDP_1N5NKYfeQ_Lflv2XcFNpAlk4dVs/view?usp=sharing',
    badge: 'M.Sc. course research project (NLP)',
    tone: 'course',
    metrics: [
      { value: '25K', label: 'sentence dataset' },
      { value: '4', label: 'models compared' },
      { value: '0.758', label: 'best F1 (XLM-R)' },
    ],
    bullets: [
      'Investigated the effectiveness of modeling approaches for Bengali, a widely spoken but low-resource language, by benchmarking CRF, BiLSTM-CRF, mBERT, and XLM-RoBERTa on a custom 25K-sentence dataset merged from three public corpora.',
      'Enhanced models with FastText embeddings, character-level CNNs, and linguistic features; XLM-RoBERTa achieved the best F1 (0.758).',
    ],
  },
  {
    title: 'Cyberbullying Detection on Social Media Platforms Using Machine Learning',
    readMore: 'https://drive.google.com/file/d/1Y_zHNk9VciuekiREZfN-sJZPCv5JWCTD/view?usp=sharing',
    badge: 'B.Sc. course research project (ML)',
    tone: 'course',
    metrics: [
      { value: '16K', label: 'comments relabeled' },
      { value: '4', label: 'classifiers compared' },
      { value: '0.761', label: '10-fold CV (XGBoost)' },
    ],
    bullets: [
      'Relabeled a 16K-comment Bengali toxic-comment dataset into 3 classes (Non-Bullying, Bullying, Crime) and built a preprocessing pipeline covering stopword removal, stemming, and TF-IDF features.',
      'Compared four classifiers (LR, DT, RF, XGBoost). XGBoost with class-imbalance weighting performed best, with 75.4% test accuracy and a 0.761 10-fold CV score.',
    ],
  },
]

const Research = () => {
  const [openCitation, setOpenCitation] = useState(null)

  return (
    <section id='research' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center dark:text-white'>Research Experience</h2>
      <span className='block text-xs text-gray-500 dark:text-zinc-400 text-center mb-12'>Theses &amp; Projects</span>

      <div className='max-w-5xl mx-auto md:px-8'>
        <div className='relative md:pl-10 md:before:content-[""] md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-0.5 md:before:bg-slate-200 md:dark:before:bg-zinc-700'>
          {researchItems.map((item, idx) => (
            <div key={idx} className='relative mb-8 last:mb-0'>
              <span className='hidden md:block absolute -left-[34px] top-6 w-3.5 h-3.5 rounded-full bg-slate-600 dark:bg-zinc-400 ring-4 ring-white dark:ring-ink-page shadow'></span>

              <div className='border-l-4 border-s-slate-600 dark:border-s-zinc-400 bg-white dark:bg-ink-card shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow text-left'>
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
                    <span className='text-sm text-slate-800 dark:text-zinc-300'>
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

                {item.authors && (
                  <p className='mt-3 text-sm text-slate-800 dark:text-zinc-300'>
                    {item.authors.map((a, i) => (
                      <React.Fragment key={a}>
                        {a === 'Nurun Nahar Fiha' ? <strong className='dark:text-white'>{a}</strong> : a}
                        {i < item.authors.length - 1 ? ', ' : '. '}
                      </React.Fragment>
                    ))}
                    <i className='text-xs text-slate-600 dark:text-zinc-400'>{item.venue}</i>
                  </p>
                )}

                {item.metrics && (
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4'>
                    {item.metrics.map((m, i) => (
                      <div key={i} className='rounded-lg bg-slate-50 dark:bg-ink-raised/60 px-3 py-2.5 text-center'>
                        <p className='text-base font-bold text-slate-900 dark:text-white leading-none'>{m.value}</p>
                        <p className='mt-1 text-[11px] font-medium text-slate-500 dark:text-zinc-400 leading-tight'>{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <ul className='mt-4 space-y-2 text-sm text-slate-800 dark:text-zinc-300'>
                  {item.bullets.map((b, i) => (
                    <li key={i} className='flex gap-2 text-justify'>
                      <i className='bx bx-chevron-right text-base shrink-0 mt-0.5 text-slate-500 dark:text-zinc-400'></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {(item.bibtex || item.href || item.readMore) && (
                  <div className='flex flex-wrap justify-end gap-2 mt-5'>
                    {item.bibtex && (
                      <button
                        onClick={() => setOpenCitation(idx)}
                        type='button'
                        className='inline-flex items-center gap-1.5 border border-green-700 text-green-700 dark:border-green-400 dark:text-green-400 px-3 py-1 text-xs rounded-md hover:bg-green-700 hover:text-white dark:hover:bg-green-500 dark:hover:text-white transition-colors'
                      >
                        <i className='bx bxs-quote-single-right'></i> Citation
                      </button>
                    )}
                    {item.href && (
                      <a
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 border border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400 px-3 py-1 text-xs rounded-md hover:bg-blue-700 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors'
                      >
                        <i className='bx bx-link'></i> Source
                      </a>
                    )}
                    {item.readMore && (
                      <a
                        href={item.readMore}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 border border-slate-400 text-slate-700 dark:border-zinc-500 dark:text-zinc-300 px-3 py-1 text-xs rounded-md hover:bg-slate-700 hover:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-900 transition-colors'
                      >
                        <i className='bx bx-file'></i> Read more
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openCitation !== null && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4' onClick={() => setOpenCitation(null)}>
          <div className='bg-white dark:bg-ink-card rounded-lg shadow-lg max-w-3xl w-full p-6 relative' onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpenCitation(null)}
              className='absolute top-4 right-6 text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-white text-xl'
              aria-label='Close'
            >
              &times;
            </button>
            <h3 className='text-lg font-semibold mb-4 text-left dark:text-white'>Citation</h3>
            <pre className='text-xs text-left leading-relaxed font-mono whitespace-pre-wrap bg-gray-50 dark:bg-ink-raised dark:text-zinc-200 p-4 rounded border-t dark:border-ink-line'>
              {researchItems[openCitation].bibtex}
            </pre>
          </div>
        </div>
      )}
    </section>
  )
}

export default Research
