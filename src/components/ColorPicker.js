import React from "react";
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

const ColorPicker = ({}) => {
  return (
    <Flex mb={4} alignItems="flex-start">
      <Label>Colors:</Label>
      <ColorContainer>
        <ColorButton color="red" />
        <ColorButton color="yellow" />
        <ColorButton color="#aaa" />
        <ColorButton color="#aaa" />
        <ColorButton color="#aaa" />
        <AddButton addColor={() => {}} />
      </ColorContainer>
    </Flex>
  );
};

export default ColorPicker;
