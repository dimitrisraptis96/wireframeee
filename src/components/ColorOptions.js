import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import { Flex } from "rebass/styled-components";
import ColorButton from "./ColorButton";

import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > *:last-child {
    margin-right: 0.5rem;
  }
`;

const Label = styled.p`
  display: block;
  min-width: 60px;
  text-align: left;
  margin-right: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const DEFAULT_COLORS = ["#DEE1FF"];

const ColorOptions = ({ updateColors }) => {
  const [colors, setColors] = useState(DEFAULT_COLORS);

  useEffect(() => {
    updateColors(colors);
  }, [colors]);

  const editColor = index => color => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const deleteColor = index => color => {
    setColors([...colors.slice(0, index), ...colors.slice(index + 1)]);
  };

  const addColor = () => {
    setColors([...colors, "#DEE1FF"]);
  };

  return (
    <Flex mb={4} alignItems="flex-start">
      <Label>Colors:</Label>
      <ColorContainer>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            handleChange={editColor(index)}
            deleteColor={deleteColor(index)}
            onlyOne={colors.length === 1}
          />
        ))}
        <AddButton addColor={addColor} />
      </ColorContainer>
    </Flex>
  );
};

export default ColorOptions;
