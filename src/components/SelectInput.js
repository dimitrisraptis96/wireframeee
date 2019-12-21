import React from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";
import { rgba } from "polished";
import NewTag from "./NewTag";

const Label = styled.label`
  display: block;
  min-width: 60px;
  text-align: left;
  margin-right: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const Circle = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isSelected
      ? props.theme.colors.primary
      : rgba(props.theme.colors.primary, 0.1)};
  border-radius: 50%;

  & > svg {
    fill: ${props =>
      props.isSelected
        ? "#fff"
        : rgba(props.theme.colors.primary, 0.5)} !important;
  }
`;

const SelectInput = ({ options, name, label, value, onChange }) => {
  return (
    <Flex alignItems="center" mb={4}>
      <Label key={name}>{label}:</Label>
      {options.map((option, index) => (
        <Circle
          isSelected={value === option.value}
          key={option.name}
          onClick={() => onChange(option.value)}
        >
          {option.icon}
        </Circle>
      ))}
      {/* <NewTag /> */}
    </Flex>
  );
};

SelectInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func
};

SelectInput.defaultProps = {
  min: 0,
  max: 1,
  step: 1,
  name: "",
  label: "",
  value: 0,
  onChange: () => {}
};

export default SelectInput;
