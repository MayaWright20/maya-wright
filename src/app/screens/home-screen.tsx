'use client';

import { useContext, useEffect, useRef, useState } from 'react';
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
import PageLabel from '../components/page-label/page-label';
import { IsBurgerMenuOpenContext } from '../context/nav-bar/isBurgerMenuOpenContext';

// const MAX_MOBILE_WINDOW_WIDTH = 425;
const AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS = [
  'Expressions on',
  'Expressions off',
];
const AUTOROTATE_LABELS = ['Auto rotate on', 'Auto rotate off'];

const FACIAL_EXPRESSIONS = ['Angry', 'Kiss', 'Awks', 'Sad', 'Shock', 'Shock2'];

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
  const [autoRotate, setAutoRotate] = useState<boolean>(false); // change this to true
  const [carouselTabIndex, setCarouselTabIndex] = useState(-1);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [switchButtonTabIndex, setSwitchButtonTabIndex] = useState(-1);
  const prevCarouselTabIndex = useRef<number>(carouselTabIndex);

  useEffect(() => {
    setTimeout(() => {
      if (!hasScreenLoaded) {
        setHasScreenLoaded(true);
        setCarouselTabIndex(0);
        setSwitchButtonTabIndex(0);
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
    if (index === 0) {
      setPlayModelActions(true);
      setTimeout(() => {
        setCarouselTabIndex(0);
      }, 4000);
    } else {
      setPlayModelActions(false);
      setCarouselTabIndex(-1);
    }
  };

  const setAutoPlaySwitch = (index: number) => {
    index === 0 ? setAutoRotate(true) : setAutoRotate(false);
  };

  const toggleIsNavOpen = () => {
    setIsNavOpen((nav) => !nav);
  };

  useEffect(() => {
    prevCarouselTabIndex.current = playModelActions ? 0 : -1;
    if (isNavOpen) {
      setCarouselTabIndex(-1);
      setSwitchButtonTabIndex(-1);
    } else {
      setTimeout(() => {
        setSwitchButtonTabIndex(0);
        setCarouselTabIndex(prevCarouselTabIndex.current);
      }, 4000);
    }
  }, [isNavOpen, playModelActions, switchButtonTabIndex, carouselTabIndex]);

  return (
    <HasScreenLoaded.Provider value={hasScreenLoaded}>
      <IsBurgerMenuOpenContext.Provider value={isNavOpen}>
        <ModelActionsContext.Provider value={cellIndex}>
          <ModelAutoRotateContext.Provider value={autoRotate}>
            <ModelActionsPlaySwitchContext.Provider value={playModelActions}>
              <Styled_Container>
                <BurgerMenu
                  isNavOpen={isNavOpen}
                  onClick={() => toggleIsNavOpen()}
                  ariaLabel="Navigation bar"
                  tabIndex={hasScreenLoaded ? 0 : -1}
                />
                <Styled_Auto_Actions_Play_Switch
                  $isPageLoaded={hasScreenLoaded}
                  $isNavOpen={isNavOpen}
                >
                  <Switch
                    ariaLabel={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                    tabIndex={switchButtonTabIndex}
                    innerColor={`${COLORS.bright_blue}`}
                    middleColor={`${COLORS.light_grey}`}
                    outterColor={`${COLORS.bright_red}`}
                    outterHeight={'20px'}
                    items={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                    isActive={playModelActions ? 0 : 1}
                    onClick={(index) => setPlayModelActionsSwitch(index)}
                  />
                </Styled_Auto_Actions_Play_Switch>
                <Styled_AutoRotate_Switch
                  $isPageLoaded={hasScreenLoaded}
                  $isNavOpen={isNavOpen}
                >
                  <Switch
                    ariaLabel={AUTOROTATE_LABELS}
                    tabIndex={switchButtonTabIndex}
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
                  $isNavOpen={isNavOpen}
                >
                  <div className="face-actions-carousel">
                    <Carousel
                      ariaLabel={FACIAL_EXPRESSIONS}
                      tabIndex={carouselTabIndex}
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
                      items={FACIAL_EXPRESSIONS}
                      isActive={cellIndex}
                      onClick={(index) => actionIndex(index)}
                    />
                  </div>
                </Styled_Face_Actions_Carousel>
                <PageLabel isPageLoaded={hasScreenLoaded} />
              </Styled_Container>
            </ModelActionsPlaySwitchContext.Provider>
          </ModelAutoRotateContext.Provider>
        </ModelActionsContext.Provider>
      </IsBurgerMenuOpenContext.Provider>
    </HasScreenLoaded.Provider>
  );
}
