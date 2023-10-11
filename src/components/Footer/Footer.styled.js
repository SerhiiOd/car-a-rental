import styled from 'styled-components';

export const StyledFooterHome = styled.footer`
  display: flex;
  align-items: center;

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

  &.footer-catalog {
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

export const ContactsBlock = styled.div`
  margin-left: 75px;
`;

export const ContactsList = styled.ul``;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
`;

export const ContactsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 450px;
`;

export const FormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;
  margin-right: 10px;

  border-radius: 25px;

  border: 1px solid red;
  background-color: transparent;

  box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -webkit-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -moz-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 25px;

  border: 1px solid red;
`;
