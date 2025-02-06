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
      background-color: transparent;
      display: flex;
      margin-left: 40px;
      margin-top: 40px;
      aspect-ratio: 1;
      width: 56px;
      border-radius: 100px;
      border: 2px solid white;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;

      &:hover {
        &::before {
          border-width: 2.5px;
        }
      }

      &::before {
        position: absolute;
        border: 1.5px solid ${({ $bright_orange }) => $bright_orange};
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 100%;
      }

      &::after {
        position: absolute;
        background-color: ${({ $bright_yellow }) => $bright_yellow};
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 100%;
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
