import { styled } from 'styled-components';
import Body3 from './texts/Body3';

// [movie.prodYear, movie.nation, movie.rating, movie.genre]

function MovieDetails({ details }: { details: string[] }) {
  const filteredDetails = details.filter((detail) => detail.length > 0);

  return (
    <Info>
      {filteredDetails.map((detail, idx) => (
        <Detail key={detail}>
          <Body3>{detail}</Body3>
          {idx !== filteredDetails.length - 1 && <Body3>|</Body3>}
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
