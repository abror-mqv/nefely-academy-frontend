import React from "react";

import styled from "styled-components";

const TextStyle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 3vh;
  line-height: 40px;
  color: #ffffff;
  text-shadow: 0px 0px 63px #d3fc00;
  writing-mode: vertical-rl;
  height: 100vh;
  text-orientation: upright;
  margin: 40px 0 0 40px;
  position: fixed;
`;
function SideLineText() {
  return <TextStyle>Курсы по ремонту телефонов</TextStyle>;
}

export default SideLineText;
