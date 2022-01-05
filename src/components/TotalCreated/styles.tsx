import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 130px 380px;
  background: #f7f9fd;
  position: relative;
  z-index: -1;

  @media (max-width: 1600px) {
    justify-content: center;
    padding: 0;
    height: 1000px;
  }

  @media (max-width: 1190px) {
    height: 850px;
  }

  @media (max-width: 900px) {
    height: 700px;
  }

  @media (max-width: 600px) {
    height: 580px;
  }

  @media (max-width: 400px) {
    height: 440px;
  }
`;

export const Container = styled.div`
  width: 100%;

  @media (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 416px;
  z-index: 1;
  background-color: #f7f9fd;

  @media (max-width: 1600px) {
    justify-content: center;
    width: 100%;
    padding: 36px 0;
  }
`;

export const ImageBlock = styled.div`
  position: absolute;
  right: -380px;
  top: -280px;

  @media (max-width: 1600px) {
    right: -105px;
    top: 0;
  }

  @media (max-width: 850px) {
    right: -100px;
    top: 0;
    width: 900px;
    height: 900px;
  }

  @media (max-width: 650px) {
    right: -40px;
    top: 140px;
    width: 650px;
    height: 650px;
  }

  @media (max-width: 550px) {
    right: -180px;
    top: 50px;
    width: 650px;
    height: 650px;
  }
`;
export const ConstructorIconSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 24px;
  margin-bottom: 36px;
  background-color: rgba(217, 75, 110, 0.12);

  @media (max-width: 1190px) {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 29px;

  @media (max-width: 1190px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 11px;
    width: 196px;
  }
`;

export const Value = styled.h5`
  font-size: 76px;

  @media (max-width: 1190px) {
    font-size: 32px;
  }
`;
