import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScholarIcon from '../icons/ScholarIcon';

const contactMethods = [
  {
    icon: 'bx bx-envelope',
    label: 'Email',
    value: 'nnfiha2000@gmail.com',
    href: 'mailto:nnfiha2000@gmail.com',
  },
  {
    icon: 'bx bx-envelope',
    label: 'Academic Email',
    value: 'fiha.stu2018@juniv.edu',
    href: 'mailto:fiha.stu2018@juniv.edu',
  },
  {
    icon: 'bx bxl-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/nnfiha',
    href: 'https://www.linkedin.com/in/nnfiha/',
  },
  {
    icon: 'bx bx-map',
    label: 'Location',
    value: 'Dhaka, Bangladesh',
  },
];

const socials = [
  { icon: 'bx bxl-github', href: 'https://github.com/nn-fiha', label: 'GitHub' },
  { icon: 'bx bxl-linkedin', href: 'https://www.linkedin.com/in/nnfiha/', label: 'LinkedIn' },
  { icon: 'bx bxl-twitter', href: 'https://twitter.com/nn_fiha', label: 'Twitter' },
  { svg: true, href: 'https://scholar.google.com/citations?hl=en&user=EGe-L9cAAAAJ', label: 'Google Scholar' },
];

const Contact = () => {
  const [state, handleSubmit] = useForm('mdknprwl');

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thanks for reaching out!');
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id='contact' className='p-8 mb-10 md:mb-20'>
      <ToastContainer />
      <h2 className='text-2xl font-bold text-center dark:text-white'>Get in Touch</h2>
      <span className='block text-xs text-gray-500 dark:text-slate-400 text-center mb-12'>My Contact</span>

      <div className='max-w-5xl mx-auto md:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12'>
          {/* Left: contact methods */}
          <div className='md:col-span-2 text-left'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3'>Let's connect</h3>
            <p className='text-sm text-slate-800 dark:text-slate-400 leading-relaxed mb-8'>
              Have a question, an opportunity, or just want to say hi? Drop a message and I'll get back to you.
            </p>

            <div className='space-y-5'>
              {contactMethods.map((m) => {
                const content = (
                  <div className='flex items-start gap-4 group'>
                    <div className='shrink-0 w-11 h-11 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-slate-700 group-hover:text-white dark:group-hover:bg-slate-200 dark:group-hover:text-slate-900 transition-colors'>
                      <i className={`${m.icon} text-xl`}></i>
                    </div>
                    <div className='min-w-0'>
                      <div className='text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5'>{m.label}</div>
                      <div className='text-sm font-medium text-slate-800 dark:text-slate-200 break-all'>{m.value}</div>
                    </div>
                  </div>
                );
                return m.href ? (
                  <a key={m.label} href={m.href} target={m.href.startsWith('mailto:') ? undefined : '_blank'} rel='noopener noreferrer' className='block'>
                    {content}
                  </a>
                ) : (
                  <div key={m.label}>{content}</div>
                );
              })}
            </div>

            <div className='mt-10 pt-6 border-t border-slate-200 dark:border-slate-800'>
              <div className='text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3'>Find me on</div>
              <div className='flex gap-2'>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={s.label}
                    className='w-9 h-9 inline-flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-700 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 transition-colors'
                  >
                    {s.svg ? <ScholarIcon /> : <i className={`${s.icon} text-lg`}></i>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className='md:col-span-3'>
            <div className='border-l-4 border-s-slate-600 dark:border-s-slate-400 bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 md:p-8'>
              <form onSubmit={handleSubmit} className='space-y-5 text-left'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <div>
                    <label htmlFor='name' className='block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5'>Name</label>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      required
                      placeholder='Your name'
                      className='w-full h-11 px-4 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-slate-500 dark:focus:border-slate-400 transition-colors'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5'>Email</label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      required
                      placeholder='you@example.com'
                      className='w-full h-11 px-4 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-slate-500 dark:focus:border-slate-400 transition-colors'
                    />
                    <ValidationError prefix='Email' field='email' errors={state.errors} className='text-xs text-red-500 mt-1' />
                  </div>
                </div>

                <div>
                  <label htmlFor='subject' className='block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5'>Subject</label>
                  <input
                    id='subject'
                    type='text'
                    name='subject'
                    placeholder="What's this about?"
                    className='w-full h-11 px-4 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-slate-500 dark:focus:border-slate-400 transition-colors'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows='6'
                    placeholder='Tell me a bit about what you have in mind...'
                    className='w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-slate-500 dark:focus:border-slate-400 transition-colors resize-none'
                  ></textarea>
                  <ValidationError prefix='Message' field='message' errors={state.errors} className='text-xs text-red-500 mt-1' />
                </div>

                <button
                  type='submit'
                  disabled={state.submitting}
                  className={`w-full inline-flex items-center justify-center gap-2 text-white bg-slate-800 hover:bg-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 px-6 py-3 font-medium rounded-md shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${state.submitting ? 'opacity-60 cursor-wait' : ''}`}
                >
                  {state.submitting ? (
                    <>
                      <svg className='w-5 h-5 animate-spin' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                        <path d='M12 22a10 10 0 0 0 0-20v2a8 8 0 0 1 0 16v2z'></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className='bx bx-send text-lg'></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
