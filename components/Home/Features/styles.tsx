import styled from 'styled-components';

import { Container as MainContainer } from '../styles';
import TrustUs from '../TrustUs';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 180px 0;

  @media (max-width: 1190px) {
    padding: 30px 0;
  }
`;

export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TrustUsBlock = styled(TrustUs)`
  display: none;

  @media (max-width: 1190px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 29px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 675px;
  margin-bottom: 100px;

  @media (max-width: 1190px) {
    width: 100%;
    margin-top: 52px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 56px;
  line-height: 68px;
  margin-bottom: 31px;

  @media (max-width: 1190px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  max-width: 417px;
  color: #787878;

  @media (max-width: 1190px) {
    font-size: 14px;
    line-height: 21px;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1190px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FeaturesImage = styled.div`
  position: relative;
  width: 40%;

  @media (max-width: 1190px) {
    width: 340px;
    height: 337px;
    margin-bottom: 34px;
  }
`;

export const OurFeatures = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 45%;

  @media (max-width: 1190px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    margin-top: 34px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  width: 193px;
  height: 260px;

  &:nth-child(2n + 1) {
    margin-right: 124px;

    @media (max-width: 1190px) {
      margin-right: 0;
    }
  }

  &:nth-child(2) {
    margin-bottom: 67px;

    @media (max-width: 1190px) {
      margin-bottom: 32px;
    }
  }

  @media (max-width: 1190px) {
    align-items: center;
    width: 277px;
    height: 150px;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FeatureIconSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 24px;
  margin-bottom: 13px;

  @media (max-width: 1190px) {
    width: 64px;
    height: 64px;
    margin-bottom: 11px;
  }
`;

export const AutoOrderIconSquare = styled(FeatureIconSquare)`
  background-color: rgba(81, 114, 232, 0.1);
`;

export const PieChartIconSquare = styled(FeatureIconSquare)`
  background-color: rgba(255, 134, 22, 0.1);
`;

export const OnlinePayIconSquare = styled(FeatureIconSquare)`
  background-color: rgba(22, 173, 183, 0.1);
`;

export const SafetyIconSquare = styled(FeatureIconSquare)`
  background-color: rgba(244, 87, 111, 0.1);
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 4px;

  @media (max-width: 1190px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

export const FeatureText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #787878;

  @media (max-width: 1190px) {
    font-size: 14px;
    line-height: 21px;
  }
`;
