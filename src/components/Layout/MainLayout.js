import styled from "styled-components";

const Layout = styled.div`
  padding: 1rem;
  width: 100%;

  display: flex;

  & > div {
    margin-right: 2rem;
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

export default Layout;
