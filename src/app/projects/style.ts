import styled from 'styled-components';
import { COLORS } from '../constants/colors';

interface StyledContainer {
  $isDaylightTheme: boolean;
}

export const Styled_Container = styled.div<StyledContainer>`
  background-color: ${({ $isDaylightTheme }) =>
    $isDaylightTheme ? COLORS.daylight_theme_green : COLORS.fuchia_pink};
  width: 100%;
  min-height: 100vh;
  color: ${({ $isDaylightTheme }) =>
    !$isDaylightTheme ? COLORS.daylight_theme_green : COLORS.fuchia_pink};
  text-align: center;
  display: flex;
  font-size: 50px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  & p {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 20px;
  }
`;
