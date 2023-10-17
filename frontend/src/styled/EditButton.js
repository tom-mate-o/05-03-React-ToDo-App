import styled from "styled-components";

export const EditButton = styled.div`
  color: grey;
  opacity: 50%;
  position: fixed;
  top: 0em;
  right: 0.25em;
  z-index: 999;

  &:hover {
    color: black;
    opacity: 100%;
    cursor: pointer;
  }
`;
