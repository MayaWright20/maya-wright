import styled from 'styled-components';

import { COLORS } from '@/app/constants/colors';

interface ContainerProps {
  $loaded: boolean;
}

export const Container = styled.div<ContainerProps>`
  & .container {
    height: 100vh;
    width: 100vw;

    &-buttons-mobile {
      top: ${({ $loaded }) => ($loaded ? '70vh' : '120vh')};
      width: 100%;
      height: 30%;
      color: red;
      color: grey;
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      bottom: auto;
      animation-name: ${({ $loaded }) => ($loaded ? null : 'slideUp')};
      animation-duration: 4s;
      animation-timing-function: ease-in-out;
      animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
      animation-fill-mode: forwards;

      @keyframes slideUp {
        from {
          top: 115vh;
        }
        to {
          top: 70vh;
        }
      }

      &.container-buttons-mobile:not(span:nth-child(1)) {
        margin: 0;
      }

      /* &-background {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 25%;
        align-items: center;
        justify-content: space-between;
        background-color: ${COLORS.transparent_black};
        border-radius: 500px;
        padding-inline: 15px;
        border: 1px solid gray;

        animation-name: ${({ $loaded }) => ($loaded ? null : 'slideUp')};
        animation-duration: 5s;
        animation-timing-function: ease-in-out;
        animation-timing-function: cubic-bezier(0.9, 0.4, 0.5, 0.9);
      } */

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

      &-background {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 25%;
        align-items: center;
        justify-content: space-between;
        background-color: ${COLORS.transparent_black};
        border-radius: 500px;
        padding-inline: 15px;
        border: 1px solid gray;

        /* animation-name: ${({ $loaded }) => ($loaded ? null : 'slideUp')};
        animation-duration: 5s;
        animation-timing-function: ease-in-out;
        animation-timing-function: cubic-bezier(0.9, 0.4, 0.5, 0.9); */
      }
    }
  }
`;
