import React from 'react';

const SafetyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z'
      stroke='#D94B6E'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SafetyIcon;
