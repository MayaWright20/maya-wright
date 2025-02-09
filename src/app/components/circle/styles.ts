import styled from 'styled-components';

interface StyledContainerProps {
  $inner_color?: string;
  $middle_color?: string;
  $outter_color?: string;
  $outter_height: string;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  .circle {
    background-color: pink;
    border-radius: 100%;
    position: absolute;
    content: '';
    height: calc(${({ $outter_height }) => $outter_height} / 2.2);
    aspect-ratio: 1;
    background-color: ${({ $inner_color }) =>
      $inner_color ? $inner_color : 'transparent'};

    &-container {
      position: relative;
      background-color: ${({ $middle_color }) =>
        $middle_color ? $middle_color : 'transparent'};
      height: ${({ $outter_height }) => $outter_height};
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      border: 1px solid
        ${({ $outter_color }) =>
          $outter_color ? $outter_color : 'transparent'};

      &:hover,
      &:focus {
        border-width: 10px;
        transition: border-width 0.3s ease-in-out;
      }
    }
  }
`;
