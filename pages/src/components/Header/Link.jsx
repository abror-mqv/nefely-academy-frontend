import React from "react";
import styled from "styled-components";

const StyledLine = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Days One";
  color: #ffffff;
  text-shadow: 0px 0px 63px #d3fc00;
`;
function Link({children}) {
  return <StyledLine>{children}</StyledLine>;
}

export default Link;
