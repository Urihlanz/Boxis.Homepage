import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Image } from '../styles';
import ConstructortIcon from './ConstructorIcon';
import Sites from './images/sites.png';
import {
  ConstructorIconSquare,
  Container,
  Content,
  ImageBlock,
  Title,
  Value,
  Wrapper,
} from './styles';

const TotalCreated: React.FC = () => (
  <Wrapper>
    <Container>
      <Content>
        <ConstructorIconSquare>
          <ConstructortIcon width='30' height='30' />
        </ConstructorIconSquare>
        <Title>
          <FormattedMessage id='total_created.title' />
        </Title>
        <Value>432305</Value>
      </Content>
      <ImageBlock>
        <Image
          width='1380px'
          height='1395px'
          src={Sites}
          alt='Example your site'
        />
      </ImageBlock>
    </Container>
  </Wrapper>
);

export default TotalCreated;
