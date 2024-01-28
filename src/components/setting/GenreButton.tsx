import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Genre } from '../../types/movie';

interface Props {
  genre: Genre;
  selectedGenres: Genre[];
  onClickGenre(genre: Genre, isSelected: boolean): void;
}

function GenreButton({ genre, selectedGenres, onClickGenre }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    selectedGenres.map((selectedGenres) => {
      if (selectedGenres.id === genre.id) {
        setIsSelected(true);
      }
    });
  }, []);

  const onClick = () => {
    if (!isSelected && selectedGenres.length >= 3) {
      return;
    }
    onClickGenre(genre, isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <Button onClick={onClick} isSelected={isSelected}>
      <Title isSelected={isSelected}>{genre.genre}</Title>
    </Button>
  );
}

interface ButtonProps {
  isSelected: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  height: 48px;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 1.2px;
    background: ${({ isSelected }) =>
      isSelected ? 'var(--main-gradient)' : 'var(--background-bright)'};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: ${({ isSelected }) => (isSelected ? 'xor' : 'or')};
    mask-composite: exclude;
  }
`;

const Title = styled.div<ButtonProps>`
  background: ${({ isSelected }) =>
    isSelected ? 'var(--main-gradient)' : 'var(--background-bright)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: ${({ isSelected }) => (isSelected ? '0.3px' : '0px')};
  color: ${({ isSelected }) => (isSelected ? 'transparent' : 'var(--text-default)')};
  font-family: 'Pretendard';
  font-size: 12px;
  z-index: 1;
  font-weight: 500;
  line-height: 130%;
`;

export default GenreButton;
