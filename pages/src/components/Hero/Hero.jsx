import React, { useState } from "react";
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
import SldNxt from "./SldNxt";
import Footer from "./Blocks/Footer/Footer";

const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Days+One&display=swap");
  .HeaderLine {
    max-height: 5vh !important;
  }
  width: 82vw;
  height: 78vh;
  margin: 38px 0 0 140px;
  color: white;
  @media only screen and (max-width: 920px) {
    & {
      margin: 0;
      width: 100vw;
      height: 100vh;
    }
    .HeaderLine {
      margin-top: 2vh;
      margin-bottom: 1vh;
      width: 94vw !important;
      font-size: 3vw !important;
      margin-left: 3vw !important;
      max-height: 4vh !important;
      .swiper-wrapper {
        width: 100%;
      }
    }
  }

  .HeaderLine {
    max-height: 120px;

    width: 60%;
    height: 5vh !important;
    box-shadow: 3px 3px 5px 4px #000000, -3px -3px 9px 0.5px #ffffff;

    background: rgb(200 200 200 / 36%) !important;
    box-shadow: -8px -8px 37px -15px #ffffff, 25px 25px 50px -9px #000000 !important;

    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 1.4vw;
    line-height: 31px;
    padding: 0 32px 0 32px;
    text-align: start;
    display: inline-block;
    .swiper-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .swiper-slide {
        width: max-content;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
    }
    .WhiteLink {
      color: white !important;
      transition: 0.4s;
      text-shadow: 0px 0px 63px #d3fc00;
    }
    .YellowLink {
      transition: 0.4s;
      color: #d3fc00 !important;
      text-shadow: 0px 0px 63px #d3fc00;
    }
    .WhiteLink:active,
    .YellowLink:active {
      transform: scale(80%);
    }
  }
`;

SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectCube]);

function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currentSlide, setCutterntSlide] = useState(1);

  const [isC, setIsC] = useState(false);
  const inputRef = React.useRef(null);

  const headerLinks = [
    <SwiperSlide
      className={currentSlide != 0 ? "WhiteLink" : "YellowLink"}
      key={1}
    >
      Главная
    </SwiperSlide>,
    <SwiperSlide
      className={currentSlide != 1 ? "WhiteLink" : "YellowLink"}
      key={2}
      // button={}
    >
      Курсы
    </SwiperSlide>,
    <SwiperSlide
      className={currentSlide != 2 ? "WhiteLink" : "YellowLink"}
      key={3}
    >
      Методика
    </SwiperSlide>,
    <SwiperSlide
      className={currentSlide != 3 ? "WhiteLink" : "YellowLink"}
      key={4}
    >
      Контакты
      <knop></knop>
    </SwiperSlide>,
    <SwiperSlide
      className={currentSlide != 4 ? "WhiteLink" : "YellowLink"}
      key={5}
    >
      Где~?
    </SwiperSlide>,
  ];
  return (
    <Main>
      <Swiper
        id="thumbs"
        spaceBetween={1}
        slidesPerView={13}
        onSwiper={setThumbsSwiper}
        className="HeaderLine"
      >
        {headerLinks}
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
        onSlideChange={(swiper) => {
          console.log("slide change, ", swiper.activeIndex);
          setCutterntSlide(swiper.activeIndex);
        }}
        onReachEnd={() => console.log("reach end")}
      >
        <SwiperSlide id="home">
          <HomePage />
          <SldNxt stute={isC} setst={setIsC} />
        </SwiperSlide>
        <SwiperSlide id="courses">
          <Courses isc={setIsC} isstate={isC} />
        </SwiperSlide>
        <SwiperSlide id="whywe">
          <WhyWe />
        </SwiperSlide>
        <SwiperSlide id="contact">
          <Contact />
        </SwiperSlide>
        <SwiperSlide id="footer">
          <Footer />
        </SwiperSlide>
      </Swiper>
    </Main>
  );
}

export default Hero;
