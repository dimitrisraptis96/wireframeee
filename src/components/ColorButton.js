import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { rgba } from "polished";
import styled from "styled-components";

const Circle = styled.div`
  padding: 0.25rem;
  background-color: ${props => rgba(props.color, 0.1)};
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Color = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

const ColorButton = ({ color }) => {
  return (
    <Circle color={color}>
      <Color color={color} />
    </Circle>
  );
};

export default ColorButton;
