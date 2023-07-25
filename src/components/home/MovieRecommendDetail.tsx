import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../../assets/image/icon/backArrow.svg';
import { ReactComponent as PosterImage } from '../../assets/image/poster/poster_lg.svg';
import Poster from './Poster.tsx';

const data = [
  { title: '아이언맨', rating: 3.5 },
  { title: '아이언맨', rating: 3.5 },
  { title: '아이언맨', rating: 3.5 },
  { title: '아이언맨', rating: 3.5 },
  { title: '아이언맨', rating: 3.5 },
  { title: '아이언맨', rating: 3.5 },
];

interface Props {
  onClickBack: () => void;
}

function MovieRecommendDetail({ onClickBack }: Props) {
  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackArrow />
        </BackButton>
        <Headertitle>에엥님을 위한 추천 👀</Headertitle>
      </Header>
      <Main>
        {data.map((movie) => (
          <Poster {...movie} ImgComponent={PosterImage} />
        ))}
      </Main>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Pretendard', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  background-color: var(--main-background);
  max-width: 370px;
  width: 100%;
  padding: 0 10px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--text-emphasize);
  padding: 11.5px 0;
`;

const Headertitle = styled.div``;
const BackButton = styled.button`
  position: absolute;
  left: 16px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  gap: 15.5px;
  margin-top: 24px;
  flex-wrap: wrap;
`;

export default MovieRecommendDetail;
