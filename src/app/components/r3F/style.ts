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

    &-buttons-mobile {
      top: 70vh;
      width: 100%;
      height: 30%;
      color: red;
      color: grey;
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &.container-buttons-mobile:not(span:nth-child(1)) {
        margin: 0;
      }

      &-background {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 25%;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.789);
        border-radius: 500px;
        padding-inline: 15px;
        border: 1px solid gray;
      }

      &-next {
        font-size: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
      }
      &-next:first-child {
        justify-content: right;
      }
      & span {
        background-color: grey;
        height: 35%;
        aspect-ratio: 1;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        & div {
          text-align: center;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          height: 90%;
          aspect-ratio: 1;
          overflow: hidden;

          & div {
            background-color: grey;
            height: 40%;
            aspect-ratio: 1;
            border-radius: 100%;
          }
        }
      }

      &:not(span:nth-child(1)) {
        margin-left: 2%;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: rgba(112, 237, 164, 0.36);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
`;
