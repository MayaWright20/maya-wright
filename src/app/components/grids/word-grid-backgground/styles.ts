import styled from 'styled-components';

export const GridContainer = styled.div`
  & .container {
    height: 100vh;
    width: 100vw;

    &-background {
      // this is the background you need to change and can see
      background-color: yellow;
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: -1;
      overflow: hidden;
      display: grid;
      top: 0;
      grid-template: repeat(20, 1fr) / repeat(20, 5%);

      &-item {
        color: white;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/2;
        text-align: center;
        writing-mode: vertical-rl;
        text-orientation: upright;
        font-size: clamp(0.5rem, 1vw, 1rem);
        border: 1px solid gray;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
