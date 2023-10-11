import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectorFavorites } from '../../redux/favorites/selectors';
import { addToFavorites, removeFavorites } from '../../redux/favorites/slice';

import {
  Container,
  SectionListCard,
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
  MoreBtn,
} from './Favorites.styled';

import sprite from '../../images/sprite.svg';

import Modal from '../../components/Modal/Modal';
import { HeaderCatalogFavorite } from '../../components/Header/Header';
import { FooterCatalogFavorite } from '../../components/Footer/Footer';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector(getSelectorFavorites);

  const [visibleAdverts, setVisibleAdverts] = useState(8);
  const [selectedAdverts, setSelectedAdverts] = useState(
    Array(favoriteAdverts.length).fill(false)
  );

  const openModal = index => {
    const updatedSelectedAdverts = [...selectedAdverts];
    updatedSelectedAdverts[index] = true;
    setSelectedAdverts(updatedSelectedAdverts);
  };

  const closeModals = index => {
    const updatedSelectedAdverts = [...selectedAdverts];
    updatedSelectedAdverts[index] = false;
    setSelectedAdverts(updatedSelectedAdverts);
  };

  const loadMore = () => {
    setVisibleAdverts(prevVisibleAdverts => prevVisibleAdverts + 8);
  };

  const handleFavoriteClick = advert => {
    const isFavorite = favoriteAdverts.some(
      favorite => favorite.id === advert.id
    );

    if (isFavorite) {
      dispatch(removeFavorites(advert.id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  return (
    <>
      <HeaderCatalogFavorite />
      <Container>
        {favoriteAdverts.length === 0 && (
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 18,
              color: '#0B44CD',
            }}
          >
            No favorite ads found.
          </div>
        )}
        <SectionListCard>
          {favoriteAdverts.slice(0, visibleAdverts).map((advert, index) => {
            const addressParts = advert.address.split(', ');
            const city = addressParts[1] || '';
            const country = addressParts[2] || '';

            return (
              <Card key={advert.id}>
                <ImgBlock>
                  <Img src={advert.img} alt="Car" />
                  <ButtonFavorite onClick={() => handleFavoriteClick(advert)}>
                    <svg
                      style={{
                        width: 18,
                        height: 18,
                        fill: '#3470FF',
                        stroke: 'none',
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
                      {city} | {country} | {advert.rentalCompany} |{' '}
                      {advert.type} | {advert.model} | {advert.mileage}
                    </InfoText>
                  </InfoBlock>

                  <div>
                    <BtnOpenModal
                      type="button"
                      onClick={() => openModal(index)}
                    >
                      Learn more
                    </BtnOpenModal>
                  </div>
                </AllInfoBlock>

                {selectedAdverts[index] && (
                  <Modal
                    advert={advert}
                    closeModal={() => closeModals(index)}
                  />
                )}
              </Card>
            );
          })}
        </SectionListCard>
        {visibleAdverts < 9 && visibleAdverts < favoriteAdverts.length && (
          <MoreBtn onClick={loadMore}>Load More</MoreBtn>
        )}
      </Container>
      <FooterCatalogFavorite />
    </>
  );
};

export default Favorites;
