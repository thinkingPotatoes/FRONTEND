import axios from 'axios';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Poster from '../common/Poster';
import Body3 from '../common/texts/Body3';
import Subtitle1 from '../common/texts/Subtitle1';

type SelectedMovieType = {
  title: string;
  plot: string;
  poster: string;
};

function SelectedMovie({ movieId }: { movieId: string }) {
  const [movie, setMovie] = useState<SelectedMovieType>();
  useEffect(() => {
    axios.get(`http://localhost:8080/movies/${movieId}`).then((data) => {
      const responseMovie = data.data.data;
      setMovie({
        title: responseMovie.title,
        plot: responseMovie.plot,
        poster: responseMovie.poster,
      });
    });
  }, []);
  return (
    <SelectedMovieWrapper>
      <Poster imgUrl={movie?.poster || ''} size="m" />
      <Contents>
        <Subtitle1>{movie?.title}</Subtitle1>
        <Body3>
          <Plot>{movie?.plot}</Plot>
        </Body3>
      </Contents>
    </SelectedMovieWrapper>
  );
}

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Plot = styled.div`
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const SelectedMovieWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 20px 16px 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--dark-border-border);
`;

export default SelectedMovie;
