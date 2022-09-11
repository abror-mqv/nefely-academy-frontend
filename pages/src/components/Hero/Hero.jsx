import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import HomePage from "./Blocks/HomePage";
import Courses from "./Blocks/Courses/Courses";

const Main = styled.div`
  width: 82vw;
  height: 78vh;
  margin: 38px 0 0 140px;
  color: white;
`;

function Hero() {
  return (
    <Main>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomePage />
        </SwiperSlide>
        <SwiperSlide>
          <Courses />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </Main>
  );
}

export default Hero;
