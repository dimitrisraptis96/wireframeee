import React from "react";
import PropTypes from "prop-types";

const RangeInput = ({ min, max, step, name, label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        id={name}
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
      />
      {value} px
    </div>
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
