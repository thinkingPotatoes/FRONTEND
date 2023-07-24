import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Poster from './Poster.tsx';

function MovieCarousel() {
  return (
    <SwiperContainer>
      <Swiper slidesPerView={'auto'} spaceBetween={16}>
        <SwiperSlide>
          <Poster title={'아이언맨'} rating={3.5} />
        </SwiperSlide>
        <SwiperSlide>
          <Poster title={'아이언맨'} rating={3.5} />
        </SwiperSlide>
        <SwiperSlide>
          <Poster title={'아이언맨'} rating={3.5} />
        </SwiperSlide>
        <SwiperSlide>
          <Poster title={'아이언맨'} rating={3.5} />
        </SwiperSlide>
        <SwiperSlide>
          <Poster title={'아이언맨'} rating={3.5} />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

const SwiperContainer = styled.div`
  .swiper {
    width: 100%;
    height: 240px;
  }

  .swiper-slide {
    width: fit-content;
  }
`;

export default MovieCarousel;
