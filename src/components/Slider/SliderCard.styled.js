import styled from 'styled-components';

export const Img = styled.img`
  width: 335px;
  height: 268px;

  margin-bottom: 10px;
  border-radius: 15px;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 335px;
  max-width: 335px;

  padding: 20px 17px;
  border-radius: 15px;

  backdrop-filter: blur(5px);
  border: 1px solid #ffffff;

  box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -webkit-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
  -moz-box-shadow: 0px 0px 45px 15px rgba(255, 255, 255, 0.4) inset;
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 10px;

  background-color: #000000;
`;

export const TitleCar = styled.p`
  color: #ffffff;
`;

export const SubTitleCar = styled.span`
  color: #ffd700;
`;
