import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import axios from '../api/apiController.tsx';
import empty from '../assets/image/poster/empty_poster.png';
import MovieInfo from '../components/movieSearch/MovieInfo.tsx';
import RatingBar from '../components/movieSearch/RatingBar.tsx';
import ReviewList from '../components/movieSearch/ReviewList.tsx';
import TopBar from '../components/movieSearch/TopBar.tsx';
import useInfinteScroll from '../hooks/useInfinteScroll.tsx';
import { Movie } from '../types/movie.ts';
import { Review } from '../types/review.ts';

function MovieSearch() {
  const [scroll, setScroll] = useState(false);
  const [movie, setMovie] = useState<Movie>();
  const { id: movieId } = useParams();
  const {
    list: reviewList,
    sort,
    setSort,
    ref,
    totalCount,
  } = useInfinteScroll(`/filog/movie/${movieId}`);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    axios.get(`/movies/${movieId}`).then((data) => {
      const responseMovie = data.data.data;
      setMovie(responseMovie);
    });
  }, [movieId]);

  if (movie === undefined) return;

  return (
    <MovieSearchWrapper>
      <Fixed>
        <TopBar />
        <MovieInfo movie={movie} showDetails={!scroll} />
      </Fixed>
      <FixedPoster $height={scroll ? 153 : 200}>
        <Poster $url={movie?.poster || empty}>
          <Gradient />
        </Poster>
      </FixedPoster>
      <Blank />
      {/* 예상 평점(ratingExpect)은 현재 api 호출 불가. 추후 수정 필요 */}
      {!scroll && (
        <RatingBar reviewCount={totalCount} ratingAvg={movie.ratingAvg || 0} ratingExpect={0} />
      )}
      <ReviewList endRef={ref} reviewList={reviewList as Review[]} sort={sort} setSort={setSort} />
    </MovieSearchWrapper>
  );
}

const MovieSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 375px;
  max-width: 390px;
  min-height: 100vh;
  max-height: calc(100vh + 242px);

  overflow: hidden;
  margin: 0 -20px;

  font-family: Pretendard;
`;

const Blank = styled.div`
  height: 242px;
  overflow: visible;
`;

const Fixed = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  max-width: 390px;
  width: 100%;
`;

const FixedPoster = styled.div<{ $height: number }>`
  position: fixed;
  top: 56px;
  max-width: 390px;
  width: 100%;

  height: ${(props) => props.$height + 20}px;
  overflow: hidden;
`;

const Poster = styled.div<{ $url: string }>`
  position: absolute;
  width: 100%;
  height: 242px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
    url(${(props) => props.$url}), lightgray 50% / cover no-repeat;
  background-size: cover;
`;

const Gradient = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 119px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 0%, #111213 72.4%);
`;

export default MovieSearch;
