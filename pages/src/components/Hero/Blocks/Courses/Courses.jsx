import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Card from "./Card";
const CoursesStyled = styled.article`
  @media only screen and (max-width: 920px) {
    h3,
    h4 {
      display: none;
    }
    .Main {
      height: 75vh !important;
      width: 90vw !important;
      margin-left: 5vw !important;
    }
    
    .Buttons{
      display: none !important;
    }
  }
  width: 100%;
  height: 100%;
  color: #000000;
  display: block;
  padding-top: 4%;
  .swiper-pagination-vertical {
    background-color: #d3fc00;
  }
  header {
    width: 100%;
    h3 {
      text-align: center;
      font-family: "Days One";
      font-style: normal;
      font-weight: 400;
      font-size: 3.2vw;
      line-height: 62px;
      text-align: center;

      color: #ffffff;

      text-shadow: 0px 0px 63px #d3fc00;
    }
    h4 {
      font-family: "Jura";
      font-style: normal;
      font-weight: 700;
      font-size: 1.2vw;
      line-height: 24px;
      text-align: center;
      color: rgba(255, 255, 255, 0.79);
    }
  }
  .Main {
    background: rgba(116, 116, 116, 0.1);
    box-shadow: -6px -6px 33px -18px #ffffff, 25px 25px 50px -9px #000000;
    border-radius: 19px;
    margin-left: 2%;
    width: 96%;
    height: -webkit-fill-available;
    margin-top: 3vh;
    overflow: hidden;
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

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

function Courses(props) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
    });
  }, []);
  const size = useWindowSize();
  const setIM = props.isc;
  console.log("State1: ", props.isstate);
  return (
    <CoursesStyled>
      <header>
        <h3
          onClick={() => {
            setIM(true);
          }}
        >
          Направления обучения
        </h3>
        <h4>Профессии и курсы, на которые сейчас открыт набор</h4>
      </header>
      <div className="Main">
        <Swiper
          slidesPerView={size.width <= 920 ? 1 : 2}
          spaceBetween={"0%"}
          className="mySwiper"
          mousewheel
          direction={size.width <= 920 ? "vertical" : "horizontal"} 
        >
          <div className="Buttons">
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </div>

          <SwiperSlide>
            <Card
              top_name="Курс"
              primary_name='"Начальный"'
              description="48 часов практики
Выдача сертификатов
после 48 часов
Обучение с 0 до МАСТЕРА"
              btn={props.SldN}
              isc={setIM}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              top_name="Курс"
              primary_name='"Профессиональный"'
              description="72 часов практики
Выдача сертификатов
после 72 часов
Обучение с 0 до МАСТЕРА
Помогаем открыть свою точку"
              isc={setIM}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              top_name="Курс по ремонту"
              primary_name='"Ноутбуков"'
              description="48 часов практики
Выдача сертификатов
после 48 часов
Обучение с 0 до МАСТЕРА"
              isc={setIM}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </CoursesStyled>
  );
}

export default Courses;
