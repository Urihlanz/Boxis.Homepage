import styled from 'styled-components';

import { Container as MainContainer } from '../styles';
import OverlayImage from './images/overlayImage.png';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 180px 0 168px 0;

  @media (max-width: 980px) {
    padding: 48px 0;
  }
`;

export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 62px;

  @media (max-width: 980px) {
    margin-bottom: 21px;
  }
`;

export const Title = styled.h2`
  font-size: 56px;
  margin-bottom: 36px;

  @media (max-width: 980px) {
    font-size: 24px;
    margin-bottom: 11px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  max-width: 417px;
  color: #787878;

  @media (max-width: 980px) {
    font-size: 14px;
    line-height: 21px;
    width: 100%;
  }
`;

export const VideoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.05);
  border-radius: 24px;

  @media (max-width: 980px) {
    box-shadow: none;
  }
`;

export const VideoInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 892px;
  height: 507px;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 980px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 645px) {
    width: 287px;
    height: 191px;
  }
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const VideoOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: url(${OverlayImage}) rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-blend-mode: multiply;
`;

export const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 128px;
  background: linear-gradient(93.92deg, #a3366d -48.98%, #f4576f 59.1%);
  border-radius: 50%;
  margin-bottom: 38px;

  @media (max-width: 645px) {
    width: 57px;
    height: 57px;
    margin-bottom: 10px;
  }
`;

export const PlayTriangle = styled.div`
  border-top: 15px solid transparent;
  border-left: 25px solid #fff;
  border-bottom: 15px solid transparent;
  margin-left: 5px;

  @media (max-width: 645px) {
    border-top: 7px solid transparent;
    border-left: 12px solid #fff;
    border-bottom: 7px solid transparent;
    margin-left: 3px;
  }
`;

export const OverlayText = styled.h5`
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  max-width: 210px;
  color: #fff;

  @media (max-width: 645px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
`;
