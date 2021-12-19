import styled from 'styled-components';

import { Container as MainContainer } from '../styles';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0 183px 0;
  background-color: #fff;

  @media (max-width: 1270px) {
    padding: 0 0 48px 0;
  }
`;

export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
  padding: 0;
`;

export const Title = styled.h3`
  font-size: 56px;
  margin-bottom: 44px;

  @media (max-width: 1270px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 64px;
  border-radius: 56px;
  background-color: #eceffb;

  @media (max-width: 1270px) {
    height: 52px;
    padding: 0 6px;
    margin: 0 17px;
  }
`;

export const PeriodButton = styled.button<{ isActive: boolean }>`
  position: relative;
  padding: 0 25px;
  height: 40px;
  background: none;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 1270px) {
    padding: 0 17px;
    font-size: 12px;
    margin-right: 0;
  }

  ${(props) =>
    props.isActive &&
    `
    background-color: #fff;
    border-radius: 56px;
    
  `}

  &:last-child {
    margin-right: 0;
  }

  &:nth-child(2)::after {
    content: '-15%';
    position: absolute;
    top: -4px;
    right: 0;
    padding: 1px 6px;
    background: #42c275;
    border-top-left-radius: 100px;
    border-top-right-radius: 56px;
    border-bottom-right-radius: 56px;
    font-size: 11px;
    color: #fff;

    @media (max-width: 1270px) {
      padding: 1px 5px;
      font-size: 9px;
      top: 0;
      right: 6px;
    }
  }

  &:nth-child(3)::after {
    content: '-25%';
    position: absolute;
    top: -4px;
    right: 0;
    padding: 1px 6px;
    background: #f16c6c;
    border-top-left-radius: 100px;
    border-top-right-radius: 56px;
    border-bottom-right-radius: 56px;
    font-size: 11px;
    color: #fff;

    @media (max-width: 1270px) {
      padding: 1px 5px;
      font-size: 9px;
      top: 0;
      right: 6px;
    }
  }
`;
