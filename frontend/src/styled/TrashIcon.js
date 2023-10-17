import styled from "styled-components";

export const Trashicon = styled.div`
  color: grey;
  opacity: 50%;
  position: fixed;
  bottom: 0em;
  right: 0.25em;
  z-index: 999;

  &:hover {
    color: black;
    opacity: 100%;
    cursor: pointer;
  }
`;
