import { styled } from 'styled-components';
import Footer from './Footer.tsx';
import Header from './Header.tsx';
import SectionTitle from './SectionTitle.tsx';
import MovieCarousel from './MovieCarousel.tsx';
import BoxOfficeList from './BoxOfficeList.tsx';

function MainLayout() {
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
    </>
  );
}

const Upper = styled.div`
  background-color: var(--main-background);
  z-index: 100;
  position: sticky;
  top: 0;
`;

export default MainLayout;
