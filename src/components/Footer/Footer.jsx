import React from 'react';
import logo from '../../images/logo.png';

import {
  RiMailFill,
  RiPhoneFill,
  RiMapPinFill,
  RiNotification2Fill,
} from 'react-icons/ri';

import {
  StyledFooterHome,
  ContactsBlock,
  ContactsList,
  ContactsItem,
  ContactsLink,
  FormBlock,
  FormBtn,
  FormInput,
} from './Footer.styled';
import { LinkLogo, LogoCar } from '../Header/Header.styled';

const FooterHome = () => {
  return (
    <>
      <StyledFooterHome>
        <LinkLogo href="/car-a-rental">
          <LogoCar src={logo} alt="Logo" />
        </LinkLogo>

        <ContactsBlock>
          <ContactsList>
            <ContactsItem>
              <ContactsLink href="tel: +380730000000">
                <RiPhoneFill />: +380730000000
              </ContactsLink>
            </ContactsItem>

            <ContactsItem>
              <ContactsLink href="mailto: rental.car@drive.com">
                <RiMailFill />: rental.car@drive.com
              </ContactsLink>
            </ContactsItem>

            <ContactsItem>
              <ContactsLink>
                <RiMapPinFill />: Fantasy Street, 123 Odessa, Ukraine
              </ContactsLink>
            </ContactsItem>
          </ContactsList>
        </ContactsBlock>

        <FormBlock>
          <FormBtn type="submit">
            <RiNotification2Fill />
            Follow
          </FormBtn>
          <FormInput />
        </FormBlock>
      </StyledFooterHome>
    </>
  );
};

export default FooterHome;
