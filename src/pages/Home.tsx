import { useState } from 'react';
import Footer from '../components/common/Footer.tsx';
import Header from '../components/home/Header.tsx';
import SectionTitle from '../components/home/SectionTitle.tsx';
import MovieCarousel from '../components/home/MovieCarousel.tsx';
import BoxOfficeList from '../components/home/BoxOfficeList.tsx';
import MovieRecommendDetail from '../components/home/MovieRecommendDetail.tsx';
import BoxOfficeDetail from '../components/home/BoxOfficeDetail.tsx';
import styled from 'styled-components';
import Body1 from '../components/common/texts/Body1.ts';
import { useNavigate } from 'react-router-dom';
import HotReviewList from '../components/home/HotReviewList.tsx';
import HotReviewDetail from '../components/home/HotReviewDetail.tsx';

function Home() {
  const navigate = useNavigate();

  const [showBoxOfficeDetail, setShowBoxOfficeDetail] = useState<boolean>(false);
  const [showRecommendDetail, setRecommendDetail] = useState<boolean>(false);
  const [showHotReviewDetail, setHotReviewDetail] = useState<boolean>(false);

  const toggleBoxofficeDetail = () => {
    setShowBoxOfficeDetail(!showBoxOfficeDetail);
  };

  const toggleRecommendDetail = () => {
    setRecommendDetail(!showRecommendDetail);
  };

  const toggleHotReviewDetail = () => {
    setHotReviewDetail(!showHotReviewDetail);
  };

  const isLogin = localStorage.getItem('accessToken') ? true : false;

  const onClickRecommend = () => {
    navigate('/');
  };

  return (
    <>
      <Header></Header>
      <SectionTitle title={'에엥님을 위한 추천👀'} onClickMoreButton={toggleRecommendDetail} />

      {isLogin ? (
        <MovieCarousel />
      ) : (
        <RecommendContainer onClick={onClickRecommend}>
          <RecommendText>내게 맞는 영화 추천받기</RecommendText>
        </RecommendContainer>
      )}

      <SectionTitle title={'BOX OFFICE🍿'} onClickMoreButton={toggleBoxofficeDetail} />
      <BoxOfficeList />

      <SectionTitle title={'지금 핫한 리뷰 🔥'} onClickMoreButton={toggleHotReviewDetail} />
      <HotReviewList />

      <Footer />
      {showRecommendDetail && <MovieRecommendDetail onClickBack={toggleRecommendDetail} />}
      {showBoxOfficeDetail && <BoxOfficeDetail onClickBack={toggleBoxofficeDetail} />}
      {showHotReviewDetail && <HotReviewDetail onClickBack={toggleHotReviewDetail} />}
    </>
  );
}

const RecommendContainer = styled.div`
  padding: 8px 16px;
  height: 56px;
  border-radius: 8px;
  background-color: var(--background-bright);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecommendText = styled(Body1)`
  background: var(--main-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.3px;
  color: transparent;
`;

export default Home;
