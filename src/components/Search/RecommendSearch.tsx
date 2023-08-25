import styled from 'styled-components';
import { RecentSearchChip } from './RecentSearch';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const movieList: string[] = ['아이언맨', '아이언하트', '아이언'];

function RecommendSearch() {
  return (
    <>
      <Recommendtitle>
        <div className="title">추천 영화 검색어</div>
      </Recommendtitle>
      <SwiperContainer>
        <Swiper slidesPerView={'auto'} spaceBetween={10}>
          {movieList.length > 0 &&
            movieList.map((search, idx) => (
              <SwiperSlide>
                <RecentSearchChip>{search}</RecentSearchChip>
              </SwiperSlide>
            ))}
        </Swiper>
      </SwiperContainer>
    </>
  );
}

const Recommendtitle = styled.div`
  display: flex;
  height: 56px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    color: var(--text-emphasize);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.014px;
  }
`;

const SwiperContainer = styled.div`
  margin-left: 20px;
  height: 52px;
  width: max-content;
  display: flex;
  align-items: center;
  .swiper {
    width: 100%;
  }
  .swiper-slide {
    width: fit-content;
  }
`;
export default RecommendSearch;
