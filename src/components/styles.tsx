import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 930px) {
    padding-top: 65px;
  }
`;

export const Container = styled.div`
  max-width: 1220px;
  padding: 0 10px;
  width: 100%;

  @media (max-width: 1220px) {
    padding: 0 17px;
  }
`;

export const Image = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;
