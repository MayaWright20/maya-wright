import styled from 'styled-components';
import { Z_INDEXES } from '@/app/constants/z-indexes';

interface StyledContainerProps {
  $loaded: boolean;
  $isNavOpen: boolean;
  $bright_orange: string;
  $bright_yellow: string;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  nav {
    position: absolute;
    z-index: ${Z_INDEXES.level_10};
    display: flex;
    aspect-ratio: 1;
    animation-name: ${({ $loaded }) => ($loaded ? null : 'slideDown')};
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-timing-function: cubic-bezier(0.9, 0.4, 0.5, 0.9);
    width: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 'auto')};
    height: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 'auto')};
    top: 0;
    left: 0;

    & .nav {
      &-open {
        content: '';
        background-color: rgba(0, 0, 0, 0.403);
        position: absolute;
        z-index: -1;
        width: 100vw;
        height: 100%;
        align-self: center;
        justify-self: center;

        /* display: ${({ $loaded }) => ($loaded ? 'block' : 'none')}; */
        /* margin-bottom: ${({ $isNavOpen }) => ($isNavOpen ? 0 : '-200vh')}; */

        //WORK ON THIS TOMORROW
        /* animation-name: ${({ $isNavOpen }) =>
          $isNavOpen ? 'slideNavItemsUp' : 'slideNavItemsDown'};
        animation-duration: ${({ $isNavOpen }) => ($isNavOpen ? '5s' : '2s')};
        animation-timing-function: ease-in-out;
        animation-timing-function: cubic-bezier(0.9, 0.4, 0.5, 0.9); */
      }

      &-wrapper {
        margin-top: 150px;
      }

      li {
        list-style: none;
      }

      &-item {
        position: relative;
        margin-bottom: 10px;
        margin-left: 30px;
        margin-right: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover .circle-container {
          border-width: 20px;
          transition: border-width 0.3s ease-in-out;
        }

        &:focus .circle-container {
          border-width: 20px;
          transition: border-width 0.3s ease-in-out;
        }

        &::after {
          content: '';
          position: absolute;
          height: 2px;
          background-color: white;
          width: 98%;
        }

        & p {
          z-index: +1;
          font-size: 3rem;
          text-transform: uppercase;
          font-weight: 600;
          color: white;
        }

        & .circle-container {
          margin-left: 18px;
          margin-right: 30px;
          z-index: +9999999999999999999999999999;
        }
      }
    }

    & .container-circle {
      height: 56px;
      aspect-ratio: 1;
      border-radius: 100px;
      border: 2px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -29px;
      margin-top: 40px;
      z-index: +1;

      &:hover,
      :focus {
        border: 2px solid white;
        padding: 9px;
      }

      &:hover .circle-container {
        border-width: 10px;
        transition: border-width 0.3s ease-in-out;
      }

      &:focus .circle-container {
        border-width: 10px;
        transition: border-width 0.3s ease-in-out;
      }
    }

    &::before {
      position: relative;
      background-color: white;
      content: '';
      width: 2px;
      height: 100vh;
      margin-left: calc(40px + 27px);
    }
  }

  @keyframes slideDown {
    from {
      margin-top: -115vh;
    }
    to {
      margin-top: 0vh;
    }
  }

  @keyframes slideNavItemsUp {
    from {
      margin-bottom: -200vh;
    }
    to {
      margin-bottom: 0vh;
    }
  }

  @keyframes slideNavItemsDown {
    from {
      margin-bottom: 0vh;
    }
    to {
      margin-bottom: -200vh;
    }
  }
`;

export const Styled_Nav_Open = styled.div<StyledContainerProps>`
  /* background-color: rgba(189, 63, 63, 0); */
  position: absolute;
  height: 100%;
  width: 100%;
  margin-top: ${({ $isNavOpen }) => ($isNavOpen ? 0 : '168vh')};
  /* margin-bottom: ${({ $isNavOpen }) => ($isNavOpen ? 0 : '-200vh')}; */

  //WORK ON THIS TOMORROW
  animation-name: ${({ $isNavOpen, $loaded }) =>
    $loaded ? ($isNavOpen ? 'slideNavItemsUp' : 'slideNavItemsDown') : null};
  animation-duration: ${({ $isNavOpen }) => ($isNavOpen ? '5s' : '2s')};
  animation-timing-function: ease-in-out;
  animation-timing-function: cubic-bezier(0.9, 0.4, 0.5, 0.9);

  & .nav {
    &-open {
      content: '';
      background-color: rgba(0, 0, 0, 0.403);
      position: absolute;
      width: 100%;
      height: 100%;
      align-self: center;
      justify-self: center;

      /* display: ${({ $loaded }) => ($loaded ? 'block' : 'none')}; */
    }

    &-wrapper {
      margin-top: 150px;
    }

    li {
      list-style: none;
    }

    &-item {
      position: relative;
      margin-bottom: 10px;
      margin-left: 30px;
      margin-right: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover .circle-container {
        border-width: 20px;
        transition: border-width 0.3s ease-in-out;
      }

      &:focus .circle-container {
        border-width: 20px;
        transition: border-width 0.3s ease-in-out;
      }

      &::after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: white;
        width: 98%;
      }

      & p {
        z-index: +1;
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 600;
        color: white;
      }

      & .circle-container {
        margin-left: 18px;
        margin-right: 30px;
        z-index: +9999999999999999999999999999;
      }
    }

    @keyframes slideDown {
      from {
        margin-top: -115vh;
      }
      to {
        margin-top: 0vh;
      }
    }

    @keyframes slideNavItemsUp {
      from {
        margin-top: 168vh;
      }
      to {
        margin-top: 0vh;
      }
    }

    @keyframes slideNavItemsDown {
      from {
        margin-top: 0vh;
      }
      to {
        margin-top: 168vh;
      }
    }
  }
`;
