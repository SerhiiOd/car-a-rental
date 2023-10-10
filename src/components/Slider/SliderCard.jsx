import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/adverts/selectors';
import { fetchCars } from '../../redux/adverts/operation';

import {
  Img,
  CardBlock,
  TitleCar,
  InfoBlock,
  SubTitleCar,
} from './SliderCard.styled';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BackImage from '../../images/BackImg.png';

const SliderCard = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getCars);
  console.log(adverts);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const settings = {
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div style={{ width: 1120 }}>
        <Slider {...settings}>
          {adverts.map(advert => (
            <CardBlock key={advert.id}>
              {!advert.img ? (
                <Img src={BackImage} width={335} />
              ) : (
                <Img src={advert.img} alt={`${advert.make}`} width={335} />
              )}
              <InfoBlock>
                <TitleCar>
                  {advert.make} | <SubTitleCar>{advert.model}</SubTitleCar> |{' '}
                  {advert.year}
                </TitleCar>
              </InfoBlock>
            </CardBlock>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderCard;
