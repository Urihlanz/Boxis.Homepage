import React from 'react';

import ArrowIcon from './ArrowIcon';
import Avatar from './images/avatar.png';
import CardList from './List';
import {
  BottomGrid,
  ButtonsRow,
  Container,
  PreviosArrow,
  Subtitle,
  SwiperButton,
  Text,
  Title,
  TopGrid,
  Wrapper,
} from './styles';

const reviewsData = [
  {
    userAvatar: Avatar,
    userName: 'Oleg Tinkoff',
    date: '21.03.2021',
    text: '“Магазином легко управлять в любой точке мира и с любого устройства — с телефона, планшета, или ПК. Перевернув телефон вы увидите сайт и вносимые изменения Магазином легко управлять в любой точке мира и с любого устройства — с телефона, планшета, или ПК. Перевернув телефон вы увидите сайт и вносимые изменения”',
  },
  {
    userAvatar: Avatar,
    userName: 'Oleg Tinkoff',
    date: '21.03.2021',
    text: '“Магазином легко управлять в любой точке мира и с любого устройства — с телефона, планшета, или ПК. Перевернув телефон вы увидите сайт и вносимые изменения”',
  },
  {
    userAvatar: Avatar,
    userName: 'Oleg Tinkoff',
    date: '21.03.2021',
    text: '“Магазином легко управлять в любой точке мира и с любого устройства — с телефона, планшета, или ПК. Перевернув телефон вы увидите сайт и вносимые изменения”',
  },
  {
    userAvatar: Avatar,
    userName: 'Oleg Tinkoff',
    date: '21.03.2021',
    text: '“Магазином легко управлять в любой точке мира и с любого устройства — с телефона, планшета, или ПК. Перевернув телефон вы увидите сайт и вносимые изменения”',
  },
  {
    userAvatar: Avatar,
    userName: 'Oleg Tinkoff',
    date: '21.03.2021',
    text: '“Магазином легко управлять в любой точке мира и с любого устройства — с телефона, планшета, или ПК. Перевернув телефон вы увидите сайт и вносимые изменения”',
  },
  {
    userAvatar: Avatar,
    userName: 'Oleg Tinkoff',
    date: '21.03.2021',
    text: '“Магазиномxcv управлять в любой точке мира и с любого устройства — с телефона, планшета, или ПК. Перевернув телефон вы увидите сайт и вносимые изменения”',
  },
];

const Reviews: React.FC = () => (
  <Wrapper>
    <TopGrid />
    <BottomGrid />
    <Container>
      <Text>
        <Title>Отзыв о конструкторе</Title>
        <Subtitle>
          Начните принимать заказы уже через несколько минут после регистрации
        </Subtitle>
        <ButtonsRow>
          <SwiperButton className='swiper-prev'>
            <PreviosArrow width={24} height={24} />
          </SwiperButton>
          <SwiperButton className='swiper-next'>
            <ArrowIcon width={24} height={24} />
          </SwiperButton>
        </ButtonsRow>
      </Text>
      <CardList reviewsData={reviewsData} />
    </Container>
  </Wrapper>
);

export default Reviews;
