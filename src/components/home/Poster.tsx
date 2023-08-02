import { styled } from 'styled-components';
import React from 'react';

interface Props {
  title: string;
  rating: number;
  ImgComponent: React.FC;
}

function Poster({ title, rating, ImgComponent }: Props) {
  return (
    <Container>
      <ImgComponent />
      <MovieTitle>{title}</MovieTitle>
      <MovieRating>예상 ★️ {rating}</MovieRating>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  font-family: 'Pretendard', sans-serif;
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.span`
  margin-top: 12px;
  color: var(--text-default);
  font-size: 14px;
`;
const MovieRating = styled.span`
  color: var(--main);
  font-size: 12px;
`;

export default Poster;
