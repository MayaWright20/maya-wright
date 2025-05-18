import styled, { css } from 'styled-components';

interface StyledContainerProps {
  $vertical?: boolean;
  $paddingBlock?: string;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  .container {
    position: relative;
    display: flex;
    flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
    align-items: center;
    border-radius: 100px;
    gap: ${({ $paddingBlock }) => ($paddingBlock ? $paddingBlock : '20px')};
    padding-left: ${({ $paddingBlock }) =>
      $paddingBlock ? css`calc($paddingBlock * 2)` : '20px'};

    ${({ $vertical }) =>
      $vertical &&
      css`
        flex-direction: column;
        justify-content: center;
      `}

    &::before {
      display: ${({ $vertical }) => ($vertical ? 'none' : 'block')};
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 1.5px;
      rotate: translateY(-50%);
      background: white;
      content: '';
      width: 100%;
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

      &:hover .circle-container,
      &:focus .circle-container {
        border-width: 10px;
        transition: border-width 0.3s ease-in-out;
      }

      &:focus .circle-container {
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
