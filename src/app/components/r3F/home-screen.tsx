'use client';

import Scene from './models/scene/scene';

import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { GridContainer } from './style';
import { ModelActionsContext } from '@/app/context/r3f/modelActionsContext';
import { ModelAutoRotateContext } from '@/app/context/r3f/modelAutoRotateContext';
import { ModelActionsPlaySwitchContext } from '@/app/context/r3f/modelActionsPlaySwitchContext';
import { ModelActionsLengthContext } from '@/app/context/r3f/modelActionsLengthContext';

const MAX_MOBILE_WINDOW_WIDTH = 425;

const MOBILE_BACKGROUND_WORDS: Record<number, string[]> = {
  // Arrays have to be in the same order as the emotions of the 3d head
  0: ['ANGER', 'الغضب', 'ความโกรธ', '憤怒', 'गुस्सा'],
  1: ['KISS', 'قبلة', 'จูบ', '吻', 'चुंबन'],
  2: ['AHHH', 'محرج', 'งุ่มง่าม', '尷尬的', 'अजीब'],
  3: ['SAD', 'حزين', 'เศร้า', '傷心', 'उदास'],
  4: ['WINK', 'غمزة', 'ขยิบตา', '眨眼', 'मुखर'],
  5: ['SHOCK', 'صدمة', 'ช็อก', '震驚', 'झटका'],
  100: ['MAYA', 'مايا', 'มายา', '瑪雅', 'माया'],
};

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
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [playModelActions, setPlayModelActions] = useState<boolean>(true);
  const [autoModelActionsPlay, setAutoModelActionsPlay] = useState(true);

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
    const cellIndexRef = { current: cellIndex };

    const interval = setInterval(() => {
      actionIndex(cellIndexRef.current, false, true);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ModelActionsContext.Provider value={cellIndex}>
      <ModelAutoRotateContext.Provider value={autoRotate}>
        <ModelActionsPlaySwitchContext.Provider value={playModelActions}>
          <GridContainer>
            <Scene />
            <div className="container-background">
              {Array.from({ length: 500 }).map((_, index) => (
                <div
                  style={{
                    // THIS IS WHERE YOU NEED TO CHANGE THE WHITE TEXT THAT LIGHTS UP
                    color: [
                      cellIndex === undefined
                        ? 100
                        : cellIndex === 0
                        ? 100
                        : cellIndex,
                    ][Math.floor(Math.random() * 5)]
                      ? `rgb(${Math.floor(Math.random() * 250)},${Math.floor(
                          Math.random() * 250
                        )},${Math.floor(Math.random() * 250)})`
                      : 'grey',
                  }}
                  className="container-background-item"
                  key={index}
                >
                  {
                    MOBILE_BACKGROUND_WORDS[
                      cellIndex === undefined ? 100 : cellIndex
                    ][Math.floor(Math.random() * 5)]
                  }
                </div>
              ))}
            </div>
            <div className="container">
              <div className="container-buttons-mobile">
                <div className="container-buttons-mobile-background">
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
            </div>
          </GridContainer>
        </ModelActionsPlaySwitchContext.Provider>
      </ModelAutoRotateContext.Provider>
    </ModelActionsContext.Provider>
  );
}
