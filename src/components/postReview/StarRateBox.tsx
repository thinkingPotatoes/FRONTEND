import { SetStateAction } from 'react';
import { styled } from 'styled-components';
import Poster from '../common/Poster';
import Head2 from '../common/texts/Head2';
import StarRating from './StarRating';

export type SelectedMovieType = {
  title: string;
  plot: string;
  poster: string;
};

function StarRateBox({
  posterUrl,
  grade,
  setGrade,
  handleShowModal,
}: {
  posterUrl: string;
  grade: number;
  setGrade: React.Dispatch<SetStateAction<number>>;
  handleShowModal: (showModal: boolean) => void;
}) {
  return (
    <StarRateBoxWrapper>
      <Head2>영화의 별점을 남겨주세요</Head2>
      <Main>
        <Poster imgUrl={posterUrl} size={'m'} />
        <StarRating grade={grade} setGrade={setGrade} />
        <Button onClick={() => handleShowModal(false)}>확인</Button>
      </Main>
    </StarRateBoxWrapper>
  );
}

const StarRateBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  height: 42px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--main);
`;

export default StarRateBox;
