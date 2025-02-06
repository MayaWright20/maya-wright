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

    & .container-circle {
      height: 56px;
      aspect-ratio: 1;
      border-radius: 100px;
      border: 2px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -30px;
      margin-top: 40px;
      z-index: +1;
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
