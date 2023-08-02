import { styled } from 'styled-components';

interface MovieDto {
  poster: string;
  title: string;
  openDate: number;
  janre: string[];
  country: string;
}
const movies: MovieDto[] = [
  {
    poster: './src/assets/img/image 1.png',
    title: '아이언 맨 2',
    openDate: 2010,
    janre: ['액션', '드라마', 'SF'],
    country: '미국',
  },
  {
    poster: './src/assets/img/image 1.png',
    title: '아이언 맨 2',
    openDate: 2010,
    janre: ['액션', '드라마', 'SF'],
    country: '미국',
  },
  {
    poster: './src/assets/img/image 1.png',
    title: '아이언 맨 2',
    openDate: 2010,
    janre: ['액션', '드라마', 'SF'],
    country: '미국',
  },
  {
    poster: './src/assets/img/image 1.png',
    title: '아이언 맨 2',
    openDate: 2010,
    janre: ['액션', '드라마', 'SF'],
    country: '미국',
  },
  {
    poster: './src/assets/img/image 1.png',
    title: '아이언 맨 2',
    openDate: 2010,
    janre: ['액션', '드라마', 'SF'],
    country: '미국',
  },
];

function ResultSearch() {
  return (
    <>
      <Subtitle>검색 된 영화</Subtitle>
      <MovieList>
        {movies.map((movie) => (
          <EachMovie>
            <Poster>
              <img src={movie.poster} />
            </Poster>
            <Info>
              <div className="title">{movie.title}</div>
              <div className="etcInfo">
                {movie.openDate} | {movie.janre.join(',')} | {movie.country}
              </div>
            </Info>
          </EachMovie>
        ))}
      </MovieList>
    </>
  );
}

export default ResultSearch;

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
  width: 30px;
  height: 42.3px;
  img {
    width: 100%;
    height: 100%;
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
