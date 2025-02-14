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
    background-color: pink;

    & .nav-open {
      background-color: pink;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: ${({ $isNavOpen }) => ($isNavOpen ? 'flex' : 'none')};
      z-index: calc(${Z_INDEXES.level_10} +99999999999999999999);

      & ul li {
        list-style: none;
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
`;
