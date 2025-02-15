import styled from 'styled-components';

interface ContainerProps {
  $isNavOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 0)};
  height: ${({ $isNavOpen }) => ($isNavOpen ? '100%' : 0)};
  position: absolute;
  /* z-index: ${({ $isNavOpen }) => ($isNavOpen ? 999999999999999 : -9)}; */

  & .inner-circle {
    background-color: transparent;
    content: '';
    height: 56px;
    aspect-ratio: 1;
  }

  & .close-nav {
    content: '';
    background-color: transparent;
    width: 56px;
    height: 56px;
    position: absolute;
    z-index: +1;
    margin-left: 40px;
    margin-top: 40px;
  }
`;
