import { styled } from 'styled-components';

const images: string[] = [
  './src/assets/img/image 1.png',
  './src/assets/img/image 1.png',
  './src/assets/img/image 1.png',
  './src/assets/img/image 1.png',
  './src/assets/img/image 1.png',
  './src/assets/img/image 1.png',
  './src/assets/img/image 1.png',
  './src/assets/img/image 1.png',
];

function renderImage(imageUrl: string, index: number) {
  return (
    <ImageItem key={index}>
      <img src={imageUrl} alt={`Image ${index + 1}`} />
    </ImageItem>
  );
}

function renderMovie() {
  return (
    <MovieImage>
      {images.map((imageUrl, index) => renderImage(imageUrl, index))}
    </MovieImage>
  );
}

function ResultSearch() {
  return (
    <>
      <Subtitle>검색 된 영화</Subtitle>
      {renderMovie()}
    </>
  );
}

export default ResultSearch;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  height: 56px;
  padding: 0px 4px 0px 20px;
  color: #e4e4e5;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.09px;
`;

const MovieImage = styled.div`
  display: flex;
  /* width: 335px; */
  padding: 0px 20px 8px 20px;
  align-items: flex-start;
  gap: 4px;
  flex-wrap: wrap;
}
`;

const ImageItem = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
