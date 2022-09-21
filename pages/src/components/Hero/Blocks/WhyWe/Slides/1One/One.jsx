import React from "react";

import styled from "styled-components";
import Icon from "./icon.png";

const OneStyled = styled.article`
  width: 100%;
  height: 100%;
  padding: 2.5vh;
  font-family: "Days One";
  font-style: normal;
  font-weight: 400;
  font-size: 3vh;
  line-height: 4vh;

  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  .One {
    width: 19vh;
    /* float: left; */
  }
  .Flexed {
    display: flex;
    justify-content: space-between;
  }
  .FlexEnd {
    display: flex;
    justify-content: flex-end;
  }
  span {
    color: #d3fc00;
    font-size: 6vh;
    margin: 0 1vh;
  }
`;

function One() {
  return (
    <OneStyled>
      <p className="Flexed">
        <img src={Icon.src} alt="" className="One" />
        Чтобы стать лидерами рынка мы отобрали лучшие темы для образования
      </p>

      <p>
        Мы предоставляем <span>30</span> тем обучения, это позволит ученикам
        выполнять ремонт любой сложности
      </p>
      <p className="FlexEnd">
        На практику отвели <span>48</span> часов
      </p>
    </OneStyled>
  );
}

export default One;
