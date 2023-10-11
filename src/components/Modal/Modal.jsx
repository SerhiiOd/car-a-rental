import React, { useEffect } from 'react';
import {
  Backdrop,
  ModalWindow,
  ModalImgBlock,
  ImgModal,
  ModalTitle,
  ModalSubTitle,
  ModalInfoBlock,
  ModalInfoText,
  ModalInfoDiscript,
  ModalDiscriptTitle,
  ModalAccessText,
  ModalFuncText,
  ModalRentalBlock,
  ModalRentalTitle,
  ModalRentalSubBlock,
  ModalRentalAgeName,
  ModalRentalAgeSpan,
  ModalRentalLicense,
  ModalRentalDeposit,
  ModalRentalMile,
  ModalRentalSubMile,
  ModalRentalPrice,
  ModalRentalSubPrice,
  ModalCloseBtn,
  RentalLink,
} from './Modal.styled';

import sprite from '../../images/sprite.svg';

const Modal = ({ advert, closeModal }) => {
  const addressParts = advert.address.split(', ');
  const city = addressParts[1] || '';
  const country = addressParts[2] || '';

  const rentalConditions = advert.rentalConditions || '';
  const conditionsArray = rentalConditions.split('\n');
  const minimumAgeCondition = conditionsArray[0] || '';
  const minimumAgeParts = minimumAgeCondition.split(':');
  const minimumAgeName = minimumAgeParts[0].trim();
  const minimumAgeValue = minimumAgeParts[1].trim();
  const driverLicense = conditionsArray[1] || '';
  const securityDeposit = conditionsArray[2] || '';

  useEffect(() => {
    const handleEscKey = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [closeModal]);

  const handleModalClick = e => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={closeModal}>
      <ModalWindow onClick={handleModalClick}>
        <ModalImgBlock>
          <ImgModal src={advert.img} alt="Car" />
        </ModalImgBlock>
        <div style={{ marginBottom: 8 }}>
          <ModalTitle>
            <b>
              {advert.make} <ModalSubTitle>{advert.model}</ModalSubTitle>,{' '}
              {advert.year}
            </b>
          </ModalTitle>
        </div>

        <ModalInfoBlock>
          <ModalInfoText>
            {city} | {country} | id:{advert.id} | Year:{advert.year} | Type:
            {advert.type} | Fuel Consumption:{advert.fuelConsumption} | Engine
            Size:{advert.engineSize}
          </ModalInfoText>
        </ModalInfoBlock>

        <div style={{ marginBottom: 24 }}>
          <ModalInfoDiscript>
            <b>{advert.description}</b>
          </ModalInfoDiscript>
        </div>

        <div style={{ marginBottom: 24 }}>
          <ModalDiscriptTitle>
            <b>Accessories and functionalities:</b>
          </ModalDiscriptTitle>
          <ModalAccessText>
            {advert.accessories[0]} | {advert.accessories[1]} |{' '}
            {advert.accessories[2]}
          </ModalAccessText>
          <ModalFuncText>
            {advert.functionalities[0]} | {advert.functionalities[1]} |{' '}
            {advert.functionalities[2]}
          </ModalFuncText>
        </div>

        <ModalRentalBlock>
          <ModalRentalTitle>
            <b>Rental Conditions:</b>
          </ModalRentalTitle>

          <ModalRentalSubBlock>
            <ModalRentalAgeName>
              {minimumAgeName} :{' '}
              <ModalRentalAgeSpan>{minimumAgeValue}</ModalRentalAgeSpan>
            </ModalRentalAgeName>
            <ModalRentalLicense>{driverLicense}</ModalRentalLicense>
            <ModalRentalDeposit>{securityDeposit}</ModalRentalDeposit>
            <ModalRentalMile>
              Mileage:
              <ModalRentalSubMile>{advert.mileage}</ModalRentalSubMile>
            </ModalRentalMile>
            <ModalRentalPrice>
              Price:
              <ModalRentalSubPrice>{advert.rentalPrice}</ModalRentalSubPrice>
            </ModalRentalPrice>
          </ModalRentalSubBlock>
        </ModalRentalBlock>

        <ModalCloseBtn type="button" onClick={closeModal}>
          <svg style={{ width: 24, height: 24 }}>
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </ModalCloseBtn>

        <RentalLink href="tel: +380730000000">Rental car</RentalLink>
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
