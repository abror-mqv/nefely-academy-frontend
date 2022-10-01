import React from "react";

import styled from "styled-components";

import Price from "./Price.svg";

const StyledCard = styled.div`
  text-align: center;
  height: 56vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .WhiteH {
    font-family: "Days One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
  }
  .YellowH {
    font-family: "Days One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #d6fb01;
    margin-top: -7%;
  }

  .Card {
    .Image {
      width: 100%;
      height: 33%;
      background-image: url("/media/CoursePicture.png");
    }
    transition: 0.2s;
    background: linear-gradient(
      273.14deg,
      rgba(211, 252, 0, 0.05) 27.24%,
      rgba(252, 242, 0, 0.05) 103.71%
    );
    box-shadow: 6px 6px 12px #000000,
      -3px -3px 14px -3px rgba(255, 255, 255, 0.66);
    height: 80%;
    width: 60%;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    .CardParag {
      font-family: "Jura";
      font-style: normal;
      font-weight: 700;
      font-size: 90%;
      line-height: 21px;
      text-align: center;
      height: 34%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.79);
      span {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        text-align: center;

        color: #e1f801;
      }
    }
    .Price {
      background: linear-gradient(145deg, #d3fc00, #fcf200);
      box-shadow: 6px 6px 12px #000000, -3px -3px 14px rgba(255, 255, 255, 0.66);
      border-radius: 6px;
      width: 100%;
      height: 33%;
      padding: 2%;
      .BlackLine {
        width: 100%;
        height: 2px;
        background-color: #000000;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        p {
          font-family: "Jura";
          font-style: normal;
          font-weight: 700;
          font-size: 160%;
          line-height: 80%;
          width: 80%;
          color: #010101;
          span {
            font-size: 70%;
          }
        }
      }
      button {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }

  .Card:hover {
    box-shadow: 6px 6px 12px #000000, -3px -3px 14px -3px rgb(255, 255, 255);
    cursor: pointer;
  }
`;
function Card(props) {  
  return (
    <StyledCard>
      <div className="header">
        <h3 className="WhiteH">{props.top_name}</h3>
        <h3 className="YellowH">{props.primary_name}</h3>
      </div>
      <div className="Card">
        <div className="Image"></div>
        <p className="CardParag">{props.description}</p>
        <div className="Price">
          <div>
            <p>{props.price} сом</p>
            <div className="BlackLine"></div>
            <p>
              {props.price / 2} <span>в месяц рассрочка на 2 месяца</span>
            </p>
          </div>
          <button>Записаться</button>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
