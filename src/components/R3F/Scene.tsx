'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useProgress, Html, OrbitControls } from '@react-three/drei';
import Model1 from './Model1';
import { CanvasContainer, GridContainer, SceneWrapper } from './style';
import DirectionalLights from './models/lights/DirectionalLights';

function Loader() {
  const { progress } = useProgress();

  return <Html>hello</Html>;
  // return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
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

  return (
    <GridContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{
          overflow: 'visible',
          backgroundColor: 'gainsboro',
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          mixBlendMode: 'difference',
        }}
      >
        <DirectionalLights />
        <Suspense fallback={<Loader />}>
          <Model1 />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate />
        </Suspense>
      </Canvas>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </GridContainer>
  );
}
