import styled from 'styled-components';

interface PageLabel {
  $isPageLoaded: boolean;
}

export const Styled_Container = styled.div<PageLabel>`
  div {
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    border: 1.5px solid white;
    bottom: 23vh;
    right: 0;
    writing-mode: vertical-lr;
    text-orientation: upright;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 2px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: white;
    font-weight: 900;
    text-align: center;
    cursor: pointer;

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
  }
`;
