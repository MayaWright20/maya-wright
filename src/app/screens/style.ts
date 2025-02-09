import styled from 'styled-components';
import { Z_INDEXES } from '../constants/z-indexes';

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
}

interface StyledAutoRotate {
  $isPageLoaded: boolean;
}

export const Styled_Face_Actions_Carousel = styled.div<StyledFaceActionsCarousel>`
  & .face-actions-carousel {
    position: absolute;
    z-index: ${Z_INDEXES.level_10};
    top: 80vh;
    left: 50%;
    transform: translateX(-50%);
    animation-name: ${({ $isPageLoaded, $isShowCarousel }) =>
      $isPageLoaded
        ? $isShowCarousel
          ? 'slideLeft'
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

  animation-name: ${({ $isPageLoaded }) =>
    $isPageLoaded ? null : 'slideLeftAutoPlaySwitch'};
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

  animation-name: ${({ $isPageLoaded }) =>
    $isPageLoaded ? null : 'slideLeftAutoRotateSwitch'};
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
