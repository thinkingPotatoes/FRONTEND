import { useState } from 'react';
import { styled } from 'styled-components';
import Footer from '../components/common/Footer.tsx';
import Header from '../components/home/Header.tsx';
import SectionTitle from '../components/home/SectionTitle.tsx';
import MovieCarousel from '../components/home/MovieCarousel.tsx';
import BoxOfficeList from '../components/home/BoxOfficeList.tsx';
import MovieRecommendDetail from '../components/home/MovieRecommendDetail.tsx';
import BoxOfficeDetail from '../components/home/BoxOfficeDetail.tsx';

function Home() {
  const [showBoxOfficeDetail, setShowBoxOfficeDetail] = useState<boolean>(false);
  const [showRecommendDetail, setRecommendDetail] = useState<boolean>(false);

  const toggleBoxofficeDetail = () => {
    setShowBoxOfficeDetail(!showBoxOfficeDetail);
  };

  const toggleRecommendDetail = () => {
    setRecommendDetail(!showRecommendDetail);
  };

  return (
    <>
      <Header></Header>
      <SectionTitle title={'에엥님을 위한 추천👀'} onClickMoreButton={toggleBoxofficeDetail} />
      <MovieCarousel />
      <SectionTitle title={'BOX OFFICE🍿'} onClickMoreButton={toggleRecommendDetail} />
      <BoxOfficeList />
      <Footer></Footer>
      {showRecommendDetail && <MovieRecommendDetail onClickBack={toggleRecommendDetail} />}
      {showBoxOfficeDetail && <BoxOfficeDetail onClickBack={toggleBoxofficeDetail} />}
    </>
  );
}
export default Home;
