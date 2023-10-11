import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

export const ModalWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 540px;
  height: auto;
  padding: 40px;
  border-radius: 24px;

  z-index: 2;

  overflow-y: auto;

  background-color: #ffffff;
`;

export const ModalImgBlock = styled.div`
  width: 540px;
  height: 314px;
  margin-bottom: 10px;
  border-radius: 20px;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const ImgModal = styled.img`
  width: 540px;
  height: 314px;
  border-radius: 20px;

  overflow: hidden;
`;

export const ModalTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 133.333%;
  color: #121417;
`;

export const ModalSubTitle = styled.span`
  color: #3470ff;
`;

export const ModalInfoBlock = styled.div`
  display: flex;
  width: 290px;
  height: 40px;

  margin-bottom: 14px;
`;

export const ModalInfoText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const ModalInfoDiscript = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 142.857%;
  color: #121417;
`;

export const ModalDiscriptTitle = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.857%;

  margin-bottom: 8px;
  color: #121417;
`;

export const ModalAccessText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const ModalFuncText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const ModalRentalBlock = styled.div`
  margin-bottom: 24px;
`;

export const ModalRentalTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 142.857%;
  color: #121417;

  margin-bottom: 8px;
`;

export const ModalRentalSubBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 461px;
  gap: 8px;
`;

export const ModalRentalAgeName = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;

  display: flex;
  width: 105px;
  padding: 7px 14px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;

  color: #363535;
  background-color: #f9f9f9;
`;
export const ModalRentalAgeSpan = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const ModalRentalLicense = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  display: flex;
  width: 110px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;

  color: #363535;
  background-color: #f9f9f9;
`;

export const ModalRentalDeposit = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  display: flex;
  padding: 7px 14px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;

  color: #363535;
  background-color: #f9f9f9;
`;

export const ModalRentalMile = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;

  display: flex;
  width: 83px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;

  color: #363535;
  background-color: #f9f9f9;
`;

export const ModalRentalSubMile = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const ModalRentalPrice = styled.p`
  /* font-family: Montserrat; */
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;

  display: flex;
  width: 58px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;

  color: #363535;
  background-color: #f9f9f9;
`;

export const ModalRentalSubPrice = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const RentalLink = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #ffffff;
  background-color: #3470ff;
  transition: 450ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;
