import styled from 'styled-components'

export const AppContainerWrap = styled.div`
background-color: #44475a;
width: 80vw;
height: auto;
border-radius: 25px;
padding-left: 10px;
padding-right: 10px;
padding-bottom: 25px;
margin-bottom: 10px;
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: column;
border: solid 0.5px #6272a4;

@media screen and (max-width: 700px) {
  width: 85vw; 
}
`