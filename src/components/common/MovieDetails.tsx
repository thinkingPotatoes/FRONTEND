import { styled } from 'styled-components';
import Body2 from './texts/Body2';
import Body3 from './texts/Body3';

function MovieDetails({ details, size }: { details: string[]; size: string }) {
  const filteredDetails = details.filter((detail) => detail.length > 0);

  let Body = Body3;
  if (size === 's') Body = Body3;
  if (size === 'm') Body = Body2;

  return (
    <Info>
      {filteredDetails.map((detail, idx) => (
        <Detail key={detail}>
          <Body>{detail}</Body>
          {idx !== filteredDetails.length - 1 && <Body>|</Body>}
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
