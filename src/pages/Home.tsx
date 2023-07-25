import { styled } from 'styled-components';
import Footer from '../components/home/Footer.tsx';
import Header from '../components/home/Header.tsx';
import SectionTitle from '../components/home/SectionTitle.tsx';
import MovieCarousel from '../components/home/MovieCarousel.tsx';
import BoxOfficeList from '../components/home/BoxOfficeList.tsx';
import MovieRecommendDetail from '../components/home/MovieRecommendDetail.tsx';
import BoxOfficeDetail from '../components/home/BoxOfficeDetail.tsx';

function Home() {
  return (
    <>
      <Upper>
        <Header></Header>
      </Upper>
      <SectionTitle title={'에엥님을 위한 추천👀'} />
      <MovieCarousel />
      <SectionTitle title={'BOX OFFICE🍿'} />
      <BoxOfficeList />
      <SectionTitle title={'(가제) AI 기능 '} />
      <Footer></Footer>
      {/* <MovieRecommendDetail />
      <BoxOfficeDetail /> */}
    </>
  );
}

const Upper = styled.div`
  background-color: var(--main-background);
  z-index: 100;
  position: sticky;
  top: 0;
`;

export default Home;
