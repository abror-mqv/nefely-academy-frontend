import React from "react";
import styled from "styled-components";

import Micro from "./path0.png";

const StyledThree = styled.article`
  @media only screen and (max-width: 920px) {
    & {
      display: flex;
      justify-content: center;
      gap: 3.5vh;
      .Flexed {
        img {
          height: 18vh !important;
        }
      }
      font-size: 2.2vh;
      line-height: 2.6vh !important;
      span {
        font-size: 4vh !important;
      }
    }
  }
  width: 100%;
  height: 100%;
  padding: 2.8vh;
  font-family: "Days One";
  font-style: normal;
  font-weight: 400;
  font-size: 2.6vh;
  line-height: 3.5vh;

  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;

  .Micro {
    width: 12.5vh;
  }
  .Flexed {
    display: flex;
    justify-content: center;
    gap: 4vh;
    p {
      width: 66%;
      br {
        margin-top: 1vh;
      }
    }
  }
  span {
    color: #d3fc00;
    font-size: 6vh;
    margin: 0 1vh;
  }
  .Sex {
    width: 85%;
    margin: 0 auto;
  }
  .Ended {
    display: flex;
    justify-content: flex-end;
    padding-left: 30%;
    margin-top: -2vh;
  }
  .Centered {
    display: flex;
    justify-content: center;
  }
`;

function Three() {
  return (
    <StyledThree>
      <p className="Flexed">
        <img src={Micro.src} alt="" className="Micro" />
        <p>
          Поставили в класс лучшее оборудование <br />
          <br />
          Стол для диагностики телефона и выявления повреждений
        </p>
      </p>
      <p className="Sex">
        В нашем классе имеется <span>6</span> профессиональных паяльных станций
      </p>
      <p className="Ended">
        Стол для разбора телефона и ремонта под микроскопом
      </p>
      <p className="Centered">Стол для резки и переклейки дисплев</p>
    </StyledThree>
  );
}

export default Three;
