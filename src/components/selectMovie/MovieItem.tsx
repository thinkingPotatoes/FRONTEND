import styled from 'styled-components';
import empty from '../../assets/image/poster/empty_poster.png';
import { MovieResponseList } from '../../types/search';
import MovieDetails from '../common/MovieDetails';
import Poster from '../common/Poster';
import Subtitle1 from '../common/texts/Subtitle1';

type MovieItemProps = React.HTMLProps<HTMLDivElement> & {
  movie: MovieResponseList;
};

function MovieItem({ movie, ...options }: MovieItemProps) {
  return (
    <MovieItemWrapper {...options}>
      <Poster size="s" imgUrl={movie.poster || empty} />
      <InfoWrapper>
        <Title>
          <Subtitle1>{movie.title}</Subtitle1>
        </Title>
        <Info>
          <MovieDetails details={[movie.prodYear, movie.genre, movie.nation]} size={'s'} />
        </Info>
      </InfoWrapper>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 4px;
`;

const Title = styled.div`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Info = styled.div`
  display: flex;
  gap: 4px;
  color: var(--dark-grey-500);
`;

export default MovieItem;
