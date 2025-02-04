import styled from 'styled-components';
import { Z_INDEXES } from '@/app/constants/z-indexes';

interface ContainerProps {
  $loaded: boolean;
  $isNavOpen: boolean;
  $isNavAnimationOpening: boolean;
}

export const Container = styled.div<ContainerProps>`
  nav {
    position: absolute;
    z-index: ${Z_INDEXES.level_10};
    height: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 'auto')};
    width: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 'auto')};
    display: flex;

    animation-name: ${({ $loaded }) => ($loaded ? null : 'slideDown')};
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-timing-function: cubic-bezier(0.9, 0.4, 0.5, 0.9);

    & p {
      color: ${({ $isNavOpen }) => ($isNavOpen ? 'grey' : 'grey')};
      z-index: ${Z_INDEXES.level_10};
    }

    &:hover .burger-line {
      left: 5px;
    }

    &:hover .burger-line:nth-child(2) {
      left: -5px;
    }

    & .burger-line {
      position: relative;
      width: 20px;
      height: 2.5px;
      background-color: rgb(81, 255, 101);
      border-radius: 10px;

      &:first-child {
        top: -4px;
        background-color: rgb(81, 191, 255);
      }

      &:last-child {
        background-color: rgb(254, 95, 95);
        top: 4px;
      }
    }

    &::before {
      position: absolute;
      background-color: white;
      content: '';
      width: 2px;
      margin-left: 68px;
      height: 100vh;
    }

    & .closed {
      background-color: ${({ $isNavOpen }) =>
        $isNavOpen ? 'white' : 'transparent'};
      display: flex;
      margin-left: ${({ $isNavOpen }) => ($isNavOpen ? '3%' : '40px')};
      margin-top: ${({ $isNavOpen }) => ($isNavOpen ? '3%' : '40px')};
      margin-bottom: ${({ $isNavOpen }) => ($isNavOpen ? '3%' : 'auto')};
      margin-right: ${({ $isNavOpen }) => ($isNavOpen ? '3%' : 'auto')};
      aspect-ratio: ${({ $isNavOpen }) => ($isNavOpen ? 'auto' : '1')};
      flex: ${({ $isNavOpen }) => ($isNavOpen ? '1' : 'auto')};
      width: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : '56px')};
      border-radius: ${({ $isNavOpen }) => ($isNavOpen ? '5px' : '100px')};
      border: 2px solid white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  & ul {
    & li {
      &:hover {
        background-color: yellow;
        color: pink;
      }
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
