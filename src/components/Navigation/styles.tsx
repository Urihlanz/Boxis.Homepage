import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1030px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
