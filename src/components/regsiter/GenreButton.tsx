import { useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  genre: { id: number; title: string };
  onClickGenre(id: number, isSelected: boolean): void;
}

function GenreButton({ genre, onClickGenre }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    onClickGenre(genre.id, isSelected);
    setIsSelected(!isSelected);
  };
  return <Button onClick={onClick}>{genre.title}</Button>;
}

const Button = styled.button`
  height: 48px;
  padding: 8px 12px;
  color: var(--text-default);
  font-family: 'Pretendard';
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-bright);
  border-radius: 8px;
`;

export default GenreButton;
