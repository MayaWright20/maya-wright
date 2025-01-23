import styled from 'styled-components';

export const GridContainer = styled.div`
  & .container {
    height: 100vh;
    width: 100vw;

    &-background {
      // this is the background you need to change and can see
      background-color: grey;
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: -1;
      overflow: hidden;

      display: grid;
      grid-template: repeat(5, 1fr) / repeat(20, 1fr);

      &-item {
        color: white;
        background-color: black;
        margin: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/2;
        text-align: center;
        writing-mode: vertical-rl;
        text-orientation: upright;
      }
    }

    &-buttons-mobile {
      top: 80vh;
      width: 100%;
      height: 8%;
      color: red;
      color: grey;
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &-next {
        flex: 1;
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
        height: 25%;
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

      & :not(span:nth-child(1)) {
        margin-left: 2%;
      }
    }
  }
`;
