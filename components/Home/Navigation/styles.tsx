import styled from 'styled-components';

export const Navbar = styled.nav<{ hasBurgerMenu: boolean }>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.hasBurgerMenu
      ? `
      @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 34px;
      }
    `
      : `
      @media (max-width: 900px) {
        display: none;
      }
  `}
`;
