import styled from 'styled-components';

interface StyledCircleWrapperProps {
  $index: number;
  $circleColor: string;
}

export const Styled_Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

export const Styled_Circle_Wrapper = styled.div<StyledCircleWrapperProps>`
  position: absolute;
  margin-top: 25px;
  margin-left: 25px;
  width: ${({ $index }) => 15 - $index * 0.5}px;
  height: ${({ $index }) => 15 - $index * 0.5}px;
  background-color: ${({ $circleColor }) => $circleColor};
  border-radius: 50%;
  pointer-events: none;
  z-index: ${({ $index }) => -$index};
  transition: transform 1s ease-out;
  opacity: ${({ $index }) => 20 / $index};
`;
