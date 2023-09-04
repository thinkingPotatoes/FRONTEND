import { styled } from 'styled-components';

function Poster({ imgUrl, size }: { imgUrl: string; size: string }) {
  return <PosterImg src={imgUrl} $size={size} />;
}

const PosterImg = styled.img<{ $size: string }>`
  min-width: 80px;
  width: 80px;
  height: 114px;
`;

export default Poster;
