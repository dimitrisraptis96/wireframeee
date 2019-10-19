import styled from "styled-components";

const Toast = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.gray};
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0.25rem;
`;

export default Toast;
