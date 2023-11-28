import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import empty from '../assets/image/poster/empty_poster.png';
import MovieInfo from '../components/movieSearch/MovieInfo.tsx';
import TopBar from '../components/movieSearch/TopBar.tsx';

function MovieSearchPlot() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (state === null) {
      navigate(`/moviesearch/${id}`);
      return;
    }
  }, [state, id]);

  const movie = state?.movie;

  return (
    <MovieSearchWrapper>
      <Fixed>
        <TopBar />
        <MovieInfo movie={movie} showDetails={true} expandPlot={true} />
      </Fixed>
      <FixedPoster>
        <Poster $url={movie?.poster || empty}>
          <Gradient />
        </Poster>
      </FixedPoster>
      <Div />
    </MovieSearchWrapper>
  );
}

const Div = styled.div`
  height: 242px;
  overflow: visible;
`;

const Fixed = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  max-width: 390px;
  width: 100%;
`;

const FixedPoster = styled.div`
  position: fixed;
  top: 56px;

  max-width: 390px;
  width: 100%;

  height: 214px;
  overflow: hidden;
`;

const MovieSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 375px;
  max-width: 390px;
  min-height: 100vh;
  max-height: calc(100vh + 242px);

  overflow: hidden;
  margin: 0 -20px;

  font-family: Pretendard;
`;

const Poster = styled.div<{ $url: string }>`
  position: absolute;
  width: 100%;
  height: 242px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
    url(${(props) => props.$url}), lightgray 50% / cover no-repeat;
  background-size: cover;
`;

const Gradient = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 119px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 0%, #111213 72.4%);
`;

export default MovieSearchPlot;
