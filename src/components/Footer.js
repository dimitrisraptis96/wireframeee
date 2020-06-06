import React from "react";
import styled from "styled-components";
import Underline from "./Underline";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 1rem;

  & > p {
    font-weight: bold;
    font-size: 16px;
    color: ${props => props.theme.colors.primary};
  }
`;

const Footer = ({}) => {
  return (
    <Container>
      <p>
        Build by{" "}
        <Underline
          href="https://twitter.com/d__raptis"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dmraptis
        </Underline>
        {" "}and{" "}
        <Underline
          href="https://designstripe.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          designstripe
        </Underline>
      </p>
    </Container>
  );
};

export default Footer;
