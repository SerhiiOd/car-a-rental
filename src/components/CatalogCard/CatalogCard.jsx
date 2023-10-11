import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import Modal from '../Modal/Modal';

import {
  Card,
  ImgBlock,
  Img,
  AllInfoBlock,
  TitleBlock,
  TitleText,
  TitlePrice,
  InfoBlock,
  InfoText,
  BtnOpenModal,
  ButtonFavorite,
} from './CatalogCard.styled';

const CatalogCard = ({
  advert,
  isFavorite,
  onFavoriteClick,
  onRemoveFavoriteClick,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(isFavorite);

  const addressParts = advert.address.split(', ');
  const city = addressParts[1] || '';
  const country = addressParts[2] || '';

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Card>
      <ImgBlock>
        <Img src={advert.img} alt="Car" />
        <ButtonFavorite
          onClick={() => {
            if (isFavorite) {
              onRemoveFavoriteClick(advert);
            } else {
              onFavoriteClick(advert, city, country);
            }
            setIsInFavorites(!isInFavorites);
          }}
        >
          <svg
            style={{
              width: 18,
              height: 18,
              fill: isInFavorites ? '#3470FF' : 'none',
              stroke: isInFavorites ? 'none' : '#fff',
            }}
          >
            <use xlinkHref={`${sprite}#heart`} />
          </svg>
        </ButtonFavorite>
      </ImgBlock>

      <AllInfoBlock>
        <TitleBlock>
          <TitleText>
            {advert.make}, {advert.year}
          </TitleText>
          <TitlePrice>{advert.rentalPrice}</TitlePrice>
        </TitleBlock>

        <InfoBlock>
          <InfoText>
            {city} | {country} | {advert.rentalCompany} | {advert.type} |{' '}
            {advert.model} | {advert.mileage}
          </InfoText>
        </InfoBlock>

        <div>
          <BtnOpenModal type="button" onClick={openModal}>
            Learn more
          </BtnOpenModal>
        </div>
      </AllInfoBlock>

      {isModalOpen && <Modal advert={advert} closeModal={closeModal} />}
    </Card>
  );
};

export default CatalogCard;
