import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import One from "./Slides/1One/One";
import Two from "./Slides/2Two/Two";
import Three from "./Slides/3Three/Three";
import Four from "./Slides/4Four/Four";
import Five from "./Slides/5Five/Five";

const WhyWeStyled = styled.article`
  @media only screen and (max-width: 920px) {
    .Phone{
      display: none;
    }
  }
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  .Phone {
    width: 40vh;
  }
  .Why {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
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
      margin-top: 24px;
    }
    .Container {
      width: 100%;
      display: flex;
      justify-content: center;
      width: 80vh;
      .Gallery {
        width: 44vh;
        background: linear-gradient(273.39deg, #d3fc00 25.58%, #fcf200 103.48%);
        /* box-shadow: -3px -3px 14px rgba(255, 255, 255, 0.66),
          6px 6px 12px #000000, inset 0px 0px 13px rgba(0, 0, 0, 0.66); */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        transform: perspective(5px) rotateX(1deg);
        /* margin: 50px; */
        border-radius: 6px;
        position: absolute;
        bottom: 5px;
        height: 7vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 4vh;
        line-height: 119.29%;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        text-shadow: 0px 0px 63px #d3fc00;
        cursor: pointer;
        z-index: 999999;
        transition: 0.2s;
      }
      .Gallery:hover {
        transform: scale(110%);
      }
      .mySwiper {
        height: 61vh;
        width: 87%;
        margin-top: 4vh;
      }
      .SliderBlock {
        width: 80vh;
        position: absolute;
        margin-left: 20px;
      }
    }
  }
`;

function WhyWe() {
  return (
    <WhyWeStyled>
      <img src="/media/SecondPhone.png" className="Phone" alt="" />

      <div className="Why">
        <h5>Почему мы?</h5>
        <div className="Container">
          <a href="https://www.pinterest.com/" className="Gallery">
            Галерея
          </a>
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Two />
            </SwiperSlide>
            <SwiperSlide>
              <One />
            </SwiperSlide>
            <SwiperSlide>
              <Three />
            </SwiperSlide>
            <SwiperSlide>
              <Four />
            </SwiperSlide>
            <SwiperSlide>
              <Five />
            </SwiperSlide>
          </Swiper>
          <img src="/media/whyweslider.png" className="SliderBlock" alt="" />
        </div>
      </div>
    </WhyWeStyled>
  );
}

export default WhyWe;
