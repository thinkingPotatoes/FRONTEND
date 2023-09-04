import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import Poster from '../components/regsiter/Poster';
import { useState } from 'react';

const data = [
  { id: 1, title: '아이언맨' },
  { id: 2, title: '아이언맨' },
  { id: 3, title: '아이언맨' },
  { id: 4, title: '아이언맨' },
  { id: 5, title: '아이언맨' },
  { id: 6, title: '아이언맨' },
  { id: 7, title: '아이언맨' },
  { id: 8, title: '아이언맨' },
  { id: 9, title: '아이언맨' },
  { id: 10, title: '아이언맨' },
  { id: 11, title: '아이언맨' },
  { id: 12, title: '아이언맨' },
  { id: 13, title: '아이언맨' },
  { id: 14, title: '아이언맨' },
  { id: 15, title: '아이언맨' },
];

function MovieTasteSelection() {
  const [selectedMovies, setSelectedMovies] = useState<number[]>([]);
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  const onClickPoster = (id: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedMovies((prev) => prev.filter((el) => el !== id));
    } else {
      setSelectedMovies((prev) => [...prev, id]);
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackArrow />
        </BackButton>
        <Headertitle>에엥의 취향을 알려주세요 👀</Headertitle>
      </Header>
      <Main>
        {data.map((movie) => (
          <Poster
            movie={movie}
            selectedMovieCount={selectedMovies.length}
            onClickPoster={onClickPoster}
          />
        ))}
      </Main>
      <NextButton
        disabled={selectedMovies.length !== 3}
      >{`${selectedMovies.length} / 3 다음`}</NextButton>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Pretendard';
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--text-emphasize);
  padding: 11.5px 0;
`;

const Headertitle = styled.div``;
const BackButton = styled.button`
  position: absolute;
  left: 16px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

interface ButtonProps {
  disabled: boolean;
}

const NextButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: ${({ disabled }: ButtonProps) => (disabled ? 'var(--disabled)' : '#ffffff')};
  height: 52px;
  width: 100%;
  background-color: ${({ disabled }: ButtonProps) =>
    disabled ? 'var(--background-bright)' : 'var(--main)'};
  border-radius: 8px;
  margin-bottom: 20px;
`;

export default MovieTasteSelection;
