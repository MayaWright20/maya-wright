import styled from 'styled-components';
import { Z_INDEXES } from '../../constants/z-indexes';

export const Styled_Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  z-index: ${Z_INDEXES.level_minus_9999};
`;

interface StyledFaceActionsCarousel {
  $isPageLoaded: boolean;
  $isShowCarousel: boolean;
  $isNavOpen: boolean;
}

interface StyledAutoRotate {
  $isPageLoaded: boolean;
  $isNavOpen: boolean;
}

interface StyledDaylightThemeSwitch {
  $isPageLoaded: boolean;
  $isNavOpen: boolean;
}

export const Styled_Face_Actions_Carousel = styled.div<StyledFaceActionsCarousel>`
  & .face-actions-carousel {
    position: absolute;
    z-index: ${Z_INDEXES.level_10};
    top: 80vh;
    left: 50%;
    transform: translateX(-50%);
    animation-name: ${({ $isPageLoaded, $isShowCarousel, $isNavOpen }) =>
      $isPageLoaded
        ? $isShowCarousel
          ? $isNavOpen
            ? 'slideRight'
            : 'slideLeft'
          : 'slideRight'
        : 'slideLeft'};
    animation-duration: 4s;
    animation-timing-function: ${({ $isPageLoaded, $isShowCarousel }) =>
      $isPageLoaded
        ? $isShowCarousel
          ? 'cubic-bezier(0.9, 0.5, 0.4, 0.9)'
          : 'cubic-bezier(0.9, 0.4, 0.5, 0.9)'
        : 'cubic-bezier(0.9, 0.5, 0.4, 0.9)'};
    animation-fill-mode: forwards;

    &::before {
      position: absolute;
      top: 50%;
      height: 2px;
      background: white;
      content: '';
      width: 100vw;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }

    @keyframes slideLeft {
      from {
        left: 165vw;
      }
      to {
        left: 50%;
      }
    }

    @keyframes slideRight {
      from {
        left: 50%;
        pointer-events: none;
      }
      to {
        left: 165vw;
        pointer-events: none;
        display: none;
      }
    }
  }
`;

export const Styled_Auto_Actions_Play_Switch = styled.div<StyledAutoRotate>`
  position: relative;
  left: 54.5%;
  top: 7%;
  width: 100%;
  overflow: hidden;
  height: fit-content;
  animation-name: ${({ $isPageLoaded, $isNavOpen }) =>
    $isPageLoaded
      ? $isNavOpen
        ? 'slideRightAutoPlaySwitch'
        : 'slideLeftAutoPlaySwitch'
      : 'slideLeftAutoPlaySwitch'};
  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
  animation-fill-mode: forwards;

  @keyframes slideLeftAutoPlaySwitch {
    from {
      left: 165vw;
    }
    to {
      left: 54.5%;
    }
  }

  @keyframes slideRightAutoPlaySwitch {
    from {
      left: 54.5%;
    }
    to {
      left: 165vw;
    }
  }

  &::before {
    position: relative;
    top: 49%;
    height: 1.5px;
    background: white;
    content: '';
    width: 100%;
    z-index: -1;
    overflow: visible;
    transform: translateX(-50%);
  }
`;

export const Styled_AutoRotate_Switch = styled.div<StyledAutoRotate>`
  position: relative;
  right: 0;
  top: 15%;
  width: 50%;
  overflow: hidden;
  height: fit-content;

  animation-name: ${({ $isPageLoaded, $isNavOpen }) =>
    $isPageLoaded
      ? $isNavOpen
        ? 'slideRightAutoRotateSwitch'
        : 'slideLeftAutoRotateSwitch'
      : 'slideLeftAutoRotateSwitch'};
  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
  animation-fill-mode: forwards;

  @keyframes slideLeftAutoRotateSwitch {
    from {
      right: -165vw;
    }
    to {
      right: 0;
    }
  }

  @keyframes slideRightAutoRotateSwitch {
    from {
      right: 0;
    }
    to {
      right: -165vw;
    }
  }

  &::before {
    position: relative;
    top: 49%;
    height: 1.5px;
    background: white;
    content: '';
    width: 100%;
    z-index: -1;
    overflow: visible;
    transform: translateX(-50%);
  }
`;

export const Styled_Daylight_Theme_Switch = styled.div<StyledDaylightThemeSwitch>`
  position: absolute;
  bottom: 22%;
  width: 240px;
  height: fit-content;
  rotate: 180deg;
  overflow: hidden;
  padding-block: 25px;
  animation-name: ${({ $isPageLoaded, $isNavOpen }) =>
    $isPageLoaded
      ? $isNavOpen
        ? 'slideDownDaylightThemeSwitch'
        : 'slideUpDaylightThemeSwitch'
      : 'slideUpDaylightThemeSwitch'};
  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
  animation-fill-mode: forwards;

  @keyframes slideUpDaylightThemeSwitch {
    from {
      bottom: -165vw;
    }
    to {
      bottom: 22%;
    }
  }

  @keyframes slideDownDaylightThemeSwitch {
    from {
      bottom: 22%;
    }
    to {
      bottom: -165vw;
    }
  }

  &::before {
    position: absolute;
    bottom: -25px;
    height: 1.5px;
    background: white;
    content: '';
    width: 100%;
    z-index: -1;
    overflow: visible;
    rotate: 90deg;
    left: 10px;
    transform: translateX(-50%);
  }
`;
