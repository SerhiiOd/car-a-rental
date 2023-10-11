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
