import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  padding: 40px 20px;
  min-height: 100vh;
  width: 97%;
`;
export const SectionListCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px 29px;

  margin-bottom: 100px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 274px;
  height: 426px;
  border-radius: 0 0 12px 12px;

  background-color: #ffffff;
`;

export const ImgBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 401px;
  height: 268px;
  flex-shrink: 0;

  border-radius: 0 0 125px 125px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const AllInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 19px;
`;

export const TitleText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: #121417;
`;

export const TitlePrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: #121417;
`;

export const InfoBlock = styled.div`
  margin-bottom: 29px;
  padding-right: 32px;
`;

export const InfoText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const BtnOpenModal = styled.button`
  width: 274px;
  padding: 12px 99px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  border: none;
  transition: 450ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;

export const ButtonFavorite = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const MoreBtn = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  padding: 12px 35px;
  border-radius: 12px;

  color: #3470ff;
  background-color: #ffffff;

  border: none;

  text-decoration-line: underline;

  transition: 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    color: #0b44cd;
  }
`;
