import React from "react";
import { Flex } from "rebass/styled-components";

import styled from "styled-components";
import { rgba } from "polished";
import FigmaLogo from "./Icons/FigmaLogo";
import NewTag from "./NewTag";

const Anchor = styled.a`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${"" /* padding: 0 3rem; */}

  &,
  &:link,
  &:active,
  &​:visited {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    color: #e50037;
    text-decoration: none;
  }

  &:hover,
  & > p:hover {
    color: ${props => rgba(props.theme.colors.primary, 0.6)};
    color: #e50037;
  }

  font-size: 12px;

  & > svg {
    margin-right: 0.5rem;
  }
`;

function Announcement({}) {
  return (
    <Anchor
      href="https://www.figma.com/c/plugin/787660853629435276/Wireframer"
      rel="noreferrer"
      target="_blank"
    >
      <FigmaLogo size={20} />
      <p>Figma plugin is out!!!</p>
      <NewTag />
    </Anchor>
  );
}

export default Announcement;
