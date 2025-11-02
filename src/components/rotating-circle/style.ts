import styled from 'styled-components';

interface PageLabel {
  $isPageLoaded: boolean;
  $night_blue_white: string;
  $is_daylight_theme: boolean;
  $bright_green: string;
}

export const Styled_Container_Rotating = styled.div<PageLabel>`
  div {
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    bottom: 14vh;
    right: 6vw;

    animation-name: ${({ $isPageLoaded }) =>
      $isPageLoaded ? null : 'slideLeftAutoRotateSwitchRotating'};
    animation-duration: 4s;
    animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
    animation-fill-mode: forwards;

    @keyframes slideLeftAutoRotateSwitchRotating {
      from {
        right: -165vw;
      }
      to {
        right: 6vw;
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
         'Arial, sans-serif'};

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
      letter-spacing: 1px;
      user-select: none;
      transition: all 0.2s ease;
      color: ${({ $is_daylight_theme, $night_blue_white }) =>
        !$is_daylight_theme ? 'white' : 'inherit'};

      ${({ $is_daylight_theme }) =>
        $is_daylight_theme &&
        `
        &:nth-child(1) { color: #ff0080; } /* Hot Pink */
        &:nth-child(2) { color: #00ff80; } /* Neon Green */
        &:nth-child(3) { color: #8000ff; } /* Electric Purple */
        &:nth-child(4) { color: #ff8000; } /* Electric Orange */
        &:nth-child(5) { color: #0080ff; } /* Electric Blue */
        &:nth-child(6) { color: #ffff00; } /* Electric Yellow */
        &:nth-child(7) { color: #ff4000; } /* Electric Red */
        &:nth-child(8) { color: #40ff00; } /* Lime Green */
        &:nth-child(9) { color: #ff0040; } /* Electric Rose */
        &:nth-child(10) { color: #00ffff; } /* Cyan */
        &:nth-child(11) { color: #ff8080; } /* Light Coral */
        &:nth-child(12) { color: #80ff80; } /* Light Green */
        &:nth-child(13) { color: #8080ff; } /* Light Blue */
        &:nth-child(14) { color: #ffff80; } /* Light Yellow */
        &:nth-child(15) { color: #ff80ff; } /* Light Magenta */
        &:nth-child(16) { color: #80ffff; } /* Light Cyan */
        &:nth-child(17) { color: #ff4080; } /* Electric Pink */
        &:nth-child(18) { color: #80ff40; } /* Electric Lime */
        &:nth-child(19) { color: #4080ff; } /* Electric Sky Blue */
        &:nth-child(20) { color: #ff8040; } /* Electric Peach */
        &:nth-child(21) { color: #ff0080; } /* Hot Pink */
        &:nth-child(22) { color: #00ff80; } /* Neon Green */
        &:nth-child(23) { color: #8000ff; } /* Electric Purple */
        &:nth-child(24) { color: #ff8000; } /* Electric Orange */
        &:nth-child(25) { color: #0080ff; } /* Electric Blue */
        &:nth-child(26) { color: #ffff00; } /* Electric Yellow */
        &:nth-child(27) { color: #ff4000; } /* Electric Red */
        &:nth-child(28) { color: #40ff00; } /* Lime Green */
        &:nth-child(29) { color: #ff0040; } /* Electric Rose */
        &:nth-child(30) { color: #00ffff; } /* Cyan */
        &:nth-child(31) { color: #ff8080; } /* Light Coral */
        &:nth-child(32) { color: #80ff80; } /* Light Green */
        &:nth-child(33) { color: #8080ff; } /* Light Blue */
        &:nth-child(34) { color: #ffff80; } /* Light Yellow */
        &:nth-child(35) { color: #ff80ff; } /* Light Magenta */
        &:nth-child(36) { color: #80ffff; } /* Light Cyan */
        &:nth-child(37) { color: #ff4080; } /* Electric Pink */
        &:nth-child(38) { color: #80ff40; } /* Electric Lime */
        &:nth-child(39) { color: #4080ff; } /* Electric Sky Blue */
        &:nth-child(40) { color: #ff8040; } /* Electric Peach */
        `}

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
