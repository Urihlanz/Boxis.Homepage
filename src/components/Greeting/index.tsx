import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Image } from '../styles';
import LaptopMan from './images/laptopMan.png';
import {
  BottomGrid,
  Circle,
  Container,
  CreateSiteButton,
  Info,
  Picture,
  PictureManLaptop,
  PictureSquareBottom,
  PictureSquareTop,
  StyledInstagramIcon,
  StyledPieChartIcon,
  Subtitle,
  Title,
  TopGrid,
  TrustUsBlock,
  Wrapper,
} from './styles';

const Greeting: React.FC = () => (
  <Wrapper>
    <Container>
      <Info>
        <Title>
          <FormattedMessage id='greeting.title' />
        </Title>
        <Subtitle>
          <FormattedMessage id='greeting.subtitle' />
        </Subtitle>
        <CreateSiteButton>
          <FormattedMessage id='button.create_site' />
        </CreateSiteButton>
        <TrustUsBlock />
      </Info>
      <Picture>
        <Circle />
        <TopGrid />
        <BottomGrid />
        <PictureSquareTop>
          <StyledInstagramIcon width={80} height={80} />
        </PictureSquareTop>
        <PictureManLaptop>
          <Image
            src={LaptopMan}
            alt='Man with laptop'
            width='100%'
            height='100%'
          />
        </PictureManLaptop>
        <PictureSquareBottom>
          <StyledPieChartIcon width={60} height={60} />
        </PictureSquareBottom>
      </Picture>
    </Container>
  </Wrapper>
);

export default Greeting;
