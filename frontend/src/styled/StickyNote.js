import styled from 'styled-components'

export const StickyNote = styled.div`
  background-color: #f1fa8c;
  width: 9em;
  height: 9em;
  box-shadow: 0px 20px 30px -10px #282a36;
  font-size: 2em;
  padding: 10px;
  transform: rotate(-1.5deg);
  transition: transform 0.15s linear;
  white-space: pre-wrap;
  word-wrap: break-word;

  @media screen and (max-width: 450px) {
    width: 7.5em;
    height: 7.5em;
  }

  @media screen and (max-width: 350px) {
    width: 6.5em;
    height: 6.5em;
  }

  &:hover {
    transition: transform 0.15s linear;
    transform: scale(1.1);
    position: relative;
    z-index: 10;
  }

  &:nth-child(even) {
    background-color: #8be9fd;
    transform: rotate(3.5deg);
    top: 5px;
  }

  &:nth-child(even):hover {
    transition: transform 0.15s linear;
    transform: scale(1.1);
  }

  &:nth-child(3n) {
    background-color: #bd93f9;
    transform: rotate(-2deg);
    top: -5px;
  }

  &:nth-child(3n):hover {
    transition: transform 0.15s linear;
    transform: scale(1.1);
  }

  &:nth-child(4n) {
    background-color: #50fa7b;
    transform: rotate(3deg);
    top: -10px;
  }

  &:nth-child(4n):hover {
    transition: transform 0.15s linear;
    transform: scale(1.1);
  }

  &:nth-child(6n) {
    background-color: #8be9fd;
    transform: rotate(2.5deg);
    top: 5px;
  }

  &:nth-child(6n):hover {
    transition: transform 0.15s linear;
    transform: scale(1.1);
  }
`