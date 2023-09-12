import { styled } from 'styled-components';
import RateInfo from './RateInfo';
import { Movie } from '../types/movie';

interface Props {
  info: Movie;
  star: number;
}
const MovieInfo = ({ info, star }: Props) => {
  const movieSubInfo = [info.prodYear, info.nation, info.genre];
  return (
    <MovieBox>
      <img src={info.poster} alt="" />
      <Info>
        <div className="title">{info.title}</div>
        <div className="content">{movieSubInfo.join(' | ')}</div>
        <RateInfo rate={star} />
      </Info>
    </MovieBox>
  );
};

const MovieBox = styled.div`
  display: flex;
  margin: 8px 0px 12px;
  padding: 12px 20px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--dark-border-border, #3c3c47);
  img {
    width: 40px;
    height: 57.5px;
    flex-shrink: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-default);
  gap: 6px;
  .title {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.048px;
    height: fit-content;
    margin: 0;
  }

  .content {
    color: var(--disabled);
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
  }
`;
export default MovieInfo;
