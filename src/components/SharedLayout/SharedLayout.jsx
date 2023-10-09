import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';

import { StyledHeader, LogoCar } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <LogoCar src={logo} alt="Logo" />
        <Navigation />
      </StyledHeader>
    </>
  );
};

export default SharedLayout;
