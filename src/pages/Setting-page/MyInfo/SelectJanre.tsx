import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../../../assets/image/icon/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GenreButton from '../../../components/setting/GenreButton';
import { Genre } from '../../../types/movie';

const data: Genre[] = [
  { id: '1', genre: '로맨스' },
  { id: '2', genre: '멜로/로맨스' },
  { id: '3', genre: '액션' },
  { id: '4', genre: '코미디' },
  { id: '5', genre: '다큐멘터리' },
  { id: '6', genre: '스릴러' },
  { id: '7', genre: '사극' },
  { id: '8', genre: '범죄' },
  { id: '9', genre: '미스터리' },
  { id: '10', genre: '공포' },
  { id: '11', genre: '애니메이션' },
  { id: '12', genre: '가족' },
  { id: '13', genre: '판타지' },
  { id: '14', genre: 'SF' },
  { id: '15', genre: '전쟁' },
  { id: '16', genre: '어드벤처' },
  { id: '17', genre: '뮤지컬' },
  { id: '18', genre: '서부극' },
];

function SelectGenre() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([
    { id: '15', genre: '전쟁' },
    { id: '16', genre: '어드벤처' },
  ]);

  const navigate = useNavigate();

  const onClickNext = () => {
    navigate('/home');
  };

  const onClickGenre = (genre: Genre, isSelected: boolean) => {
    if (isSelected) {
      setSelectedGenres((prev) => prev.filter((el) => el.id !== genre.id));
    } else {
      setSelectedGenres((prev) => [...prev, genre]);
    }
  };

  return (
    <Container>
      <Header onClick={() => navigate(-1)}>
        <BackButton>
          <BackArrow />
        </BackButton>
      </Header>
      <Head1>선호하는 장르를 선택해주세요</Head1>
      <Main>
        {data.map((genre: Genre) => (
          <GenreButton genre={genre} selectedGenres={selectedGenres} onClickGenre={onClickGenre} />
        ))}
      </Main>
      <BottomNav>
        {selectedGenres.length === 3 && <SubInfo>{'최대 3개까지 선택할 수 있어요.'}</SubInfo>}
        <NextButton isNext={selectedGenres.length !== 0} onClick={onClickNext}>
          저장하기
        </NextButton>
      </BottomNav>
    </Container>
  );
}

interface StyleProps {
  isNext: boolean;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px 0;
  height: 44px;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 16px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Head1 = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.24px;
  color: #ffffff;
  font-family: 'Pretendard';
  margin-bottom: 17px;
`;

const BottomNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;
const SubInfo = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
  color: var(--text-default);
  text-align: center;
  margin-bottom: 20px;
`;

const NextButton = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: ${({ isNext }) => (isNext ? 'var(--icon-activated)' : 'var(--disabled)')};
  height: 52px;
  width: 100%;
  background-color: ${({ isNext }) => (isNext ? 'var(--main)' : 'var(--background-bright)')};

  border-radius: 8px;
  margin-bottom: 20px;
`;

export default SelectGenre;
