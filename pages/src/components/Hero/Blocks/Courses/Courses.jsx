import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Bolts from "../Bolts/Bolts";


import Card from "./Card";
const CoursesStyled = styled.article`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  color: #000000;
  flex-direction: column;
  align-items: center;
  .swiper-pagination-vertical {
    background-color: #d3fc00;
  }
  h2 {
    font-family: "Days One";
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 62px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 0px 63px #d3fc00;
  }
  h4 {
    font-family: "Jura";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-top: -30px;
    color: rgba(255, 255, 255, 0.79);
  }
  .Main {
    background: rgba(116, 116, 116, 0.1);
    box-shadow: -6px -6px 33px -18px #ffffff, 25px 25px 50px -9px #000000;
    border-radius: 19px;
    width: 100%;
    height: 100%;

    .mySwiper {
      padding: 0% 7%;
      overflow: visible;
      display: flex;
      align-items: center;
      justify-content: center;
      .Buttons {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1%;
      }
    }
    .swiper-slide {
     
    }
  }
`;

import SwiperButtonNext from "./SwiperNextButton";
import SwiperButtonPrev from "./SwiperPrevButton";

function Courses() {
  return (
    <CoursesStyled>
      <h2>Направления Обучения</h2>
      <h4>Профессии и курсы, на которые сейчас открыт набор</h4>
      <div className="Main">
        <Bolts style={{marginTop: "0"}}/>
        <Swiper slidesPerView={3} spaceBetween={"8%"} className="mySwiper">
          <div></div>
          <div className="Buttons">
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </div>

          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
        </Swiper>
      </div>
    </CoursesStyled>
  );
}

export default Courses;
