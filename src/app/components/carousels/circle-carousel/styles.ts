import styled from 'styled-components';

interface StyledContainerProps {
  $loaded: boolean;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  & .container {
    position: absolute;
    top: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px;
    border-radius: 100px;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid white;
    animation-name: ${({ $loaded }) => ($loaded ? null : 'slideLeft')};
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
    animation-fill-mode: forwards;

    &::before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 2px;
      background: white;
      content: '';
      width: 100vw;
      display: block;
    }

    & * {
      margin: 2px;
    }

    @keyframes slideLeft {
      from {
        left: 165vw;
      }
      to {
        left: 50%;
      }
    }
  }
`;

export const Styled_CircleWrapper = styled.div`
  div {
    position: relative;
  }
`;
