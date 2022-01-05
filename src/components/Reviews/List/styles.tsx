import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;

  @media (max-width: 1755px) {
    position: static;
  }

  @media (max-width: 1040px) {
    height: 335px;
  }
`;

export const CardsList = styled.div`
  display: flex;
  max-width: 1000px;

  @media (max-width: 1040px) {
    max-width: 287px;
  }

  .swiper-pagination-bullet-active {
    background: #f4566f;
  }

  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
  }
`;
