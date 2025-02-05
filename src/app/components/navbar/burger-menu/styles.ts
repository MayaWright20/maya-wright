import styled from 'styled-components';
import { Z_INDEXES } from '@/app/constants/z-indexes';

interface StyledContainerProps {
  $loaded: boolean;
  $isNavOpen: boolean;
  $isNavAnimationOpening: boolean;
}

export const Styled_Container = styled.div<StyledContainerProps>`
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

    &::before {
      position: absolute;
      background-color: white;
      content: '';
      width: 2px;
      height: 100vh;
      margin-left: calc(40px + 27px);
    }

    & .closed {
      position: relative;
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

      &:hover {
        &::before {
          position: absolute;
          border: 2.5px rgb(255, 150, 13) solid;
        }
      }

      &::before {
        position: absolute;
        border: 1.5px rgb(255, 150, 13) solid;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 100%;
      }

      &::after {
        position: absolute;
        background-color: rgb(255, 243, 13);
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 100%;
      }
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
