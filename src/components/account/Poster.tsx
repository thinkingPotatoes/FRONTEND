import { styled } from 'styled-components';
import { ReactComponent as PosterImage } from '../../assets/image/poster/poster_md.svg';
import { useState } from 'react';
import { ReactComponent as Check } from '../../assets/image/icon/check.svg';

interface Props {
  movie: { id: number; title: string };
  selectedMovieCount: number;
  onClickPoster(id: number, isSelected: boolean): void;
}

function Poster({ movie, selectedMovieCount, onClickPoster }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (!isSelected && selectedMovieCount >= 3) {
      return;
    }

    onClickPoster(movie.id, isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <PosterContainer onClick={onClick}>
      <PosterImage width={106} />
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

export default Poster;
