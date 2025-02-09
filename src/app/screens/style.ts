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
  $loaded: boolean;
}

interface StyledAutoRotate {
  $loaded: boolean;
}

export const Styled_Face_Actions_Carousel = styled.div<StyledFaceActionsCarousel>`
  & .face-actions-carousel {
    position: absolute;
    z-index: ${Z_INDEXES.level_10};
    top: 80vh;
    left: 50%;
    transform: translateX(-50%);
    animation-name: ${({ $loaded }) => ($loaded ? null : 'slideLeft')};
    animation-duration: 4s;
    animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
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
  }
`;

export const Styled_AutoRotate_Switch = styled.div<StyledAutoRotate>`
  position: absolute;
  left: 67%;
  top: 20%;
  padding-left: 15px;
  width: 100%;
  overflow: hidden;

  animation-name: ${({ $loaded }) =>
    $loaded ? null : 'slideLeftAutoRotateSwitch'};
  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.9, 0.5, 0.4, 0.9);
  animation-fill-mode: forwards;

  @keyframes slideLeftAutoRotateSwitch {
    from {
      left: 165vw;
    }
    to {
      left: 67%;
    }
  }

  &::before {
    position: absolute;
    top: 49%;
    height: 1.5px;
    background: white;
    content: '';
    width: 100vw;
    z-index: -1;
    overflow: visible;
    transform: translateX(-50%);
  }
`;

export const Styled_Auto_Actions_Play_Switch = styled.div<StyledAutoRotate>`
  position: absolute;
  left: 54.5%;
  top: 10%;
  padding-left: 15px;
  width: 100%;
  overflow: hidden;

  animation-name: ${({ $loaded }) =>
    $loaded ? null : 'slideLeftAutoPlaySwitch'};
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
    position: absolute;
    top: 49%;
    height: 1.5px;
    background: white;
    content: '';
    width: 100vw;
    z-index: -1;
    overflow: visible;
    transform: translateX(-50%);
  }
`;
