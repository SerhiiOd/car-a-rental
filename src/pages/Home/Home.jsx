import React from 'react';

import {
  Container,
  Section,
  Title,
  SubTitle,
  List,
  ListItem,
  TitleItem,
  TextItem,
  SectionTitle,
  SectionCard,
  MoreBtn,
  SectionBtn,
} from './Home.styled';

import { HeaderHome } from '../../components/Header/Header';
import { FooterHome } from '../../components/Footer/Footer';
import SliderCard from '../../components/Slider/SliderCard';

const Home = () => {
  return (
    <>
      <HeaderHome />
      <Container>
        <SectionTitle>
          <Title>Falcon Rental</Title>
          <SubTitle>Your reliable partner in the world of automobiles</SubTitle>
        </SectionTitle>

        <Section>
          <List>
            <ListItem>
              <TitleItem>Discover Our Cars:</TitleItem>
              <TextItem>
                Explore our diverse fleet of vehicles in Ukraine, where you can
                choose the perfect vehicle that suits your needs and
                preferences. From sleek city cars to rugged SUVs, we offer a
                wide range of options to ensure you find the ideal ride for your
                journey.
              </TextItem>
            </ListItem>
            <ListItem>
              <TitleItem>Learn About Our Company:</TitleItem>
              <TextItem>
                We invite you to learn more about our company's history, values,
                and mission. Discover the story behind our dedication to
                providing exceptional car rental services in Ukraine and how our
                core values guide us in delivering the best possible experience
                to our customers.
              </TextItem>
            </ListItem>
            <ListItem>
              <TitleItem>What Sets Us Apart:</TitleItem>
              <TextItem>
                Find out what distinguishes us from the rest. Learn about the
                compelling reasons to select us as your car rental provider in
                Ukraine. From competitive rates and transparent policies to
                well-maintained vehicles and top-notch customer service, we have
                everything you need to make your Ukrainian journey
                extraordinary.
              </TextItem>
            </ListItem>
          </List>
        </Section>

        <SectionTitle>
          <TitleItem>Free cancellation for most rooms.</TitleItem>
          <TitleItem>More than 75,000 rental locations worldwide.</TitleItem>
          <TitleItem>
            Our support service is ready to assist in over 40 languages.
          </TitleItem>
          <TitleItem>
            Rental cars provide access to leading car rental brands.
          </TitleItem>
        </SectionTitle>

        <SectionCard>
          <SliderCard />
        </SectionCard>

        <SectionBtn>
          <MoreBtn to="/catalog">Learn more</MoreBtn>
        </SectionBtn>
      </Container>
      <FooterHome />
    </>
  );
};

export default Home;
