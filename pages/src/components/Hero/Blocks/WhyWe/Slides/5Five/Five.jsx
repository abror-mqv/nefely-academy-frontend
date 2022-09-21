import React from "react";
import styled from "styled-components";

import Money from "./money.png";
import Team from "./team.png";

const StyledFive = styled.article`
  width: 100%;
  height: 100%;
  padding: 6.8vh;
  font-family: "Days One";
  font-style: normal;
  font-weight: 400;
  font-size: 2.8vh;
  line-height: 3.5vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5vh;
  img{
    width: 17vh;
  }
  .Flexed{
    display: flex;
    justify-content: center;
    gap: 6vh;
    align-items: flex-end;
  }
`;

function Five() {
  return (
    <StyledFive>
      <p className="Flexed">
        <img src={Money.src} alt="" />
        Знакомим с нашими друзьями которые продают модули для ремонта по низким
        ценам
      </p>
      <p className="Flexed">
        Выращиваем из наших учеников дружную семью
        <img src={Team.src} alt="" />
      </p>
    </StyledFive>
  );
}

export default Five;
