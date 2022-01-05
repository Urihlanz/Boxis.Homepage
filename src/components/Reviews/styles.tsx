import styled from 'styled-components';

import { Container as MainContainer } from '../styles';
import ArrowIcon from './ArrowIcon';
import BackgroundGrid from './BackgroundGrid';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 0 230px 0;
  background: #f7f9fd;
  position: relative;

  @media (max-width: 1200px) {
    padding: 120px 0 120px 0;
  }

  @media (max-width: 1040px) {
    padding: 36px 17px;
  }
`;

export const Grid = styled(BackgroundGrid)`
  position: absolute;
  width: 192px;
  height: 169px;

  @media (max-width: 930px) {
    width: 103px;
    height: 91px;
  }
`;

export const TopGrid = styled(Grid)`
  top: 45px;
  right: 0;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const BottomGrid = styled(Grid)`
  bottom: 230px;
  left: 0;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const Container = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1755px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 55px;
  width: 35%;
  position: static;
  z-index: 5;

  @media (max-width: 1755px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 1040px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-size: 56px;
  font-weight: 700;
  line-height: 66px;
  margin-bottom: 38px;

  @media (max-width: 1040px) {
    font-size: 24px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 14px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  max-width: 290px;
  color: #787878;
  margin-bottom: 60px;

  @media (max-width: 1040px) {
    max-width: 100%;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
`;

export const SwiperButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  padding: 23px 0;
  border: 2px solid #dfe1e4;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const PreviosArrow = styled(ArrowIcon)`
  transform: rotate(180deg);
`;
