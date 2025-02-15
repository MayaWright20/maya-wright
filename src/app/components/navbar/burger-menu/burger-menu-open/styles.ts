import styled from 'styled-components';

interface ContainerProps {
  $isNavOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  /* width: 100%; */
  width: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 0)};
  height: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 0)};
  position: absolute;
  z-index: -999;

  & .inner-circle {
    background-color: black;
    content: '';
    height: 56px;
    aspect-ratio: 1;
  }
`;
