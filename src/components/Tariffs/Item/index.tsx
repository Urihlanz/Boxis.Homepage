import React from 'react';
import { FormattedMessage } from 'react-intl';

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
    {isRecommended ? (
      <Recommended>
        <FormattedMessage id='tarrifs.item.recommended' />!
      </Recommended>
    ) : null}
    <Header>
      <Title>{title}</Title>
      <Price>
        {prices[period]} <FormattedMessage id='tarrifs.item.price' />
      </Price>
    </Header>
    <Features>
      {features.active.map((feature, index) => (
        <ActiveFeature key={index}>
          <CheckIcon width={20} height={20} />
          <FormattedMessage id={feature} />
        </ActiveFeature>
      ))}
      {features.inactive.map((feature, index) => (
        <InactiveFeature key={index}>
          <FormattedMessage id={feature} />
        </InactiveFeature>
      ))}
    </Features>
    <SelectButton size='lg'>
      <FormattedMessage id='tarrifs.item.select_button' />
    </SelectButton>
  </Wrapper>
);

export default Card;
