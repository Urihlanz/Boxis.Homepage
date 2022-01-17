import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 34px;
  }
`;
