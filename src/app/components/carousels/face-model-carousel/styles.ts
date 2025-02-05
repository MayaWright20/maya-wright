import styled from 'styled-components';

import { COLORS } from '@/app/constants/colors';

interface StyledContainerProps {
  $loaded: boolean;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  & .container {
    height: 100%;
    width: 100%;

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
      bottom: auto;
      animation-name: ${({ $loaded }) => ($loaded ? null : 'slideLeft')};
      animation-duration: 4s;
      animation-timing-function: ease-in-out;
      animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
      animation-fill-mode: forwards;

      @keyframes slideLeft {
        from {
          left: 115vw;
        }
        to {
          left: 0;
        }
      }

      &.container-buttons-mobile:not(span:nth-child(1)) {
        margin: 0;
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
        background-color: white;
        height: 35%;
        aspect-ratio: 1;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        z-index: 2;

        & div {
          text-align: center;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${COLORS.light_grey};
          height: 80%;
          border-radius: 100px;
          aspect-ratio: 1;
          overflow: hidden;
          z-index: 2;

          & div {
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
        border: 3px solid white;
        border-radius: 100px;

        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          height: 2px;
          background: white;
          content: '';
          width: 100%; /* Match the parent container width */
          display: block;
        }
      }
    }
  }
`;
