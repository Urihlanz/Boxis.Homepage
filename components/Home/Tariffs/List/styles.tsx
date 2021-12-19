import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 54px;

  @media (max-width: 1270px) {
    margin-top: 0;
  }
`;

export const List = styled.div`
  display: flex;
  z-index: 1;

  @media (max-width: 1270px) {
    display: none;
  }
`;

export const ListWithSwiper = styled.div`
  display: none;

  @media (max-width: 1270px) {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .swiper {
    width: 100%;
    height: 550px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  .swiper-pagination-bullet-active {
    background: #f4566f;
  }
`;
