import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: -2rem;
  left: -0.5rem;
  background-color: #e50037;
  font-size: 10px;
  font-weight: bold;
  color: white;
  padding: 0.25rem 0.4rem;
  border-radius: 40px;
`;

const NewTag = () => {
  return (
    <Wrapper>
      <Content>New</Content>
    </Wrapper>
  );
};

export default NewTag;
