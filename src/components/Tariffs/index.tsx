import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import CardList from './List';
import { ButtonsRow, Container, PeriodButton, Title, Wrapper } from './styles';
import { TariffPeriods } from './types';

const Tariffs: React.FC = () => {
  const [period, setPeriod] = useState<TariffPeriods>(
    TariffPeriods.ThreeMonths
  );

  return (
    <Wrapper>
      <Container>
        <Title>
          <FormattedMessage id='tariffs.title' />
        </Title>
        <ButtonsRow>
          <PeriodButton
            isActive={period === TariffPeriods.ThreeMonths}
            onClick={() => setPeriod(TariffPeriods.ThreeMonths)}
          >
            3 <FormattedMessage id='tariffs.period_button.three_months' />
          </PeriodButton>
          <PeriodButton
            isActive={period === TariffPeriods.SixMonths}
            onClick={() => setPeriod(TariffPeriods.SixMonths)}
          >
            6 <FormattedMessage id='tariffs.period_button.months' />
          </PeriodButton>
          <PeriodButton
            isActive={period === TariffPeriods.TwelveMonths}
            onClick={() => setPeriod(TariffPeriods.TwelveMonths)}
          >
            12 <FormattedMessage id='tariffs.period_button.months' />
          </PeriodButton>
        </ButtonsRow>
        <CardList period={period} />
      </Container>
    </Wrapper>
  );
};

export default Tariffs;
