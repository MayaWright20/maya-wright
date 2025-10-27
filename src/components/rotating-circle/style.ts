import styled from 'styled-components';

interface PageLabel {
  $isPageLoaded: boolean;
}

export const Styled_Container = styled.div<PageLabel>`
  div {
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    bottom: 15vh;
    right: 5vw;

    animation-name: ${({ $isPageLoaded }) =>
      $isPageLoaded ? null : 'slideLeftAutoRotateSwitch'};
    animation-duration: 4s;
    animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
    animation-fill-mode: forwards;

    @keyframes slideLeftAutoRotateSwitch {
      from {
        right: -165vw;
      }
      to {
        right: 0;
      }
    }

    .circle {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 100vmax;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.05);
        border-color: rgba(255, 255, 255, 0.8);

        .text {
          animation-duration: 8s;
        }
      }
    }

    .logo {
      position: absolute;
      width: 140px;
      height: 140px;
      background: url('https://assets.codepen.io/7344750/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1657025755&width=512');
      background-size: cover;
      border-radius: 100vmax;
      background-position: center;
    }

    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      animation: textRotation 12s linear infinite;
      font-family: ${({ theme }) =>
        theme?.fonts?.primary || 'Arial, sans-serif'};

      &:hover {
        animation-play-state: paused;
      }
    }

    @keyframes textRotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .text span {
      font-size: 12px;
      font-weight: 700;
      color: white;
      letter-spacing: 1px;
      user-select: none;
      transition: all 0.2s ease;

      &:hover {
        color: #ffeb3b;
        font-size: 13px;
      }
    }
  }
`;
