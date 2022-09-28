import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {
  Navigation,
  Mousewheel,
  Pagination,
  Thumbs,
  Controller,
  EffectCube,
} from "swiper";

import HomePage from "./Blocks/HomePage";
import Courses from "./Blocks/Courses/Courses";
import WhyWe from "./Blocks/WhyWe/WhyWe";
import Contact from "./Blocks/Contact/Contact";

const Main = styled.div`
  width: 82vw;
  height: 78vh;
  margin: 38px 0 0 140px;
  color: white;
`;

SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectCube]);

const thumbs = [];
for (let i = 0; i < 8; i += 1) {
  thumbs.push(
    <SwiperSlide className="thumbs" key={i}>
      Slide {`${i}`}
    </SwiperSlide>
  );
}
function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <Main>
      <Swiper
        id="thumbs"
        spaceBetween={1}
        slidesPerView={7}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={500}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        controller={{ control: controlledSwiper }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onInit={(swiper) => console.log("swiper init, ", swiper)}
        onSlideChange={(swiper) =>
          console.log("slide change, ", swiper.activeIndex)
        }
        onReachEnd={() => console.log("reach end")}
      >
        <SwiperSlide
          id="home"
          onClick={() => {
            alert(123);
            setControlledSwiper(4);
          }}
        >
          <HomePage />
        </SwiperSlide>
        <SwiperSlide id="courses">
          <Courses />
        </SwiperSlide>
        <SwiperSlide id="whywe">
          <WhyWe />
        </SwiperSlide>
        <SwiperSlide id="contact">
          <Contact />
        </SwiperSlide>
        <SwiperSlide id="footer">Footer</SwiperSlide>
      </Swiper>
    </Main>
  );
}

export default Hero;
