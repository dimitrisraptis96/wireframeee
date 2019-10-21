import React from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  min-width: 60px;
  text-align: left;
  margin-right: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const RangeInput = ({ min, max, step, name, label, value, onChange }) => {
  return (
    <Flex alignItems="center" mb={4}>
      <Label>{label}:</Label>
      <Slider
        id={name}
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
      />
    </Flex>
  );
};

RangeInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func
};

RangeInput.defaultProps = {
  min: 0,
  max: 1,
  step: 1,
  name: "",
  label: "",
  value: 0,
  onChange: () => {}
};

export default RangeInput;
