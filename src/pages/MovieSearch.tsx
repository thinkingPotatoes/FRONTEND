import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from '../api/apiController.tsx';
import empty from '../assets/image/poster/empty_poster.png';
import MovieInfo from '../components/movieSearch/MovieInfo.tsx';
import RatingBar from '../components/movieSearch/RatingBar.tsx';
import ReviewButton from '../components/movieSearch/ReviewButton.tsx';
import ReviewList from '../components/movieSearch/ReviewList.tsx';
import TopBar from '../components/movieSearch/TopBar.tsx';
import { Movie } from '../types/movie.ts';
import { Review } from '../types/review.ts';

function MovieSearch() {
  const [movie, setMovie] = useState<Movie>();
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const movieId = 'F31623';

  useEffect(() => {
    axios.get(`/movies/${movieId}`).then((data) => {
      const responseMovie = data.data.data;
      setMovie(responseMovie);
    });

    axios.get(`/filog/movie/${movieId}`).then((data) => {
      const responseReviewList = data.data.data;
      setReviewList(responseReviewList);
    });
  }, [movieId]);

  if (movie === undefined) return <div></div>;

  return (
    <MovieSearchWrapper>
      <TopBar />
      <MovieInfo movie={movie} />
      <Poster $url={movie.poster || empty}>
        <Gradient />
      </Poster>
      <RatingBar />
      <ReviewList />
      <ReviewButton />
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
  height: fit-content;
  margin: 0 -20px;

  font-family: Pretendard;
`;

const Poster = styled.div<{ $url: string }>`
  position: absolute;
  width: 100%;
  height: 203px;
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
