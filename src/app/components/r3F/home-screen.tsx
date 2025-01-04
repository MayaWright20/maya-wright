'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useContext, useState } from 'react';
import { useProgress, Html, OrbitControls } from '@react-three/drei';
import Model1 from './models/face/face';
import { CanvasContainer, GridContainer, SceneWrapper } from './style';
import DirectionalLights from './models/lights/directional-lights';
import { LevelContext } from '@/app/context/r3f/modelActionsContext';
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

  const [modelBgCol, setModelBgCol] = useState(true);
  const [action, setAction] = useState(null);
  const gridCell1 = () => {
    console.log('hi', modelBgCol);
    setModelBgCol((bg) => !bg);
    // setAction(MAYA_WINK);
  };

  return (
    <GridContainer>
      <div onMouseEnter={gridCell1}>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <Scene />
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </GridContainer>
  );
}
