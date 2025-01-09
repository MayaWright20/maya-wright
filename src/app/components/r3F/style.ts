import styled from 'styled-components';

export const GridContainer = styled.div`
  /* position: relative; */
  /* background-color: rgba(255, 242, 1, 0.674); */
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);

  & div:nth-child(1) {
    background-color: gainsboro;
    z-index: 1;
  }
  & div:nth-child(2) {
    background-color: orange;
    z-index: 1;
  }
  & div:nth-child(3) {
    background-color: yellow;
    z-index: 1;
  }
  & div:nth-child(4) {
    background-color: green;
    z-index: 1;
  }
  & div:nth-child(5) {
    background-color: yellow;
  }
  & div:nth-child(6) {
    background-color: violet;
  }
  & div:nth-child(7) {
    background-color: gainsboro;
    z-index: 1;
  }
  & div:nth-child(8) {
    background-color: orange;
    z-index: 1;
  }
  & div:nth-child(9) {
    background-color: red;
    z-index: 1;
  }
  & div:nth-child(10) {
    background-color: violet;
    z-index: 1;
  }

  & div:hover {
    /* mix-blend-mode: difference; */
  }
`;
