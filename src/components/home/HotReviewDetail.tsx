import React from 'react';
import { ReactComponent as BackArrow } from '../../assets/image/icon/backArrow.svg';
import HotReviewItem from './HotReviewItem';
import styled from 'styled-components';
interface Props {
  onClickBack: () => void;
}

const data = [
  {
    grade: 4,
    subject: '블랙위도우의 첫등장!',
    content:
      '#아이언맨 #블랙위도우 #두근기대 | 천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO ...',
    like: 7,
    comment: 4,
    blog: '떼잉님의 연습장',
    poster: 'http://file.koreafilm.or.kr/thm/02/00/01/31/tn_DPF001396.jpg',
  },
  {
    grade: 4,
    subject: '블랙위도우의 첫등장!',
    content:
      '#아이언맨 #블랙위도우 #두근기대 | 천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO ...',
    like: 7,
    comment: 4,
    blog: '떼잉님의 연습장',
    poster: 'http://file.koreafilm.or.kr/thm/02/00/01/31/tn_DPF001396.jpg',
  },
  {
    grade: 4,
    subject: '블랙위도우의 첫등장!',
    content:
      '#아이언맨 #블랙위도우 #두근기대 | 천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO ...',
    like: 7,
    comment: 4,
    blog: '떼잉님의 연습장',
    poster: 'http://file.koreafilm.or.kr/thm/02/00/01/31/tn_DPF001396.jpg',
  },

  {
    grade: 4,
    subject: '블랙위도우의 첫등장!',
    content:
      '#아이언맨 #블랙위도우 #두근기대 | 천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO ...',
    like: 7,
    comment: 4,
    blog: '떼잉님의 연습장',
    poster: 'http://file.koreafilm.or.kr/thm/02/00/01/31/tn_DPF001396.jpg',
  },
  {
    grade: 4,
    subject: '블랙위도우의 첫등장!',
    content:
      '#아이언맨 #블랙위도우 #두근기대 | 천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO ...',
    like: 7,
    comment: 4,
    blog: '떼잉님의 연습장',
    poster: 'http://file.koreafilm.or.kr/thm/02/00/01/31/tn_DPF001396.jpg',
  },
  {
    grade: 4,
    subject: '블랙위도우의 첫등장!',
    content:
      '#아이언맨 #블랙위도우 #두근기대 | 천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO ...',
    like: 7,
    comment: 4,
    blog: '떼잉님의 연습장',
    poster: 'http://file.koreafilm.or.kr/thm/02/00/01/31/tn_DPF001396.jpg',
  },
];

function HotReviewDetail({ onClickBack }: Props) {
  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackArrow />
        </BackButton>
        <Headertitle>지금 핫한 리뷰 🔥</Headertitle>
      </Header>
      <Main>
        {data.map((review, ranking) => (
          <HotReviewItem {...review} key={ranking} />
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
  padding: 0 20px;
  min-height: 100vh;
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
  gap: 15.5px;
  margin-top: 24px;
  flex-wrap: wrap;
`;

export default HotReviewDetail;
