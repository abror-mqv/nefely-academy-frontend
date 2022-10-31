import React from "react";
import styled from "styled-components";

import Money from "./money.webp";
import Team from "./team.webp";

const StyledFive = styled.article`
  @media only screen and (max-width: 920px) {
    & {
      display: flex;
      justify-content: center !important;
      gap: 6vh;
      padding: 2vh !important;
      align-items: center !important;
      .Flexed {
        img {
          /* height: 18vw !important; */
        }
        display: flex;
        flex-wrap: wrap;
        gap: 3vh !important;
      }
      .Flexedd {
        img {
          /* height: 18vw !important; */
        }
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        gap: 3vh !important;
      }
      font-size: 2.2vh;
      line-height: 2.8vh !important;
      span {
        font-size: 2.2vh !important;
      }
      p {
        text-align: center;
        img {
          margin: 0 auto;
          height: 50%;
          width: 30%;
        }
      }
    }
  }
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
  img {
    width: 17vh;
  }
  .Flexed {
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
        <img src={Money.src} alt="цум подвал курсы" />
        Знакомим с нашими друзьями которые продают модули для ремонта по низким
        ценам
      </p>
      <p className="Flexed">
        Выращиваем из наших учеников дружную семью
        <img src={Team.src} alt="курсы техники для детей" />
      </p>
    </StyledFive>
  );
}

export default Five;
