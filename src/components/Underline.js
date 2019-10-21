import styled from "styled-components";
import { rgba } from "polished";

const Underline = styled.a`
  background-image: linear-gradient(
    120deg,
    ${props => rgba(props.theme.colors.primary, 0.2)},
    ${props => rgba(props.theme.colors.primary, 0.2)} 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-position: 0 100%;
  transition: background-size 0.25s ease-in;

  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    background-size: 100% 88% !important;
  }
`;

export default Underline;
