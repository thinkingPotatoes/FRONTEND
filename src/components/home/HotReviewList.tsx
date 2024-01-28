import React from 'react';
import styled from 'styled-components';
import HotReviewItem from './HotReviewItem';

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
];

function HotReviewList() {
  return (
    <Container>
      {data.map((review, idx) => (
        <HotReviewItem {...review} key={idx} />
      ))}
    </Container>
  );
}

const Container = styled.div``;

export default HotReviewList;
