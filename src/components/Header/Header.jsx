import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';

import { StyledHeaderHome, LogoCar, LinkLogo } from './Header.styled';

const HeaderHome = () => {
  return (
    <>
      <StyledHeaderHome>
        <LinkLogo href="/car-a-rental">
          <LogoCar src={logo} alt="Logo" />
        </LinkLogo>
        <Navigation />
      </StyledHeaderHome>
    </>
  );
};

export default HeaderHome;
