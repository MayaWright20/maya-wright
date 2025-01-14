'use client';

import Scene from './models/scene/scene';

import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { GridContainer } from './style';
import { ModelActionsContext } from '@/app/context/r3f/modelActionsContext';
import { ModelAutoRotateContext } from '@/app/context/r3f/modelAutoRotateContext';
import { ModelActionsPlaySwitchContext } from '@/app/context/r3f/modelActionsPlaySwitchContext';
import { ModelActionsLengthContext } from '@/app/context/r3f/modelActionsLengthContext';
import { MAX_MOBILE_WINDOW_WIDTH } from '@/app/constants/variables';

export default function HomeScreen() {
  // scenes to create:
  // ____________________
  // emtions
  // pully face
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
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [playModelActions, setPlayModelActions] = useState<boolean>(true);
  const [autoModelActionsPlay, setAutoModelActionsPlay] = useState(true);
  const [autoPlayActionsTimer, setAutoPlayActionsTimer] = useState(true);

  const modelActionsLength = useContext(ModelActionsLengthContext);

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
    if (window.innerWidth <= MAX_MOBILE_WINDOW_WIDTH) {
      const cellIndexRef = { current: cellIndex };

      const interval = setInterval(() => {
        actionIndex(cellIndexRef.current, false, true);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <ModelActionsContext.Provider value={cellIndex}>
      <ModelAutoRotateContext.Provider value={autoRotate}>
        <ModelActionsPlaySwitchContext.Provider value={playModelActions}>
          <GridContainer>
            <Scene />
            <div className="container">
              <div className="container-buttons-mobile">
                <div
                  className="container-buttons-mobile-next"
                  onClick={() => actionIndex(cellIndex, true)}
                >{`<`}</div>
                {modelActionsLength.map((value, index) => {
                  return (
                    <span key={index} onClick={() => actionIndex(index)}>
                      <div>
                        <div
                          style={{
                            backgroundColor:
                              index === cellIndex ? 'white' : 'grey',
                          }}
                        ></div>
                      </div>
                    </span>
                  );
                })}
                <div
                  className="container-buttons-mobile-next"
                  onClick={() => actionIndex(cellIndex, false, true)}
                >{`>`}</div>
              </div>
            </div>
          </GridContainer>
        </ModelActionsPlaySwitchContext.Provider>
      </ModelAutoRotateContext.Provider>
    </ModelActionsContext.Provider>
  );
}
