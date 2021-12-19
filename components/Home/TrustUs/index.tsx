import Image from 'next/image';
import React from 'react';

import PeopleCircles from './images/peopleCircles.png';
import { CounterValue, CounterWrapper, Title, Wrapper } from './styled';

const TrustUs: React.FC<{ className?: string }> = ({ className }) => (
  <Wrapper className={className}>
    <Title>Нам доверяют</Title>
    <CounterWrapper>
      <Image
        width={128}
        height={67}
        src={PeopleCircles}
        alt='People who to be our clients'
      />
      <CounterValue>21234+</CounterValue>
    </CounterWrapper>
  </Wrapper>
);

export default TrustUs;
