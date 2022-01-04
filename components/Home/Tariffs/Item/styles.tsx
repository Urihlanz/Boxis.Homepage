import { Button } from 'boxis-uikit';
import styled from 'styled-components';

import Check from './Check';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 379px;
  height: 623px;
  padding-bottom: 36px;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 24px;
  margin-right: 32px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1270px) {
    width: 286px;
    height: 480px;
    box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.08);
  }
`;

export const Recommended = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 7px;
    top: -30px;
    right: 0;
    width: 379px;
    height: 400px;
    background: #efb74a;
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    font-size: 13px;
    color: #fff;
    position: absolute;
    z-index: -1;

    @media (max-width: 1270px) {
      width: 286px;
      height: 480px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 27px 0;
  border-bottom: 2px solid #e6e6e6;

  @media (max-width: 1270px) {
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 9px;

  @media (max-width: 1270px) {
    font-size: 24px;
  }
`;

export const Price = styled.h5`
  font-size: 32px;

  @media (max-width: 1270px) {
    font-size: 24px;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  height: 321px;
  padding: 0 83px;

  @media (max-width: 1270px) {
    height: 230px;
    padding: 0 38px;
    align-items: flex-start;
  }
`;

export const Feature = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-left: 25px;
  margin-bottom: 20px;

  @media (max-width: 1270px) {
    margin-bottom: 16px;
    font-size: 12px;
    margin-left: 22px;
  }
`;

export const ActiveFeature = styled(Feature)`
  position: relative;
`;

export const CheckIcon = styled(Check)`
  position: absolute;
  top: 2px;
  left: -22px;
  width: 12px;
  height: 12px;
`;

export const InactiveFeature = styled(Feature)`
  color: #ababab;
`;

export const SelectButton = styled(Button)`
  height: 64px;
  padding: 0 73px;
  font-size: 16px;
  margin-top: 21px;

  @media (max-width: 1270px) {
    height: 48px;
    padding: 0 32px;
    font-size: 14px;
  }
`;
