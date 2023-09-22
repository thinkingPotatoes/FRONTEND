import { styled } from 'styled-components';
import { Movie } from '../../types/movie';
import Body3 from './texts/Body3';

function MovieDetails({ movie }: { movie: Movie }) {
  const details = [movie.prodYear, movie.nation, movie.rating, movie.genre].filter(
    (detail) => detail.length > 0,
  );

  return (
    <Info>
      {details.map((detail, idx) => (
        <Detail key={detail}>
          <Body3>{detail}</Body3>
          {idx !== details.length - 1 && <Body3>|</Body3>}
        </Detail>
      ))}
    </Info>
  );
}

const Info = styled.div`
  display: flex;
  gap: 4px;
  color: var(--dark-grey-500);
`;

const Detail = styled.div`
  display: flex;
  gap: 4px;
`;

export default MovieDetails;
