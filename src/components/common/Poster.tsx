import { styled } from 'styled-components';

function Poster({ imgUrl, size }: { imgUrl: string; size: string }) {
  let width = 0;
  let height = 0;

  if (size === 's') {
    width = 30;
    height = 42.3;
  }
  if (size === 'm') {
    width = 80;
    height = 114;
  }
  if (size === 'l') {
    width = 120;
    height = 170;
  }
  if (size === 'xl') {
    width = 188;
    height = 286;
  }

  return <PosterImg src={imgUrl} $width={width} $height={height} />;
}

const PosterImg = styled.img<{ $width: number; $height: number }>`
  min-width: ${(props) => props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

export default Poster;
