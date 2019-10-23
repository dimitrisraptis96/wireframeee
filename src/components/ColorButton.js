import React, { useState, useRef } from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { TwitterPicker } from "react-color";
import useOutsideClick from "../hooks/useOutsideClick";

const Popover = styled.div`
  position: relative;
  z-index: 200;
  background-color: #fff;
`;

const Cover = styled.div`
  position: absolute;
  top: -22px;
  right: 0px;
  bottom: 0px;
  left: 22px;
`;

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

const ColorButton = ({ color: value }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const [color, setColor] = useState(value || "red");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log(isOpen);

  return (
    <Circle color={color} onClick={toggle}>
      <Color color={color} />
      {isOpen && (
        <Popover ref={ref}>
          <Cover>
            <TwitterPicker onChange={color => setColor(color.hex)} />
          </Cover>
        </Popover>
      )}
    </Circle>
  );
};

export default ColorButton;
