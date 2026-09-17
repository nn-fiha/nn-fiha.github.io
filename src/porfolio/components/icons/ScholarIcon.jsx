import React from 'react';

// Google Scholar mark. Path from Simple Icons (CC0); fill inherits currentColor
// so it picks up hover and dark-mode colours like the Boxicons glyphs around it.
const ScholarIcon = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    focusable='false'
  >
    <path d='M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z' />
  </svg>
);

export default ScholarIcon;
