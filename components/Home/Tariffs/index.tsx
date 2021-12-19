import React, { useState } from 'react';

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
        <Title>Тарифы</Title>
        <ButtonsRow>
          <PeriodButton
            isActive={period === TariffPeriods.ThreeMonths}
            onClick={() => setPeriod(TariffPeriods.ThreeMonths)}
          >
            3 месяца
          </PeriodButton>
          <PeriodButton
            isActive={period === TariffPeriods.SixMonths}
            onClick={() => setPeriod(TariffPeriods.SixMonths)}
          >
            6 месяцев
          </PeriodButton>
          <PeriodButton
            isActive={period === TariffPeriods.TwelveMonths}
            onClick={() => setPeriod(TariffPeriods.TwelveMonths)}
          >
            12 месяцев
          </PeriodButton>
        </ButtonsRow>
        <CardList period={period} />
      </Container>
    </Wrapper>
  );
};

export default Tariffs;
