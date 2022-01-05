import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 302px;
  height: 441px;
  padding: 45px 31px 45px 31px;
  border-radius: 24px;
  margin-right: 44px;
  background: #ffffff;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1040px) {
    width: 294px;
    height: 284px;
    padding: 20px 16px 57px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 56px;
  margin-bottom: 30px;

  @media (max-width: 1040px) {
    margin-bottom: 15px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  background: linear-gradient(#a3366d, #f4576f);
  border-radius: 50%;
  margin-right: 21px;

  @media (max-width: 1040px) {
    width: 48px;
    height: 48px;
    margin-right: 14px;
  }
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.h5`
  font-size: 16px;
  margin-bottom: 7px;

  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

export const CreationDate = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #787878;

  @media (max-width: 1040px) {
    font-size: 12px;
  }
`;

export const Body = styled.p`
  font-size: 18px;
  line-height: 27px;
  overflow: hidden;

  @media (max-width: 1040px) {
    font-size: 16px;
  }
`;
