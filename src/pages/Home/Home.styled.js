import styled from 'styled-components';
import image from '../../images/home.jpeg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  padding: 40px 20px;
  min-height: 100vh;
  width: 97%;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const Title = styled.h1`
  padding: 5px;
  border-radius: 10px;

  color: #ffffff;
  background-color: #000000;
`;

export const SubTitle = styled.h2`
  padding: 5px;
  border-radius: 10px;
  background-color: #000000;

  color: #ffffff;
`;

export const Section = styled.div`
  margin-bottom: 45px;
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 25px;
  margin-bottom: 45px;

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
  min-height: 220px;

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
  padding: 5px;
  border-radius: 10px;
  background-color: #000000;

  margin-bottom: 20px;

  color: #ffffff;
`;

export const TextItem = styled.p`
  display: block;
  min-height: 160px;
  padding: 5px;
  border-radius: 10px;

  color: #ffd700;
  background-color: #000000;
`;

export const SectionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
