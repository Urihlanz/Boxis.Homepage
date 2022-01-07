import { Button } from 'boxis-uikit';
import styled from 'styled-components';

import { NavLink } from '../Navigation/Item/styles';
import { Container as MainContainer } from '../styles';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  padding: 87px 0 81px 0;
  width: 100%;

  @media (max-width: 930px) {
    padding: 39px 0 37px 0;
  }
`;

export const Container = styled(MainContainer)`
  @media (max-width: 1220px) {
    padding: 0;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 80px;
  border-bottom: solid 1px #3d3d3d;

  ${NavLink} {
    color: #fff;
  }

  @media (max-width: 1220px) {
    padding: 0 17px 34px 17px;
  }

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 17px 34px 17px;
  }
`;

export const CreateSiteButton = styled(Button)`
  height: 48px;
  padding: 0 32px;
  font-size: 14px;

  @media (max-width: 930px) {
    margin-top: 34px;
    height: 36px;
    padding: 0 18px;
    border-radius: 8px;
  }
`;

export const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;

  @media (max-width: 1220px) {
    padding: 17px 17px 0 17px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 17px 17px 0 17px;
  }
`;

export const Copyright = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #939393;

  @media (max-width: 930px) {
    order: 3;
  }
`;

export const Links = styled.div`
  display: flex;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 63px;
  flex-wrap: wrap;

  @media (max-width: 930px) {
    margin-bottom: 23px;
    margin-right: 0;
  }
`;

export const LegalLink = styled.a`
  color: #a9a9a9;
  margin-right: 55px;
  font-weight: 500;
  font-size: 14px;
  line-height: 27px;

  @media (max-width: 930px) {
    margin-right: 30px;
  }

  &:last-child {
    margin-right: 0;

    @media (max-width: 930px) {
      margin-right: 0;
    }
  }
`;

export const SocialLinksRow = styled.div`
  display: flex;

  @media (max-width: 930px) {
    margin-bottom: 23px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 11px;
  cursor: poiner;

  &:last-child {
    margin-right: 0;
  }
`;
