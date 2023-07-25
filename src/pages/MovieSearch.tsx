import { styled } from 'styled-components';
import MovieInfo from '../components/movieSearch/MovieInfo.tsx';
import RatingBar from '../components/movieSearch/RatingBar.tsx';
import ReviewList from '../components/movieSearch/ReviewList.tsx';
import TopBar from '../components/movieSearch/TopBar.tsx';

function MovieSearch() {
  return (
    <MovieSearchWrapper>
      <TopBar />
      <MovieInfo />
      <Poster>
        <Gradient />
      </Poster>
      <RatingBar />
      <ReviewList />
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
  background-color: #111213;

  font-family: Pretendard;
`;

const Poster = styled.div`
  position: absolute;
  width: 100%;
  /* height: 250px; */
  height: 203px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('https://s3-alpha-sig.figma.com/img/0399/ac38/b5704417b74bfa9d71ea7e88a81b8b59?Expires=1691366400&Signature=ZckuQeqvxMj0PpWQydfKr-ivJMsZegvK0A8SQSQwiONVNsjphI0ddC2kE2iGMJi-JUSCA6yx86AEcY8t1-X~YqWEGGRMWS04nirxj9efMs7uHU0J7CuRIU0xHalsf-g7I~fotEiF6JRaAEc1lu8j7we9Sb~PMmTR7Hzr1CT3itNOvIe3~jWv6owUS2BVYRBiKztzT~riJYpQtuo1QQERUWPrwCGD1RE1EabNM0pwZ0m3tPrFN-hhwTS1ZKSlEh-jzuq5LXd7lvxvGfrf8kfonAyUoWl9cQjWrxJX0hDWoxpCIYyXqzP1fkYuy9mKGIa-lvwVygTzpoj1NkvYc9shgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'),
    lightgray 50% / cover no-repeat;
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
