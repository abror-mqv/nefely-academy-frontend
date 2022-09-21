import React from "react";
import styled from "styled-components";

import Kaza from "./kaza.png";
import Goal from "./goal.png";

const StyledFour = styled.article`
  width: 100%;
  height: 100%;
  padding: 6.8vh;
  font-family: "Days One";
  font-style: normal;
  font-weight: 400;
  font-size: 2.6vh;
  line-height: 3.5vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5vh;
  img {
    width: 16vh;
  }
  .Flexed{
    display: flex;
    justify-content: center;
    gap: 6vh;
  }
  span {
    color: #d3fc00;
    font-size: 3vh;
  }
`;

function Four() {
  return (
    <StyledFour>
      <p className="Flexed">
        <p>
        По завершению обучения мы помогаем нашим ученикам найти место для
        открытия <span>своего сервиса</span></p>
        <img src={Goal.src} alt="" />
      </p>
      <p className="Flexed">
        <img src={Kaza.src} alt="" />
        Привозим профессиональное оборудование с Казахстана по низким ценам
      </p>
    </StyledFour>
  );
}

export default Four;
