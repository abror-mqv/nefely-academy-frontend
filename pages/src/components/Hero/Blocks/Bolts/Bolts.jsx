import React from "react";
import styled from "styled-components";
import Bolt from './bolt.png'

const StyledBolts = styled.div`
  position: absolute;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  margin-top: -6vh;
  .Bolt1 {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 6%;
    left: 1vw;
    animation-name: spin;
    animation-duration: 8000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(720deg);
    }
    66% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
  .Bolt2 {
    width: 32px;
    position: absolute;
    height: 32px;
    bottom: 6%;
    left: 1vw;
    animation-name: spin;
    animation-duration: 10000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
  .Bolt3 {
    width: 32px;
    position: absolute;
    height: 32px;
    top: 6%;
    right: 1vw;
    animation-name: spin;
    animation-duration: 10000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
  .Bolt4 {
    width: 32px;
    position: absolute;
    height: 32px;
    bottom: 6%;
    right: 1vw;

    animation-name: spin;
    animation-duration: 6000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
`;

function Bolts() {
  return (
    <StyledBolts>
      <img className="Bolt1" src={Bolt.src} alt="" />
      <img className="Bolt2" src={Bolt.src} alt="" />
      <img className="Bolt3" src={Bolt.src} alt="" />
      <img className="Bolt4" src={Bolt.src} alt="" />
    </StyledBolts>
  );
}

export default Bolts;
