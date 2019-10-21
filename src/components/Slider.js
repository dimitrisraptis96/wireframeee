import styled from "styled-components";
import { rgba } from "polished";

const Input = styled.input`
  display: block;
  -webkit-appearance: none;
  background-color: ${props => rgba(props.theme.colors.primary, 0.1)};
  width: 200px;
  height: 6px;
  border-radius: 100px;
  margin: 0 auto;
  outline: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: ${props => props.theme.colors.primary};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    background-color: ${props => rgba(props.theme.colors.primary, 0.9)};
  }

  &::-webkit-slider-thumb:active {
    transform: scale(1.1);
  }
`;

export default Input;
