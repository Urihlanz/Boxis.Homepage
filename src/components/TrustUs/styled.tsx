import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 27px;

  @media (max-width: 1190px) {
    font-size: 16px;
    margin-bottom: 19px;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CounterValue = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 45px;
  font-weight: 500;
  margin-left: 21px;

  @media (max-width: 1190px) {
    font-size: 33px;
  }
`;
