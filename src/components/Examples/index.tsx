import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Image } from '../styles';
import SiteExample from './images/example.png';
import Laptop from './images/laptop.png';
import {
  BottomGrid,
  ButtonsRow,
  Container,
  CreateSiteButton,
  ExampleImage,
  Info,
  LaptopBlock,
  LaptopImage,
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
      imageUrl = SiteExample;
      break;
    case Categories.Shop:
      imageUrl = SiteExample;
      break;
    case Categories.More:
      imageUrl = SiteExample;
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
              width='520px'
              height='340px'
              src={imageUrl}
              alt='Example of the business site'
            />
          </ExampleImage>
          <LaptopImage>
            <Image
              width='750px'
              height='445px'
              src={Laptop}
              alt='Categories of your imagine'
            />
          </LaptopImage>
          <TopGrid />
          <BottomGrid />
          <ButtonsRow>
            <SlideButton
              isActive={category === Categories.Business}
              onClick={() => setCategory(Categories.Business)}
            >
              <FormattedMessage id='examples.slide_button.1' />
            </SlideButton>
            <SlideButton
              isActive={category === Categories.Shop}
              onClick={() => setCategory(Categories.Shop)}
            >
              <FormattedMessage id='examples.slide_button.2' />
            </SlideButton>
            <SlideButton
              isActive={category === Categories.More}
              onClick={() => setCategory(Categories.More)}
            >
              <FormattedMessage id='examples.slide_button.3' />
            </SlideButton>
          </ButtonsRow>
        </LaptopBlock>
        <Info>
          <Title>
            <FormattedMessage id='examples.title' />
          </Title>
          <Subtitle>
            <FormattedMessage id='examples.subtitle' />
          </Subtitle>
          <CreateSiteButton size='lg'>
            <FormattedMessage id='button.create_site' />
          </CreateSiteButton>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default Examples;
