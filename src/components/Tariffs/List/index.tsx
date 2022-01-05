import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../Item';
import { TariffCard, TariffPeriods } from '../types';
import { List, ListWithSwiper, Wrapper } from './styles';

SwiperCore.use([Pagination]);

type Props = {
  period: TariffPeriods;
};

const cardsData: TariffCard[] = [
  {
    title: 'Free',
    prices: {
      [TariffPeriods.ThreeMonths]: 0,
      [TariffPeriods.SixMonths]: 0,
      [TariffPeriods.TwelveMonths]: 0,
    },
    features: {
      active: [
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
      ],
      inactive: ['Онлайн платежи', 'Онлайн платежи', 'Онлайн платежи'],
    },
    isRecommended: false,
  },
  {
    title: 'Standart',
    prices: {
      [TariffPeriods.ThreeMonths]: 200,
      [TariffPeriods.SixMonths]: 600,
      [TariffPeriods.TwelveMonths]: 1200,
    },
    features: {
      active: [
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
      ],
      inactive: ['Онлайн платежи', 'Онлайн платежи'],
    },
    isRecommended: false,
  },
  {
    title: 'Premium',
    prices: {
      [TariffPeriods.ThreeMonths]: 400,
      [TariffPeriods.SixMonths]: 800,
      [TariffPeriods.TwelveMonths]: 12000,
    },
    features: {
      active: [
        'Онлайн платежи dfgdfh hfgjfgjxfdg zdrghfgdjh earzd gfdsgfdgfdg',
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
        'Онлайн платежи',
      ],
      inactive: ['Онлайн платежи', 'Онлайн платежи'],
    },
    isRecommended: true,
  },
];

const CardList: React.FC<Props> = ({ period }) => {
  return (
    <Wrapper>
      <List>
        {cardsData.map((props: TariffCard, index) => (
          <Card
            title={props.title}
            prices={props.prices}
            features={props.features}
            isRecommended={props.isRecommended}
            period={period}
            key={index}
          />
        ))}
      </List>
      <ListWithSwiper>
        <Swiper
          pagination={true}
          className='mySwiper'
          spaceBetween={50}
          slidesPerView={1}
        >
          {cardsData.map((props: TariffCard, index) => (
            <SwiperSlide key={index}>
              <Card
                title={props.title}
                prices={props.prices}
                features={props.features}
                isRecommended={props.isRecommended}
                period={period}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ListWithSwiper>
    </Wrapper>
  );
};

export default CardList;
