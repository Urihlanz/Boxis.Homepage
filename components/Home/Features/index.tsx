import Image from 'next/image';
import React from 'react';

import AutoOrderIcon from './AutoOrderIcon';
import ExampleSite from './images/exampleSite.jpg';
import OnlinePayIcon from './OnlinePayIcon';
import PieChartIcon from './PieChartIcon';
import SafetyIcon from './SafetyIcon';
import {
  AutoOrderIconSquare,
  Container,
  Content,
  Feature,
  FeatureText,
  FeatureTitle,
  OnlinePayIconSquare,
  OurFeatures,
  PieChartIconSquare,
  SafetyIconSquare,
  Subtitle,
  Text,
  Title,
  TrustUsBlock,
  Wrapper,
} from './styles';

const Features: React.FC = () => (
  <Wrapper>
    <Container>
      <TrustUsBlock />
      <Text>
        <Title>Функции и врзможности конструктора</Title>
        <Subtitle>
          Начните принимать заказы уже через несколько минут после регистрации
        </Subtitle>
      </Text>
      <Content>
        <Image
          width='573'
          height='600'
          src={ExampleSite}
          alt='Example your site'
        />
        <OurFeatures>
          <Feature>
            <AutoOrderIconSquare>
              <AutoOrderIcon width={22} height={22} />
            </AutoOrderIconSquare>
            <FeatureTitle>Автоматизация заказов</FeatureTitle>
            <FeatureText>
              Начните принимать заказы уже через несколько минут после
              регистрации
            </FeatureText>
          </Feature>
          <Feature>
            <PieChartIconSquare>
              <PieChartIcon width={26} height={26} />
            </PieChartIconSquare>
            <FeatureTitle>Аналитика и статистика</FeatureTitle>
            <FeatureText>
              Начните принимать заказы уже через несколько минут после
              регистрации
            </FeatureText>
          </Feature>
          <Feature>
            <OnlinePayIconSquare>
              <OnlinePayIcon width={26} height={26} />
            </OnlinePayIconSquare>
            <FeatureTitle>Прием платежей онлайн</FeatureTitle>
            <FeatureText>
              Начните принимать заказы уже через несколько минут после
              регистрации
            </FeatureText>
          </Feature>
          <Feature>
            <SafetyIconSquare>
              <SafetyIcon width={26} height={26} />
            </SafetyIconSquare>
            <FeatureTitle>Безопасно и надежна</FeatureTitle>
            <FeatureText>
              Начните принимать заказы уже через несколько минут после
              регистрации
            </FeatureText>
          </Feature>
        </OurFeatures>
      </Content>
    </Container>
  </Wrapper>
);

export default Features;
