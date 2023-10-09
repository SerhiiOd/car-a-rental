import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;

  padding: 20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  background: rgb(226, 131, 35);
  background: linear-gradient(
    112deg,
    rgba(226, 131, 35, 1) 0%,
    rgba(176, 116, 49, 1) 20%,
    rgba(237, 151, 54, 1) 37%,
    rgba(193, 117, 32, 1) 54%,
    rgba(233, 139, 31, 1) 69%,
    rgba(208, 131, 44, 1) 84%,
    rgba(210, 121, 18, 1) 100%
  );
`;

export const LogoCar = styled.img`
  width: 100px;
`;

// *****************

export const StyledLink = styled(NavLink)``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 45px;
  }
`;
