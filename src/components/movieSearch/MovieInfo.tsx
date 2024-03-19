import { styled } from 'styled-components';
import { Movie } from '../../types/movie.ts';
import Chip from '../common/Chip.tsx';
import MovieDetails from '../common/MovieDetails.tsx';
import MoviePlot from './MoviePlot.tsx';

type Props = {
  movie: Movie | undefined;
  showDetails: boolean;
  expandPlot?: boolean;
};

function MovieInfo({ movie, showDetails, expandPlot }: Props) {
  if (movie === undefined) return <></>;
  return (
    <MovieInfoWrapper>
      <MainContent>
        <BasicInfoWrapper>
          <Title>{movie.title}</Title>
          {showDetails && (
            <MovieDetails size="m" details={[movie.prodYear, movie.nation, movie.rating]} />
          )}
        </BasicInfoWrapper>
        <GenreList>
          {movie.genre
            .split(',')
            .filter((_) => _)
            .map((genre) => (
              <Chip key={genre} props={{ text: genre }} />
            ))}
        </GenreList>
        {showDetails && <MoviePlot movie={movie} plot={movie.plot} expanded={expandPlot} />}
      </MainContent>
    </MovieInfoWrapper>
  );
}

const MovieInfoWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 100vh;
  overflow: scroll;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  justify-content: center;
  gap: 12px;
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.div`
  color: var(--dark-grey-800, #e4e4e5);

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.24px;
`;

const GenreList = styled.div`
  display: flex;
  gap: 4px;
`;

export default MovieInfo;
