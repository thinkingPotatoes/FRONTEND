import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../../../assets/image/icon/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GenreButton from '../../../components/setting/GenreButton';

const data = [
  { id: 1, title: '로맨스' },
  { id: 2, title: '멜로/로맨스' },
  { id: 3, title: '액션' },
  { id: 4, title: '코미디' },
  { id: 5, title: '다큐멘터리' },
  { id: 6, title: '스릴러' },
  { id: 7, title: '사극' },
  { id: 8, title: '범죄' },
  { id: 9, title: '미스터리' },
  { id: 10, title: '공포' },
  { id: 11, title: '애니메이션' },
  { id: 12, title: '가족' },
  { id: 13, title: '판타지' },
  { id: 14, title: 'SF' },
  { id: 15, title: '전쟁' },
  { id: 16, title: '어드벤처' },
  { id: 17, title: '뮤지컬' },
  { id: 18, title: '서부극' },
];

function SelectGenre() {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const navigate = useNavigate();

  const onClickNext = () => {
    navigate('/home');
  };

  const onClickGenre = (id: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedGenres((prev) => prev.filter((el) => el !== id));
    } else {
      setSelectedGenres((prev) => [...prev, id]);
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
        {data.map((genre) => (
          <GenreButton
            genre={genre}
            selectedJanreCount={selectedGenres.length}
            onClickGenre={onClickGenre}
          />
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
