import styled, { css } from 'styled-components';

interface StyledContainerProps {
  $vertical?: boolean;
  $paddingInline?: string;
  $paddingBlock?: string;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  & .container {
    position: relative;
    display: flex;
    flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
    align-items: center;
    justify-content: ${({ $vertical }) =>
      $vertical ? 'center' : 'space-around'};
    padding-inline: ${({ $paddingInline }) =>
      $paddingInline ? $paddingInline : '20px'};
    padding-block: ${({ $paddingBlock }) =>
      $paddingBlock ? $paddingBlock : '10px'};
    border-radius: 100px;
    border: 3px solid white;

    ${({ $vertical, $paddingBlock, $paddingInline }) =>
      $vertical &&
      css`
        flex-direction: column;
        justify-content: center;
        padding-inline: ${$paddingBlock ? $paddingBlock : '10px'};
        padding-block: ${$paddingInline ? $paddingInline : '20px'};
      `}
    & * {
      margin: 2px;
    }
  }
`;

export const Styled_CircleWrapper = styled.div`
  div {
    position: relative;
  }
`;
