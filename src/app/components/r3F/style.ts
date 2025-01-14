import styled from 'styled-components';

export const GridContainer = styled.div`
  & .grid-container-background {
    /* background that can be seen */
    background-color: black;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    overflow: hidden;
    /* background-color: yellow; */
    background-image: url('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg');
    /* justify-content: space-between;
    display: grid;
    grid-template: repeat(10, 1fr) / repeat(10, 1fr); */
  }
  & .grid-container {
    /* background that can be seen */
    /* background-color: black; */
    position: absolute;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    display: grid;
    grid-auto-flow: dense;
    grid-template: repeat(1, 1fr) / repeat(50, 1fr);
  }
  & .grid-item {
    background-color: black;
    height: 25px;
    margin: 0.2px;
    aspect-ratio: 1;
    /* width: 25px; */
    border: 1px solid gray;
  }

  & .container {
    height: 100vh;
    width: 100vw;
    background-color: transparent;

    &-increment-buttons-mobile {
      top: 80vh;
      width: 100%;
      height: 8%;
      color: grey;
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &-next {
        flex: 1;
        font-size: 100%;
      }

      &-next:first-child {
        text-align: right;
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
