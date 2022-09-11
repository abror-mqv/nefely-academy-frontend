import React from "react";
import styled from "styled-components";
import HeaderBorder from "./header_border.svg";
import Image from "next/image";
import Link from "./Link";

const HeaderStyle = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Days+One&display=swap");
  width: 52vw ;
  height: 50px;
  /* position: absolute; */
  margin: 48px 0 0 140px;
  box-shadow: 3px 3px 5px 4px #000000, -3px -3px 9px 0.5px #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  padding: 0 32px 0 32px;
  div {
    width: 100%;
    height: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      background: linear-gradient(131.19deg, #f7fc00 14.67%, #d3fc00 90%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -2px -2px 7px -1px #d3fc00,
        inset -2px -2px 5px -2px #000000;
      border-radius: 19px;
      width: 10px;
      height: 10px;
    }
   
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div>
       <Link>Курсы</Link>
        <div></div>
        <Link>Методика</Link>
        <div></div>
        <Link>Цены</Link>
        <div></div>
        <Link>Галерея</Link>
        <div></div>
        <Link>Ремонт</Link>
      </div>
    </HeaderStyle>
  );
}

export default Header;
