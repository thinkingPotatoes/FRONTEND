import { styled } from 'styled-components';
import React from 'react';

interface Props {
  title: string;
  ranking: number;
  ImgComponent: React.FC;
}

function PosterWithRanking({ title, ranking, ImgComponent }: Props) {
  return (
    <Container>
      <ImgComponent />
      <MovieRanking>예상 {ranking}위</MovieRanking>
      <MovieTitle>{title}</MovieTitle>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  font-family: 'Pretendard', sans-serif;
  display: flex;
  flex-direction: column;
`;
const MovieRanking = styled.span`
  color: var(--main);
  font-size: 12px;
  margin-top: 16px;
`;
const MovieTitle = styled.span`
  margin-top: 4px;
  color: var(--text-default);
  font-size: 14px;
`;

export default PosterWithRanking;
