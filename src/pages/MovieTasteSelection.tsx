import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import Poster from '../components/account/Poster';
import { useState, useEffect } from 'react';
import axios from '../api/apiController.tsx';
import { MovieResponseList } from '../types/search.ts';

function MovieTasteSelection() {
  const [selectedMovies, setSelectedMovies] = useState<string[]>([]);
  const [movieOptions, setMovieOptions] = useState<MovieResponseList[]>([]);
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  const onClickPoster = (id: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedMovies((prev) => prev.filter((el) => el !== id));
    } else {
      setSelectedMovies((prev) => [...prev, id]);
    }
  };

  const fetchMovieList = async () => {
    const {
      data: {
        data: { searchMovieResponseList },
      },
    } = await axios.get('/movies/init-movie/get');
    setMovieOptions(searchMovieResponseList);
  };

  const onClickNext = async () => {
    navigate('/home');
    await axios.post('/movies/init-movie/save', { movieList: selectedMovies });
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackArrow />
        </BackButton>
        <Headertitle>에엥의 취향을 알려주세요 👀</Headertitle>
      </Header>
      <Main>
        {movieOptions.map((movie) => (
          <Poster
            movie={movie}
            selectedMovieCount={selectedMovies.length}
            onClickPoster={onClickPoster}
          />
        ))}
      </Main>
      <NextButton
        disabled={selectedMovies.length !== 3}
        onClick={onClickNext}
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
  margin-top: auto;
`;

export default MovieTasteSelection;
