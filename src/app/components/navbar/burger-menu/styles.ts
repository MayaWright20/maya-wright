import styled from 'styled-components';
import { COLORS } from '@/app/constants/colors';
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

    & p {
      color: ${({ $isNavOpen }) => ($isNavOpen ? 'grey' : 'grey')};
      z-index: 10000;
    }

    &::before {
      position: absolute;
      background-color: white;
      content: '';
      width: 2px;
      margin-left: 8.6vh;
      height: 100vh;
    }

    & .closed {
      background-color: ${({ $isNavOpen }) =>
        $isNavOpen ? 'white' : 'transparent'};
      display: flex;
      margin-left: ${({ $isNavOpen }) => ($isNavOpen ? '1vh' : '5vh')};
      margin-top: ${({ $isNavOpen }) => ($isNavOpen ? '1vh' : '5vh')};
      margin-bottom: ${({ $isNavOpen }) => ($isNavOpen ? '1vh' : 'auto')};
      margin-right: ${({ $isNavOpen }) => ($isNavOpen ? '1vh' : 'auto')};
      aspect-ratio: ${({ $isNavOpen }) => ($isNavOpen ? 'auto' : '1')};
      flex: ${({ $isNavOpen }) => ($isNavOpen ? '1' : 'auto')};
      width: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : '55px')};
      border-radius: ${({ $isNavOpen }) => ($isNavOpen ? '5px' : '100px')};
      border: 2px solid white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      // CHANGE BELOW NULL TO ANIMATION WHEN WORKED OUT
      animation-name: ${({ $loaded }) => ($loaded ? null : 'slideDown')};
      animation-duration: 4s;
      animation-timing-function: ease-in-out;
      animation-timing-function: cubic-bezier(0.9, 0.4, 0.5, 0.9);
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
      margin-top: -15vh;
    }
    to {
      margin-top: 5vh;
    }
  }
`;
