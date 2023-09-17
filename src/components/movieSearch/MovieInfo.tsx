import { styled } from 'styled-components';

import { Movie } from '../../types/movie.ts';
import Chip, { ChipProps } from '../common/Chip.tsx';
import MoviePlot from './MoviePlot.tsx';

const example: ChipProps[] = [
  {
    text: '액션',
    deletable: false,
  },
  {
    text: 'SF',
    deletable: false,
  },
  {
    text: '드라마',
    deletable: false,
  },
];

function MovieInfo({ movie }: { movie: Movie }) {
  return (
    <MovieInfoWrapper>
      <MainContent>
        <BasicInfoWrapper>
          <Title>{movie.title}</Title>
          <BasicInfo>
            <span>{movie.prodYear}</span>
            <span>|</span>
            <span>{movie.nation}</span>
            <span>|</span>
            <span>{movie.rating}</span>
          </BasicInfo>
        </BasicInfoWrapper>
        <GenreList>
          {example.map((info) => (
            <Chip key={info.text} props={info} />
          ))}
        </GenreList>
        <MoviePlot plot={movie.plot} />
      </MainContent>
    </MovieInfoWrapper>
  );
}

const MovieInfoWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: fit-content;
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

const BasicInfo = styled.div`
  display: flex;
  gap: 4px;

  > span {
    color: var(--dark-grey-500, #7e7e87);

    /* Body2 */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.014px;
  }
`;

const GenreList = styled.div`
  display: flex;
  gap: 4px;
`;

export default MovieInfo;
