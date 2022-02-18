import styled from "styled-components";

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.6rem;
  opacity: 0.7;
  color: ${props => props.err ? 'red' : ''}
`;