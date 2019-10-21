import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { rgba } from "polished";
import styled from "styled-components";

const Circle = styled.div`
  padding: 0.5rem;
  background-color: ${props => rgba(props.theme.colors.primary, 0.1)};
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > svg {
    color: ${props => rgba(props.theme.colors.primary, 1)};
  }
  &:hover {
    background-color: ${props => rgba(props.theme.colors.primary, 1)};
    & > svg {
      color: white;
    }
  }
`;

const AddButton = ({ addColor }) => {
  return (
    <Circle onClick={addColor}>
      <FiPlus size={16} />
    </Circle>
  );
};

export default AddButton;
