import styled from 'styled-components';

import { Container as MainContainer } from '../styles';
import TrustUs from '../TrustUs';
import BackgroundCircle from './BackgroundCircle';
import BackgroundGrid from './BackgroundGrid';
import InstagramIcon from './InstagramIcon';
import PieChartIcon from './PieChartIcon';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 790px;
  background: linear-gradient(
    162deg,
    rgba(254, 254, 254, 1) 0%,
    rgba(246, 246, 246, 1) 65%
  );
  padding-top: 25px;

  @media (max-width: 930px) {
    height: 740px;
  }
`;

export const Container = styled(MainContainer)`
  display: flex;
  align-items: center;

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 57%;

  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 70px;
  margin-bottom: 36px;

  @media (max-width: 930px) {
    margin-bottom: 25px;
    font-size: 32px;
    line-height: 35px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 36px;
  max-width: 376px;

  @media (max-width: 930px) {
    max-width: 253px;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 15px;
  }
`;

export const CreateSiteButton = styled.button`
  height: 65px;
  padding: 0 50px;
  margin-bottom: 60px;
  border-radius: 16px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  background: linear-gradient(
    133deg,
    rgba(163, 54, 109, 1) 0%,
    rgba(244, 87, 111, 1) 65%
  );

  @media (max-width: 930px) {
    height: 50px;
    padding: 0 32px;
    font-size: 14px;
  }
`;

export const TrustUsBlock = styled(TrustUs)`
  @media (max-width: 1190px) {
    display: none;
  }
`;

export const Picture = styled.div`
  position: relative;
  width: 43%;
  height: 100%;
  z-index: 20;

  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const Circle = styled(BackgroundCircle)`
  position: absolute;
  width: 736px;
  height: 530px;
  object-fit: cover;
  bottom: 0;
  right: -395px;

  @media (max-width: 930px) {
    width: 430px;
    height: 340px;
    bottom: -18px;
    right: -200px;
  }

  @media (min-width: 400px) and (max-width: 930px) {
    width: 550px;
    height: 460px;
  }

  @media (max-width: 400px) {
    width: 430px;
    height: 340px;
    bottom: -4px;
    right: -200px;
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
  top: 115px;
  right: -230px;

  @media (max-width: 930px) {
    top: -45px;
    right: -60px;
  }

  @media (min-width: 400px) and (max-width: 930px) {
    left: 50%;
    top: 50%;
    margin-left: 242px;
    margin-top: -284px;
  }
`;

export const BottomGrid = styled(Grid)`
  bottom: 72px;
  left: -50px;

  @media (max-width: 930px) {
    top: -45px;
    right: -60px;
    left: -110px;
  }

  @media (min-width: 400px) and (max-width: 930px) {
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: 78px;
  }
`;

export const PictureManLaptop = styled.div`
  position: absolute;
  bottom: 0;
  left: -50px;
  width: 575px;
  height: 646px;

  @media (max-width: 930px) {
    width: 400px;
    height: 433px;
    left: 25%;
  }

  @media (max-width: 865px) {
    left: 50%;
    top: 50%;
    margin-left: -203px;
    margin-top: -205px;
  }

  @media (max-width: 500px) {
    margin-top: -224px;
  }

  @media (max-width: 385px) {
    margin-top: -240px;
  }
`;

export const PictureSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 130px;
  height: 130px;
  background: #ffffff;
  box-shadow: 23px 14px 62px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  @media (max-width: 930px) {
    width: 58px;
    height: 58px;
  }
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  @media (max-width: 930px) {
    width: 40px;
    height: 40x;
  }
`;

export const StyledPieChartIcon = styled(PieChartIcon)`
  transform: rotate(-90deg);

  @media (max-width: 930px) {
    width: 24px;
    height: 24x;
  }
`;

export const PictureSquareTop = styled(PictureSquare)`
  top: 200px;
  left: 0;
  transform: rotate(27.55deg);

  @media (max-width: 930px) {
    top: 35px;
    left: -22px;
  }

  @media (min-width: 400px) and (max-width: 930px) {
    left: 50%;
    top: 50%;
    margin-left: -110px;
    margin-top: -155px;
  }
`;

export const PictureSquareBottom = styled(PictureSquare)`
  bottom: 190px;
  right: -110px;
  transform: rotate(78.55deg);

  @media (max-width: 930px) {
    bottom: 125px;
    right: -16px;
  }

  @media (min-width: 450px) and (max-width: 930px) {
    left: 50%;
    top: 50%;
    margin-left: 180px;
    margin-top: 20px;
  }
`;
