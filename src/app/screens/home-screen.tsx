'use client';

import Scene from '../components/r3F/models/scene/scene';

import { useContext, useEffect, useState } from 'react';
import { Container } from './style';
import { ModelActionsContext } from '@/app/context/r3f/modelActionsContext';
// import { ModelAutoRotateContext } from '@/app/context/r3f/modelAutoRotateContext';
// import { ModelActionsPlaySwitchContext } from '@/app/context/r3f/modelActionsPlaySwitchContext';
import { ModelActionsLengthContext } from '@/app/context/r3f/modelActionsLengthContext';
import BurgerMenu from '../components/navbar/burger-menu/burger-menu';
import FaceModelCarousel from '../components/carousels/face-model-carousel/face-model-carousel';
import { HasScreenLoaded } from '@/app/context/loading/has-screen-loaded';
// const MAX_MOBILE_WINDOW_WIDTH = 425;

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

  const [cellIndex, setCellIndex] = useState<number | undefined>(undefined);

  // const [autoRotate, setAutoRotate] = useState<boolean>(true);
  // const [playModelActions, setPlayModelActions] = useState<boolean>(true);
  // const [autoModelActionsPlay, setAutoModelActionsPlay] = useState(true);

  const modelActionsLength = useContext(ModelActionsLengthContext);

  const [hasScreenLoaded, setHasScreenLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!hasScreenLoaded) {
        setHasScreenLoaded(true);
      }
    }, 4000);
  }, []);

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

  useEffect(() => {
    const cellIndexRef = { current: cellIndex };

    const interval = setInterval(() => {
      actionIndex(cellIndexRef.current, false, true);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HasScreenLoaded.Provider value={hasScreenLoaded}>
      <ModelActionsContext.Provider value={cellIndex}>
        {/* <ModelAutoRotateContext.Provider value={autoRotate}>
        <ModelActionsPlaySwitchContext.Provider value={playModelActions}> */}
        <Container>
          <BurgerMenu />
          <Scene />
          <FaceModelCarousel
            actionIndex={actionIndex}
            cellIndex={cellIndex}
            modelActionsLength={modelActionsLength}
          />
        </Container>
        {/* </ModelActionsPlaySwitchContext.Provider>
      </ModelAutoRotateContext.Provider> */}
      </ModelActionsContext.Provider>
    </HasScreenLoaded.Provider>
  );
}
