import React from 'react';

const ConstructortIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
      stroke='url(#paint0_linear_364_574)'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 21V9'
      stroke='url(#paint1_linear_364_574)'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 9H21'
      stroke='url(#paint2_linear_364_574)'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_364_574'
        x1='-5.70698'
        y1='-7.41429'
        x2='25.5317'
        y2='-5.27532'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F4576F' />
        <stop offset='0.662308' stopColor='#F4576F' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_364_574'
        x1='8.51628'
        y1='2.05714'
        x2='10.2598'
        y2='2.06709'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F4576F' />
        <stop offset='0.662308' stopColor='#F4576F' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_364_574'
        x1='-5.70698'
        y1='8.42143'
        x2='6.75219'
        y2='23.7773'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F4576F' />
        <stop offset='0.662308' stopColor='#F4576F' />
      </linearGradient>
    </defs>
  </svg>
);

export default ConstructortIcon;
