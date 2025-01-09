'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useContext, useState } from 'react';
import { useProgress, Html, OrbitControls } from '@react-three/drei';
import Model1 from './models/face/face';
import { CanvasContainer, GridContainer, SceneWrapper } from './style';
import DirectionalLights from './models/lights/directional-lights';
import { ModelActionsContext } from '@/app/context/r3f/modelActionsContext';
import Scene from './models/scene/scene';

function Loader() {
  const { progress } = useProgress();

  return <Html>hello</Html>;
  // return <Html center>{progress.toFixed(1)} % loaded</Html>
}

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

  const [cellIndex, setCellIndex] = useState<number | null>(null);
  const gridCell1 = () => {
    setCellIndex(0);
  };
  const gridCell2 = () => {
    setCellIndex(1);
  };
  const gridCell3 = () => {
    setCellIndex(2);
  };
  const gridCell4 = () => {
    setCellIndex(3);
  };
  const gridCell5 = () => {
    setCellIndex(4);
  };
  const gridCell6 = () => {
    setCellIndex(10);
  };
  const gridCell7 = () => {
    setCellIndex(6);
  };
  const gridCell8 = () => {
    setCellIndex(7);
  };
  const gridCell9 = () => {
    setCellIndex(8);
  };

  return (
    <ModelActionsContext.Provider value={cellIndex}>
      <GridContainer>
        <div onMouseEnter={gridCell1}>0 ANGRY</div>
        <div onMouseEnter={gridCell2}>1KISS</div>
        <div onMouseEnter={gridCell3}>2PULLY FACE</div>
        <div onMouseEnter={gridCell4}>3 SAD</div>
        <Scene />
        <div onMouseEnter={gridCell5}>4 SHOCK</div>
        <div onMouseEnter={gridCell6}>5 WINK</div>
        <div onMouseEnter={gridCell7}>6</div>
        <div onMouseEnter={gridCell8}>7</div>
        <div onMouseEnter={gridCell9}>8</div>
      </GridContainer>
    </ModelActionsContext.Provider>
  );
}
