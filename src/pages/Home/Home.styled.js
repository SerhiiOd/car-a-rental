import styled from 'styled-components';
import image from '../../images/home.jpeg';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 54px;

  z-index: -1;

  margin: auto;
  padding: 40px 20px 20px 20px;
  max-width: auto;
  min-height: 100vh;
  width: 97%;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
`;

export const Section = styled.div``;
export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 25px;
  border-radius: 10px;

  backdrop-filter: blur(5px);
  border: 1px solid #ffffff;

  box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -webkit-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -moz-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const ListItem = styled.li`
  width: 350px;
  min-height: 175px;

  padding: 25px;
  border-radius: 10px;

  backdrop-filter: blur(5px);
  border: 1px solid #ffffff;

  box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -webkit-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -moz-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
`;

export const TitleItem = styled.h2`
  display: block;
  font-weight: 500;

  margin-bottom: 20px;

  color: #ffffff;
`;

export const TextItem = styled.p`
  display: block;
  color: #ffffff;
`;
