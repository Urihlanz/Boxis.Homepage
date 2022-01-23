import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Image } from '../styles';
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
        <Title>
          <FormattedMessage id='features.title' />
        </Title>
        <Subtitle>
          <FormattedMessage id='features.subtitle' />
        </Subtitle>
      </Text>
      <Content>
        <Image
          width='573px'
          height='600px'
          src={ExampleSite}
          alt='Example your site'
        />
        <OurFeatures>
          <Feature>
            <AutoOrderIconSquare>
              <AutoOrderIcon width={22} height={22} />
            </AutoOrderIconSquare>
            <FeatureTitle>
              <FormattedMessage id='features.feature_1.title' />
            </FeatureTitle>
            <FeatureText>
              <FormattedMessage id='features.feature_1.subtitle' />
            </FeatureText>
          </Feature>
          <Feature>
            <PieChartIconSquare>
              <PieChartIcon width={26} height={26} />
            </PieChartIconSquare>
            <FeatureTitle>
              <FormattedMessage id='features.feature_2.title' />
            </FeatureTitle>
            <FeatureText>
              <FormattedMessage id='features.feature_2.subtitle' />
            </FeatureText>
          </Feature>
          <Feature>
            <OnlinePayIconSquare>
              <OnlinePayIcon width={26} height={26} />
            </OnlinePayIconSquare>
            <FeatureTitle>
              <FormattedMessage id='features.feature_3.title' />
            </FeatureTitle>
            <FeatureText>
              <FormattedMessage id='features.feature_3.subtitle' />
            </FeatureText>
          </Feature>
          <Feature>
            <SafetyIconSquare>
              <SafetyIcon width={26} height={26} />
            </SafetyIconSquare>
            <FeatureTitle>
              <FormattedMessage id='features.feature_4.title' />
            </FeatureTitle>
            <FeatureText>
              <FormattedMessage id='features.feature_4.subtitle' />
            </FeatureText>
          </Feature>
        </OurFeatures>
      </Content>
    </Container>
  </Wrapper>
);

export default Features;
