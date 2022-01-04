import { Button } from 'boxis-uikit';
import styled from 'styled-components';

import BackgroundGrid from './BackgroundGrid';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 230px 360px 120px 217px;
  background: #282828;

  @media (max-width: 1245px) {
    padding: 35px;
  }

  @media (max-width: 1910px) {
    padding: 200px 360px;
  }

  @media (max-width: 1600px) {
    padding: 75px 360px;
  }

  @media (max-width: 600px) {
    padding: 36px 26px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1910px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 40%;
  margin-bottom: 130px;
  margin-left: 90px;

  @media (max-width: 1910px) {
    margin-bottom: 47px;
    margin-left: 0;
    width: 100%;
    order: 1;
  }
`;

export const Title = styled.h2`
  font-size: 56px;
  line-height: 68px;
  margin-bottom: 30px;
  color: #fff;

  @media (max-width: 1030px) {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 12px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 49px;
  color: #939393;

  @media (max-width: 1030px) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 26px;
  }
`;

export const CreateSiteButton = styled(Button)`
  height: 64px;
  padding: 0 48px;
  font-size: 19px;

  @media (max-width: 1030px) {
    height: 48px;
    padding: 0 32px;
    font-size: 14px;
  }
`;

export const LaptopBlock = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 1910px) {
    align-items: center;
    order: 2;
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
  top: -84px;
  right: -26px;

  @media (max-width: 1250px) {
    display: none;
  }
`;

export const BottomGrid = styled(Grid)`
  bottom: 180px;
  left: -40px;

  @media (max-width: 1250px) {
    display: none;
  }
`;

export const LaptopImage = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 1470px) {
    width: 500px;
    height: 300px;
  }

  @media (max-width: 500px) {
    width: 320px;
    height: 200px;
  }
`;

export const ExampleImage = styled.div`
  position: absolute;
  top: 24px;
  right: 110px;
  z-index: 2;

  @media (max-width: 1470px) {
    width: 290px;
    height: 190px;
  }

  @media (max-width: 500px) {
    width: 230px;
    height: 160px;
    top: 10px;
    right: 47px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  margin-top: 86px;

  @media (max-width: 1030px) {
    margin-top: 28px;
  }
`;

export const SlideButton = styled.button<{ isActive: boolean }>`
  padding: 0 21px;
  height: 40px;
  background: none;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 56px;
  color: #fff;

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.isActive &&
    `
    background-color: #fff;
    border-radius: 56px;
    color: #1E1E1E;
  `}

  @media (max-width: 1030px) {
    padding: 0 16px;
    margin-right: 0;
    font-size: 14px;
  }
`;

export const PointListRow = styled.div`
  display: none;

  @media (max-width: 1250px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5px;
    margin-top: 13px;
  }
`;

export const Point = styled.div<{ isActive: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.isActive &&
    `
    background-color: #F4566F;
  `}
`;
