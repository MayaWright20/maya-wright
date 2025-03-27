'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import {
  Styled_AutoRotate_Switch,
  Styled_Container,
  Styled_Face_Actions_Carousel,
  Styled_Auto_Actions_Play_Switch,
  Styled_Daylight_Theme_Switch,
} from './style';
import { ModelActionsContext } from '@/app/context/r3f/modelActionsContext';
import { ModelActionsLengthContext } from '@/app/context/r3f/modelActionsLengthContext';
import BurgerMenu from '../components/navbar/burger-menu/burger-menu-closed/burger-menu';
import { HasScreenLoadedContext } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '../constants/colors';
import Carousel from '../components/carousel/carousel';
import Switch from '../components/buttons/switch/switch';
import Scene from '../components/r3F/models/scene/scene';
import PageLabel from '../components/page-label/page-label';
import { IsNavOpenContext } from '../context/nav-bar/isNavOpenContext';
import MouseFollower from '../components/mouse-follower/mouse-follower';
import { usePersistStore } from '../store/store';
import { IsCameraMotionPathsControlContext } from '../context/r3f/isCameraMotionPathsControlContext';
import { useRouter } from 'next/navigation';

const AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS = [
  'Expressions on',
  'Expressions off',
];
const AUTOROTATE_LABELS = ['Auto rotate on', 'Auto rotate off'];
const FACIAL_EXPRESSIONS = ['Angry', 'Kiss', 'Awks', 'Sad', 'Shock', 'Shock2'];
const FACIAL_EXPRESSIONS_COUNT = FACIAL_EXPRESSIONS.length;
const FACIAL_EXPRESSION_TIMER = 8000;
const SCREEN_LOADED_TIMER = 4000;
const CAROUSEL_INDEX_TIMER = 4000;

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

  const {
    playModelActions,
    setPlayModelActions,
    isDaylightTheme,
    setIsDayLightTheme,
    autoRotateModel,
    setAutoRotateModel,
  } = usePersistStore();

  const modelActionsLength = useContext(ModelActionsLengthContext);

  const [hasScreenLoaded, setHasScreenLoaded] = useState(false);
  const [cellIndex, setCellIndex] = useState<number>(0);
  const [carouselTabIndex, setCarouselTabIndex] = useState(-1);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [switchButtonTabIndex, setSwitchButtonTabIndex] = useState(-1);
  const [dayLightThemeTimer, setDayLightThemeTimer] = useState(true);
  const [isCameraMotion, setIsCameraMotion] = useState(false);

  const prevCarouselTabIndex = useRef<number>(carouselTabIndex);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!hasScreenLoaded) {
        setHasScreenLoaded(true);
        setCarouselTabIndex(0);
        setSwitchButtonTabIndex(0);
      }
    }, SCREEN_LOADED_TIMER);
  }, []);

  useEffect(() => {
    if (cellIndex === FACIAL_EXPRESSIONS_COUNT - 1 && dayLightThemeTimer) {
      const timeoutId = setTimeout(() => {
        setIsDayLightTheme(!isDaylightTheme);
      }, FACIAL_EXPRESSION_TIMER);

      return () => clearTimeout(timeoutId);
    }
  }, [cellIndex]);

  useEffect(() => {
    if (playModelActions) {
      const cellIndexRef = { current: cellIndex };
      const interval = setInterval(() => {
        actionIndex(cellIndexRef.current, false, true);
      }, FACIAL_EXPRESSION_TIMER);
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
      }, CAROUSEL_INDEX_TIMER);
    } else {
      setPlayModelActions(false);
      setCarouselTabIndex(-1);
    }
  };

  const setAutoPlaySwitch = (index: number) => {
    index === 0 ? setAutoRotateModel(true) : setAutoRotateModel(false);
  };

  const toggleIsNavOpen = () => {
    setIsNavOpen((nav) => !nav);
  };

  const daylightSwitchHandler = (index: number) => {
    index === 1 ? setIsDayLightTheme(true) : setIsDayLightTheme(false);
    setDayLightThemeTimer((timer) => !timer);
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
      }, CAROUSEL_INDEX_TIMER);
    }
  }, [isNavOpen, playModelActions, switchButtonTabIndex, carouselTabIndex]);

  const goToProjectsHandler = () => {
    setTimeout(() => {
      router.push('/projects');
      setIsCameraMotion(false);
    }, 3500);
  };

  const onClickNavItem = () => {
    setIsNavOpen(false);
    setTimeout(() => {
      setIsCameraMotion(true);
      goToProjectsHandler();
    }, 1000);
  };

  return (
    <HasScreenLoadedContext.Provider value={hasScreenLoaded}>
      <IsNavOpenContext.Provider value={isNavOpen}>
        <IsCameraMotionPathsControlContext.Provider value={isCameraMotion}>
          <ModelActionsContext.Provider value={cellIndex}>
            <MouseFollower />
            <Styled_Container>
              <BurgerMenu
                isNavOpen={isNavOpen}
                onClick={() => toggleIsNavOpen()}
                ariaLabel="Navigation bar"
                tabIndex={hasScreenLoaded ? 0 : -1}
                onClickNavItem={() => onClickNavItem()}
              />
              <Styled_Auto_Actions_Play_Switch
                $isPageLoaded={hasScreenLoaded}
                $isNavOpen={isNavOpen}
              >
                <Switch
                  ariaLabel={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                  tabIndex={switchButtonTabIndex}
                  innerColor={`${COLORS.bright_blue}`}
                  middleColor={
                    isDaylightTheme ? `${COLORS.light_grey}` : 'black'
                  }
                  outterColor={`${COLORS.bright_red}`}
                  outterHeight={'20px'}
                  items={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                  isActive={playModelActions ? 0 : 1}
                  onClick={(index) => setPlayModelActionsSwitch(index)}
                />
              </Styled_Auto_Actions_Play_Switch>
              <Styled_Daylight_Theme_Switch
                $isPageLoaded={hasScreenLoaded}
                $isNavOpen={isNavOpen}
              >
                <Switch
                  vertical
                  ariaLabel={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                  tabIndex={switchButtonTabIndex}
                  innerColor={`${COLORS.bright_orange}`}
                  middleColor={
                    isDaylightTheme ? `${COLORS.light_grey}` : 'black'
                  }
                  outterColor={`${COLORS.bright_green}`}
                  outterHeight={'20px'}
                  items={AUTOPLAY_MODEL_ACTIONS_SWITCH_LABELS}
                  isActive={!isDaylightTheme ? 0 : 1}
                  onClick={(index) => daylightSwitchHandler(index)}
                />
              </Styled_Daylight_Theme_Switch>
              <Styled_AutoRotate_Switch
                $isPageLoaded={hasScreenLoaded}
                $isNavOpen={isNavOpen}
              >
                <Switch
                  ariaLabel={AUTOROTATE_LABELS}
                  tabIndex={switchButtonTabIndex}
                  innerColor={`${COLORS.bright_green}`}
                  middleColor={
                    isDaylightTheme ? `${COLORS.light_grey}` : 'black'
                  }
                  outterColor={`${COLORS.bright_purple}`}
                  outterHeight={'20px'}
                  items={AUTOROTATE_LABELS}
                  isActive={autoRotateModel ? 0 : 1}
                  onClick={(index) => setAutoPlaySwitch(index)}
                />
              </Styled_AutoRotate_Switch>
              <Scene hearts={cellIndex === 1} />
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
                    middleColor={
                      isDaylightTheme ? `${COLORS.light_grey}` : 'black'
                    }
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
          </ModelActionsContext.Provider>
        </IsCameraMotionPathsControlContext.Provider>
      </IsNavOpenContext.Provider>
    </HasScreenLoadedContext.Provider>
  );
}
