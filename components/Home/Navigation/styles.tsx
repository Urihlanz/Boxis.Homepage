import styled from 'styled-components';

export const Navbar = styled.nav<{ stackedMenu: boolean }>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.stackedMenu
      ? `
      @media (max-width: 930px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 34px;
      }
    `
      : `
      @media (max-width: 930px) {
        display: none;
      }
  `}
`;
