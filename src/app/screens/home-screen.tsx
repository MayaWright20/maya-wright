'use client';

import { useContext, useEffect, useState } from 'react';
import {
  Styled_AutoRotate_Switch,
  Styled_Container,
  Styled_Face_Actions_Carousel,
  Styled_Auto_Actions_Play_Switch,
} from './style';
import { ModelActionsContext } from '@/app/context/r3f/modelActionsContext';
import { ModelAutoRotateContext } from '@/app/context/r3f/modelAutoRotateContext';
import { ModelActionsPlaySwitchContext } from '@/app/context/r3f/modelActionsPlaySwitchContext';
import { ModelActionsLengthContext } from '@/app/context/r3f/modelActionsLengthContext';
import BurgerMenu from '../components/navbar/burger-menu/burger-menu';
import { HasScreenLoaded } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '../constants/colors';
import Carousel from '../components/carousel/carousel';
import Switch from '../components/buttons/switch/switch';
import Scene from '../components/r3F/models/scene/scene';

// const MAX_MOBILE_WINDOW_WIDTH = 425;
const AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS = [
  'expression on',
  'expression off',
];
const AUTOROTATE_LABELS = ['rotate on', 'rotate off'];

export default function HomeScreen() {
  // scenes to create:
  // ____________________
  // emotions
  // pully face / AKKWARD
  // shock with milk pouring down
  // angry
  // wink with tongue
  // kiss

  // Themes
  // ____________________
  // 3D red and blue
  // gold
  // white milk
  // anime
  // playdoe
  // love - red floating foil balloons / fluffy red baloons/ text
  // colorful mixblendmode difference
  const modelActionsLength = useContext(ModelActionsLengthContext);

  const [hasScreenLoaded, setHasScreenLoaded] = useState(false);
  const [cellIndex, setCellIndex] = useState<number>(0);
  const [playModelActions, setPlayModelActions] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      if (!hasScreenLoaded) {
        setHasScreenLoaded(true);
      }
    }, 4000);
  }, []);

  useEffect(() => {
    if (playModelActions) {
      const cellIndexRef = { current: cellIndex };
      const interval = setInterval(() => {
        actionIndex(cellIndexRef.current, false, true);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [playModelActions, cellIndex]);

  const actionIndex = (
    index: number | undefined,
    previous?: boolean,
    next?: boolean
  ) => {
    if (previous) {
      setCellIndex((i) =>
        i !== undefined ? (i > 0 ? i - 1 : modelActionsLength.length - 1) : 0
      );
      return;
    }

    if (next) {
      setCellIndex((i) =>
        i !== undefined && i < modelActionsLength.length - 1
          ? i + 1
          : (i = modelActionsLength.length ? (i = 0) : (i = 0))
      );
      return;
    }

    if (index !== undefined) {
      setCellIndex(index);
    }
  };

  const setPlayModelActionsSwitch = (index: number) => {
    index === 0 ? setPlayModelActions(true) : setPlayModelActions(false);
  };

  const setAutoPlaySwitch = (index: number) => {
    index === 0 ? setAutoRotate(true) : setAutoRotate(false);
  };

  return (
    <HasScreenLoaded.Provider value={hasScreenLoaded}>
      <ModelActionsContext.Provider value={cellIndex}>
        <ModelAutoRotateContext.Provider value={autoRotate}>
          <ModelActionsPlaySwitchContext.Provider value={playModelActions}>
            <Styled_Container>
              <BurgerMenu />
              <Styled_Auto_Actions_Play_Switch $isPageLoaded={hasScreenLoaded}>
                <Switch
                  labels={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                  innerColor={`${COLORS.bright_blue}`}
                  middleColor={`${COLORS.light_grey}`}
                  outterColor={`${COLORS.bright_red}`}
                  outterHeight={'20px'}
                  items={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                  isActive={playModelActions ? 0 : 1}
                  onClick={(index) => setPlayModelActionsSwitch(index)}
                />
              </Styled_Auto_Actions_Play_Switch>
              <Styled_AutoRotate_Switch $isPageLoaded={hasScreenLoaded}>
                <Switch
                  labels={AUTOROTATE_LABELS}
                  innerColor={`${COLORS.bright_green}`}
                  middleColor={`${COLORS.light_grey}`}
                  outterColor={`${COLORS.bright_purple}`}
                  outterHeight={'20px'}
                  items={AUTOROTATE_LABELS}
                  isActive={autoRotate ? 0 : 1}
                  onClick={(index) => setAutoPlaySwitch(index)}
                />
              </Styled_AutoRotate_Switch>
              <Scene />
              <Styled_Face_Actions_Carousel
                $isShowCarousel={playModelActions}
                $isPageLoaded={hasScreenLoaded}
              >
                <div className="face-actions-carousel">
                  <Carousel
                    innerColor={
                      playModelActions
                        ? `${COLORS.fuchia_pink}`
                        : `${COLORS.light_blue}`
                    }
                    middleColor={`${COLORS.light_grey}`}
                    outterColor={
                      playModelActions
                        ? `${COLORS.bright_blue}`
                        : `${COLORS.light_blue}`
                    }
                    outterHeight={'20px'}
                    items={modelActionsLength}
                    isActive={cellIndex}
                    onClick={(index) => actionIndex(index)}
                  />
                </div>
              </Styled_Face_Actions_Carousel>
            </Styled_Container>
          </ModelActionsPlaySwitchContext.Provider>
        </ModelAutoRotateContext.Provider>
      </ModelActionsContext.Provider>
    </HasScreenLoaded.Provider>
  );
}
