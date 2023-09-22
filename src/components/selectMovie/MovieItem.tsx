import styled from 'styled-components';
import empty from '../../assets/image/poster/empty_poster.png';
import { MovieResponseList } from '../../types/search';
import Poster from '../common/Poster';
import Body3 from '../common/texts/Body3';
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
          <Body3>{movie.prodYear}</Body3>
          {movie.genre ? (
            <>
              <Body3>|</Body3>
              <Body3>{movie.genre}</Body3>
            </>
          ) : (
            <></>
          )}
          {movie.nation ? (
            <>
              <Body3>|</Body3>
              <Body3>{movie.nation}</Body3>
            </>
          ) : (
            <></>
          )}
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
