import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;

  padding: 20px 60px;

  background: rgb(255, 190, 118);
  background: linear-gradient(
    112deg,
    rgba(255, 190, 118, 0.9136029411764706) 0%,
    rgba(255, 163, 59, 0.9108018207282913) 20%,
    rgba(255, 146, 22, 0.9108018207282913) 40%,
    rgba(255, 137, 0, 0.9108018207282913) 60%,
    rgba(199, 106, 0, 0.9192051820728291) 80%,
    rgba(210, 121, 18, 0.9108018207282913) 100%
  );

  &.header-catalog {
    background: rgb(113, 113, 113);
    background: linear-gradient(
      112deg,
      rgba(113, 113, 113, 0.9136029411764706) 0%,
      rgba(69, 67, 64, 0.9108018207282913) 20%,
      rgba(60, 56, 51, 0.9108018207282913) 40%,
      rgba(37, 34, 31, 0.9108018207282913) 60%,
      rgba(34, 29, 24, 0.9192051820728291) 80%,
      rgba(13, 10, 7, 0.9108018207282913) 100%
    );
  }
`;
export const LinkLogo = styled.a``;

export const LogoCar = styled.img`
  width: 100px;

  filter: drop-shadow(2px 2px 0.75px red);
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  font-weight: 600;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  :not(:last-child) {
    margin-right: 45px;
  }
`;
