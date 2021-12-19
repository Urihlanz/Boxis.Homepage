import React from 'react';

import { TariffPeriods } from '../types';
import {
  ActiveFeature,
  CheckIcon,
  Features,
  Header,
  InactiveFeature,
  Price,
  Recommended,
  SelectButton,
  Title,
  Wrapper,
} from './styles';

type Features = {
  active: string[];
  inactive: string[];
};

type Prices = {
  [TariffPeriods.ThreeMonths]: number;
  [TariffPeriods.SixMonths]: number;
  [TariffPeriods.TwelveMonths]: number;
};

type Props = {
  title: string;
  prices: Prices;
  features: Features;
  isRecommended: boolean;
  period: TariffPeriods;
};

const Card: React.FC<Props> = ({
  title,
  prices,
  features,
  period,
  isRecommended,
}) => (
  <Wrapper>
    {isRecommended ? <Recommended>Рекомендуем!</Recommended> : null}
    <Header>
      <Title>{title}</Title>
      <Price>{prices[period]} ₽ / Mec</Price>
    </Header>
    <Features>
      {features.active.map((feature, index) => (
        <ActiveFeature key={index}>
          <CheckIcon width={20} height={20} />
          {feature}
        </ActiveFeature>
      ))}
      {features.inactive.map((feature, index) => (
        <InactiveFeature key={index}>{feature}</InactiveFeature>
      ))}
    </Features>
    <SelectButton>Выбрать</SelectButton>
  </Wrapper>
);

export default Card;
