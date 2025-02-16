import { COLORS } from '@/app/constants/colors';
import styled from 'styled-components';

interface NavBarTextProps {
  $isNavOpen: boolean;
}

export const Styled_Container = styled.ul<NavBarTextProps>`
  position: absolute;
  margin-left: 20vw;
  margin-top: 10vh;
  z-index: +99999999;
  display: ${({ $isNavOpen }) => ($isNavOpen ? 'block' : 'none')};

  li {
    list-style: none;
  }
  /*
  @keyframes example {
    from {
      background-color: red;
      opacity: 0;
    }
    to {
      background-color: yellow;
      opacity: 1;
    }
  } */

  .link {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 2fr;

    &:hover p {
      color: ${COLORS.transparent_light_grey};
    }

    &:hover .circle-container {
      border-width: 40px;
      border-color: ${COLORS.transparent_light_grey};
      transition: border-width 0.3s ease-in-out;
    }

    .title-wrapper {
      margin-left: 15px;
      font-size: 56px;
      color: white;
      font-weight: 900;
      margin-top: 10px;
    }
  }
`;
