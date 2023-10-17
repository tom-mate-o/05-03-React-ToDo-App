import styled from 'styled-components'

export const PinkButton = styled.button`

    border-radius: 50%;
    border: none;
    background-color: #ff79c6;
    color: #ffff;
    height:2em;
    width: 2em;
    font-size: x-large;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    transition: transform .15s linear;
  
  
  
    &.cornerButton {
        background-color: #ff79c6;
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 30px;
        z-index: 1000;
      }
  
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      } 
`