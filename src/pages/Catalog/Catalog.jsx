import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCars } from '../../redux/adverts/selectors';
import { fetchCars } from '../../redux/adverts/operation';
import { getSelectorFavorites } from '../../redux/favorites/selectors';
import { addToFavorites, removeFavorites } from '../../redux/favorites/slice';

import CatalogCard from '../../components/CatalogCard/CatalogCard';

import { HeaderCatalogFavorite } from '../../components/Header/Header';
import { FooterCatalogFavorite } from '../../components/Footer/Footer';

import { Container, SectionListCard, MoreBtn } from './Catalog.styled';

const Catalog = () => {
  const [visibleAdverts, setVisibleAdverts] = useState(8);
  const dispatch = useDispatch();
  const adverts = useSelector(getCars);
  const favoriteAdverts = useSelector(getSelectorFavorites);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleAdverts(prevVisibleAdverts => prevVisibleAdverts + 8);
  };

  const handleFavoriteClick = advert => {
    if (!favoriteAdverts.some(favorite => favorite.id === advert.id)) {
      dispatch(addToFavorites(advert));
    }
  };

  const handleRemoveFavoriteClick = advert => {
    if (favoriteAdverts.some(favorite => favorite.id === advert.id)) {
      dispatch(removeFavorites(advert.id));
    }
  };

  return (
    <>
      <HeaderCatalogFavorite />
      <Container>
        <SectionListCard>
          {adverts.slice(0, visibleAdverts).map(advert => (
            <CatalogCard
              key={advert.id}
              advert={advert}
              isFavorite={favoriteAdverts.some(
                favorite => favorite.id === advert.id
              )}
              onFavoriteClick={handleFavoriteClick}
              onRemoveFavoriteClick={handleRemoveFavoriteClick}
            />
          ))}
        </SectionListCard>
        {visibleAdverts < adverts.length && (
          <MoreBtn onClick={loadMore}>Load More</MoreBtn>
        )}
      </Container>
      <FooterCatalogFavorite />
    </>
  );
};

export default Catalog;
