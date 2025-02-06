import styled from 'styled-components';

interface StyledContainerProps {
  $inner_color?: string;
  $middle_color?: string;
  $outter_color?: string;
  $outter_height: string;
}

export const Styled_Container = styled.div<StyledContainerProps>`
  div {
    background-color: ${({ $middle_color }) =>
      $middle_color ? $middle_color : 'transparent'};
    height: ${({ $outter_height }) => $outter_height};
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1.5px solid
      ${({ $outter_color }) => ($outter_color ? $outter_color : 'transparent')};

    &:hover {
      border-width: 2.5px;
    }

    &::before {
      border-radius: 100%;
      position: absolute;
      content: '';
      height: calc(${({ $outter_height }) => $outter_height} / 2.2);
      aspect-ratio: 1;
      background-color: ${({ $inner_color }) =>
        $inner_color ? $inner_color : 'transparent'};
    }
  }
`;
