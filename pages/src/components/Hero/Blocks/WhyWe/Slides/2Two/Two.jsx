import React from "react";
import styled from "styled-components";

import Lang from "./languages.png";
import Time from "./timetable.png";

const TwoStyled = styled.article`
  width: 100%;
  height: 100%;
  padding: 2.8vh;
  font-family: "Days One";
  font-style: normal;
  font-weight: 400;
  font-size: 2.6vh;
  line-height: 4vh;

  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 2vh;

  .Flexed {
    display: flex;
    justify-content: space-between;
    gap: 3vh;
  }
  .FlexEnd {
    display: flex;
    justify-content: flex-end;
  }
  .Centered {
    text-align: center;
  }
  span {
    color: #d3fc00;
    font-size: 6vh;
    margin: 0 1vh;
  }
  .Lang {
    width: 15vh;
  }
  .Time {
    width: 16vh;
  }
  .Last {
    display: flex;
    justify-content: center;
    gap: 5vh;
    font-size: 2.4vh;
  }
`;
function Two() {
  return (
    <TwoStyled>
      <p className="Flexed">
        <img src={Lang.src} alt="" className="Lang" />
        Обучение можно пройти на Русском и на Кыргызском языках
      </p>
      <p className="Wide">
        Разделили группы учеников где ученику будет комфортно получать знания
      </p>
      <p className="Centered">У нас есть 4 группы учеников:</p>
      <p className="Last">
        <div>
          С 10:00 до 12:00 <br /> С 13:00 до 15:00 <br />С 15:00 до 17:00
          <br /> С 17:00 до 19:00
        </div>

        <img src={Time.src} alt="" className="Time" />
      </p>
    </TwoStyled>
  );
}

export default Two;
