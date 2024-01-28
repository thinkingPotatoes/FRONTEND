import { styled, css } from 'styled-components';
import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GenreButton from '../components/account/GenreButton';

interface Body2Props {
  isCenter: boolean;
}

const data = [
  { id: 1, title: '로맨스' },
  { id: 2, title: '로맨스' },
  { id: 3, title: '로맨스' },
  { id: 4, title: '로맨스' },
  { id: 5, title: '로맨스' },
  { id: 6, title: '로맨스' },
  { id: 7, title: '로맨스' },
  { id: 8, title: '로맨스' },
  { id: 9, title: '로맨스' },
  { id: 10, title: '로맨스' },
  { id: 11, title: '로맨스' },
  { id: 12, title: '로맨스' },
  { id: 13, title: '로맨스' },
  { id: 14, title: '로맨스' },
  { id: 15, title: '로맨스' },
  { id: 16, title: '로맨스' },
];

function SelectGenre() {
  const [_, setSelectedGenres] = useState<number[]>([]);

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
      <Header>
        <BackButton>
          <BackArrow />
        </BackButton>
      </Header>
      <Head1>가입이 완료되었어요</Head1>
      <Body2 isCenter={false}>즐거운 FILMO 기록을 시작해요🎉</Body2>
      <Main>
        {data.map((genre) => (
          <GenreButton genre={genre} onClickGenre={onClickGenre} />
        ))}
      </Main>
      <Body2 isCenter={true} style={{ marginTop: 'auto' }}>
        다음에 입력하기
      </Body2>
      <NextButton onClick={onClickNext}>시작하기</NextButton>
    </Container>
  );
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

const Body2 = styled.div<Body2Props>`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
  color: var(--disabled);
  font-family: 'Pretendard';
  margin-bottom: 14px;
  color: var(--text-default);

  ${({ isCenter }: Body2Props) =>
    isCenter
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ''};
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: #ffffff;
  height: 52px;
  width: 100%;
  background-color: var(--main);
  border-radius: 8px;
  margin-bottom: 20px;
`;

export default SelectGenre;
