import { styled } from 'styled-components';
import { MovieResponseList } from '../types/search';

const empty_poster = 'src/assets/image/poster/empty_poster.png';

function ResultSearch({ results }: { results: MovieResponseList[] }) {
  console.log(results);
  return (
    <>
      <Subtitle>검색 된 영화</Subtitle>
      <MovieList>
        {results ? (
          results.map((movie: MovieResponseList, idx) => (
            <EachMovie key={idx}>
              <Poster>
                <img src={movie.poster.length === 0 ? empty_poster : movie.poster} />
              </Poster>
              <Info>
                <div className="title">{movie.title}</div>
                <div className="etcInfo">
                  {movie.prodYear +
                    ' | ' +
                    movie.genre.split(',').slice(0, 3).join(',') +
                    ' | ' +
                    movie.nation}
                </div>
              </Info>
            </EachMovie>
          ))
        ) : (
          <>검색된 영화가 없습니다</>
        )}
      </MovieList>
    </>
  );
}

//| {movie.janre.join(',')} | {movie.country} //추후 DB 변경시 수정
const MovieList = styled.div`
  padding-left: 20px;
  color: var(--disabled);
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
`;

const EachMovie = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 12px 4px;
  gap: 8px;

  .title {
    color: var(--text-emphasize);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.048px;
    margin-bottom: 4px;
  }
`;

const Poster = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 42.3px;
    object-fit: cover;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 10px;
  height: 56px;
  padding: 0px 20px;
  color: var(--text-emphasize);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.09px;
`;

export default ResultSearch;
