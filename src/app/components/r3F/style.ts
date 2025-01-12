import styled from 'styled-components';

export const GridContainer = styled.div`
  & .container {
    height: 100vh;
    width: 100vw;

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
