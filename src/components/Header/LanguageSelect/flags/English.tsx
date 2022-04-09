import React, { SVGProps, useMemo } from 'react';
import shortid from 'shortid';

const EnglishFlag: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const id = useMemo(() => shortid.generate(), []);

  return (
    <svg
      width='21'
      height='15'
      viewBox='0 0 21 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id={id}
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='21'
        height='15'
      >
        <path
          d='M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z'
          fill='white'
        />
      </mask>
      <g mask={`url(#${id})`}>
        <path
          d='M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z'
          fill='#22438B'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.00012 1L0.974121 1.026L1.00012 3L17.9821 14.028L20.0191 13.991L19.9811 12.029L3.00012 1Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 1L1 2L19 14L20 13L2 1Z'
          fill='#C7152A'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18 1H20V3C20 3 8.24999 10.396 3.01799 14.028C2.95499 14.072 1.01999 14.031 1.01999 14.031L0.86499 12.13L18 1Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.043 0.972046L20 2.00005L2 14L1 13L19.043 0.972046Z'
          fill='#C7152A'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 1H13V5H20V10H13V14H8V10H1V5H8V1Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9 1H12V6H20V9H12V14H9V9H1V6H9V1Z'
          fill='#C7152A'
        />
        <path
          d='M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z'
          stroke='black'
          strokeOpacity='0.1'
        />
      </g>
    </svg>
  );
};

export default EnglishFlag;
