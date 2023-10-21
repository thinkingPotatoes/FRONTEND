import { styled } from 'styled-components';

type Size = {
  width: number;
  height: number;
};

type Sizes = {
  s: Size;
  sm: Size;
  m: Size;
  l: Size;
  xl: Size;
};

const SIZES: Sizes = {
  s: {
    width: 30,
    height: 42.3,
  },
  sm: {
    width: 40,
    height: 57.5,
  },
  m: {
    width: 80,
    height: 114.275,
  },
  l: {
    width: 120,
    height: 170,
  },
  xl: {
    width: 188,
    height: 286,
  },
};

function Poster({ imgUrl, size }: { imgUrl: string; size: string }) {
  return (
    <PosterImg
      src={imgUrl}
      $width={SIZES[size as keyof Sizes].width}
      $height={SIZES[size as keyof Sizes].height}
    />
  );
}

const PosterImg = styled.img<{ $width: number; $height: number }>`
  min-width: ${(props) => props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

export default Poster;
