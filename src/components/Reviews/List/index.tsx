import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Item from '../Item';
import { CardsList, Wrapper } from './styles';

SwiperCore.use([Pagination, Navigation]);

type ReviewsDataProps = {
  userAvatar: string;
  userName: string;
  date: string;
  text: string;
};

type Props = {
  reviewsData: ReviewsDataProps[];
};

const List: React.FC<Props> = ({ reviewsData }) => {
  return (
    <Wrapper>
      <CardsList>
        <Swiper
          className='mySwiper'
          pagination={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          breakpoints={{
            1040: {
              pagination: false,
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
        >
          {reviewsData.map((props: ReviewsDataProps, index) => (
            <SwiperSlide key={index}>
              <Item
                userAvatar={props.userAvatar}
                userName={props.userName}
                date={props.date}
                text={props.text}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsList>
    </Wrapper>
  );
};

export default List;
