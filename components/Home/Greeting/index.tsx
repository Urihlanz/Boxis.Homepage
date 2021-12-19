import Image from 'next/image';
import React from 'react';

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
        <Title>Конструктор сайтов с полной интеграцией Instagram</Title>
        <Subtitle>
          Создайте простой интернет-магазин на основе Instagram
        </Subtitle>
        <CreateSiteButton>Создать сайт</CreateSiteButton>
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
          <Image layout='fill' src={LaptopMan} alt='Man with laptop' />
        </PictureManLaptop>
        <PictureSquareBottom>
          <StyledPieChartIcon width={60} height={60} />
        </PictureSquareBottom>
      </Picture>
    </Container>
  </Wrapper>
);

export default Greeting;
