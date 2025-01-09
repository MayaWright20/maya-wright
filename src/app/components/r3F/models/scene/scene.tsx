'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useContext, useEffect, useState } from 'react';
import { useProgress, Html, OrbitControls } from '@react-three/drei';
import DirectionalLights from '../lights/directional-lights';
import Face from '../face/face';
import RedHeart from '../heart/pixelated-heart';
import { ModelAutoRotateContext } from '@/app/context/r3f/modelAutoRotateContext';

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
  // colorful mixblendmode difference

  const autoRotateContext = useContext(ModelAutoRotateContext);

  return (
    <Canvas
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 1.5]}
      style={{
        overflow: 'visible',
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'pink',
      }}
    >
      <DirectionalLights />
      <Suspense fallback={<Loader />}>
        <Face />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotateContext}
        />
      </Suspense>
    </Canvas>
  );
}
