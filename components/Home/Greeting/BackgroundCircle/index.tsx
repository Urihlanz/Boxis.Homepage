import React from 'react';

const BackgroundCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox='0 0 736 570'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      opacity='0.2'
      d='M3.37144 395.278C-29.2427 149.335 198.052 -51.0948 437.981 12.0366C620.626 60.0953 751.338 220.597 761.42 409.19L770 569.69H26.5L3.37144 395.278Z'
      fill='url(#paint0_linear_364:465)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_364:465'
        x1='-103.5'
        y1='-172.5'
        x2='478.5'
        y2='771.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.0542445' stopColor='#F9F9F9' />
        <stop offset='1' stopColor='#F4566F' stopOpacity='0' />
      </linearGradient>
    </defs>
  </svg>
);

export default BackgroundCircle;
