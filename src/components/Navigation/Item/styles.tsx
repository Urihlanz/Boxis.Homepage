import styled from 'styled-components';

export const NavLink = styled.a<{ hasBurgerMenu: boolean }>`
  color: #1e1e1e;
  margin-right: 50px;

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.hasBurgerMenu
      ? `@media (max-width: 900px) {
        margin-bottom: 16px;
        color: #fff;

        &:last-child {
          margin-bottom: 0;
        }
      }`
      : ''}
`;
