import { Rating } from 'react-simple-star-rating';
import { styled } from 'styled-components';
import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStar.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';
import empty from '../../assets/image/poster/empty_poster.png';
import { Movie } from '../../types/movie';
import MovieDetails from '../common/MovieDetails';
import Poster from '../common/Poster';
import Subtitle1 from '../common/texts/Subtitle1';

function SelectedMovie({
  movie,
  grade,
  handleShowModal,
}: {
  movie: Movie;
  grade: number;
  handleShowModal: (showModal: boolean) => void;
}) {
  return (
    <SelectedMovieWrapper>
      <Poster imgUrl={movie?.poster || empty} size="sm" />
      <Contents>
        <Subtitle1>{movie?.title}</Subtitle1>
        <MovieDetails
          size="s"
          details={[movie.prodYear, movie.nation, movie.rating, movie.genre]}
        />
        <div onClick={() => handleShowModal(true)}>
          <Rating
            readonly
            initialValue={grade}
            fillIcon={<FillStarIcon width={24} height={24} fill={'var(--main)'} />}
            emptyIcon={<BlankStarIcon width={24} height={24} fill={'var(--main)'} />}
            allowFraction={true}
          />
        </div>
      </Contents>
    </SelectedMovieWrapper>
  );
}

const SelectedMovieWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 16px 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--dark-border-border);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default SelectedMovie;
