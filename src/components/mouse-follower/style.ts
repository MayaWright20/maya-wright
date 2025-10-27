import styled from 'styled-components';

interface StyledCircleWrapperProps {
  $index: number;
  $circleColor: string;
  $showBlur: boolean;
  $width: number;
}

export const Styled_Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

export const Styled_Circle_Wrapper = styled.div<StyledCircleWrapperProps>`
  position: absolute;
  margin-top: 25px;
  margin-left: 25px;
  width: ${({ $index, $width }) => $width - $index * 0.5}px;
  aspect-ratio: 1;
  background-color: ${({ $showBlur, $circleColor }) =>
    $showBlur ? '#ff3ab7' : '#f39f03'};
  border-radius: 50%;
  pointer-events: none;
  z-index: ${({ $index }) => -$index};
  transition: transform 1s ease-out;
  opacity: ${({ $index }) => 10 / $index};

  /* Neon glow effect - only when $showBlur is false */
  box-shadow: ${({ $showBlur, $circleColor }) =>
    !$showBlur
      ? `0 0 5px ${$circleColor},
    0 0 2px ${$circleColor},
    0 0 3px ${$circleColor},
    0 0 4px ${$circleColor},
    0 0 5px ${$circleColor},
    0 0 6px ${$circleColor}`
      : 'none'};

  animation: ${({ $showBlur }) =>
    !$showBlur ? 'neonPulse 2s ease-in-out infinite alternate' : 'none'};

  @keyframes neonPulse {
    from {
      box-shadow: 0 0 5px ${({ $circleColor }) => $circleColor},
        0 0 10px ${({ $circleColor }) => $circleColor},
        0 0 15px ${({ $circleColor }) => $circleColor},
        0 0 20px ${({ $circleColor }) => $circleColor},
        0 0 35px ${({ $circleColor }) => $circleColor},
        0 0 40px ${({ $circleColor }) => $circleColor};
    }
    to {
      box-shadow: 0 0 2px ${({ $circleColor }) => $circleColor},
        0 0 5px ${({ $circleColor }) => $circleColor},
        0 0 8px ${({ $circleColor }) => $circleColor},
        0 0 12px ${({ $circleColor }) => $circleColor},
        0 0 20px ${({ $circleColor }) => $circleColor},
        0 0 25px ${({ $circleColor }) => $circleColor};
    }
  }
`;
