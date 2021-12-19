import Image from 'next/image';
import React, { useState } from 'react';

import BusinessExample from './images/businessExample.png';
import MoreExample from './images/exampleSite.jpg';
import Laptop from './images/laptop.png';
import ShopSites from './images/sites.jpg';
import {
  BottomGrid,
  ButtonsRow,
  Container,
  CreateSiteButton,
  ExampleImage,
  Info,
  LaptopBlock,
  LaptopImage,
  Point,
  PointListRow,
  SlideButton,
  Subtitle,
  Title,
  TopGrid,
  Wrapper,
} from './styles';

enum Categories {
  Business = 0,
  Shop = 1,
  More = 2,
}

const Examples: React.FC = () => {
  const [category, setCategory] = useState<Categories>(Categories.Business);

  let imageUrl = '';

  switch (category) {
    case Categories.Business:
      imageUrl = BusinessExample;
      break;
    case Categories.Shop:
      imageUrl = ShopSites;
      break;
    case Categories.More:
      imageUrl = MoreExample;
      break;
    default:
      break;
  }

  return (
    <Wrapper>
      <Container>
        <LaptopBlock>
          <ExampleImage>
            <Image
              width='520'
              height='340'
              src={imageUrl}
              alt='Example of the business site'
            />
          </ExampleImage>
          <LaptopImage>
            <Image
              width='750'
              height='445'
              src={Laptop}
              alt='Categories of your imagine'
            />
          </LaptopImage>
          <TopGrid />
          <BottomGrid />
          <PointListRow>
            <Point isActive={category === Categories.Business} />
            <Point isActive={category === Categories.Shop} />
            <Point isActive={category === Categories.More} />
          </PointListRow>
          <ButtonsRow>
            <SlideButton
              isActive={category === Categories.Business}
              onClick={() => setCategory(Categories.Business)}
            >
              Бизнес
            </SlideButton>
            <SlideButton
              isActive={category === Categories.Shop}
              onClick={() => setCategory(Categories.Shop)}
            >
              Магазины
            </SlideButton>
            <SlideButton
              isActive={category === Categories.More}
              onClick={() => setCategory(Categories.More)}
            >
              Другие
            </SlideButton>
          </ButtonsRow>
        </LaptopBlock>
        <Info>
          <Title>Примеры работ на конструкторе</Title>
          <Subtitle>Посмотрите, как другие используют конструктор</Subtitle>
          <CreateSiteButton>Создать сайт</CreateSiteButton>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default Examples;
