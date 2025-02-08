import styled, { css } from 'styled-components';

interface StyledContainerProps {
  $vertical?: boolean;
  $paddingBlock?: string;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  & .container {
    position: relative;
    display: flex;
    flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
    align-items: center;
    border-radius: 100px;
    gap: 20px;

    ${({ $vertical }) =>
      $vertical &&
      css`
        flex-direction: column;
        justify-content: center;
      `}

    &::before {
      position: absolute;
      top: 50%;
      left: ${({ $vertical }) => ($vertical ? '50%' : '0')};
      transform: ${({ $vertical }) =>
        $vertical ? 'translate(-50%, -50%) rotate(90deg)' : 'translateY(-50%)'};
      height: 2px;
      background: white;
      content: '';
      width: ${({ $vertical }) => ($vertical ? '100vw' : '100%')};
      z-index: -1;
    }

    &-circle {
      padding: ${({ $paddingBlock }) =>
        $paddingBlock ? $paddingBlock : '10px'};
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      border: 1px solid white;

      &:hover {
        border: 2px solid white;
        padding: ${({ $paddingBlock }) =>
          $paddingBlock ? css`calc($paddingBlock - 1px)` : '9px'};
      }

      &:hover .circle-container {
        border-width: 10px;
        transition: border-width 0.3s ease-in-out;
      }
    }
  }
`;

export const Styled_CircleWrapper = styled.div`
  div {
    position: relative;
  }
`;
