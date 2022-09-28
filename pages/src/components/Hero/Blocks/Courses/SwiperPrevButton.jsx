import { useSwiper } from "swiper/react";
import { useEffect } from "react";
import styled from "styled-components";

import Prev from './left.svg'
// import NextImg from './'

const Button = styled.div`
  z-index: 9999 !important;
  background: linear-gradient(131.19deg, #f7fc00 14.67%, #d3fc00 90%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -2px -2px 7px -1px #d3fc00,
    inset -2px -2px 5px -2px #000000;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    
    <Button
      onClick={() => {
        swiper.slidePrev();
      }}
      style={{
        color: "red",
        width: "80px",
        height: "80px",
        backgroundColor: "aqua",
      }}
    >
      <img src={Prev.src}/>
    </Button>
  );
};


export default SwiperButtonPrev;