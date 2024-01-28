import { styled } from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Check } from '../../assets/image/icon/check.svg';
import { MovieResponseList } from '../../types/search';
import empty from '../../assets/image/poster/empty_poster.png';

interface Props {
  movie: MovieResponseList;
  selectedMovieCount: number;
  onClickPoster(id: string, isSelected: boolean): void;
}

function Poster({ movie, selectedMovieCount, onClickPoster }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (!isSelected && selectedMovieCount >= 3) {
      return;
    }

    onClickPoster(movie.docId, isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <PosterContainer onClick={onClick}>
      <PosterImage src={movie.poster || empty} alt={movie.title} />
      {isSelected && (
        <SelectedLayer>
          <Check />
        </SelectedLayer>
      )}
    </PosterContainer>
  );
}

const PosterContainer = styled.div`
  position: relative;
`;

const SelectedLayer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const PosterImage = styled.img`
  display: block;
  width: 100%;
  /* height: auto; */
  object-fit: cover;
`;

export default Poster;
