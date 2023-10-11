import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';

import { StyledHeader, LogoCar, LinkLogo } from './Header.styled';

const HeaderHome = () => {
  return (
    <>
      <StyledHeader className="">
        <LinkLogo href="/car-a-rental">
          <LogoCar src={logo} alt="Logo" />
        </LinkLogo>
        <Navigation />
      </StyledHeader>
    </>
  );
};

const HeaderCatalogFavorite = () => {
  return (
    <StyledHeader className="header-catalog">
      <LinkLogo href="/car-a-rental">
        <LogoCar src={logo} alt="Logo" />
      </LinkLogo>
      <Navigation />
    </StyledHeader>
  );
};

export { HeaderHome, HeaderCatalogFavorite };
