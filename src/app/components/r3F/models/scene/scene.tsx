'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useContext, useState } from 'react';
import { useProgress, Html, OrbitControls } from '@react-three/drei';
import DirectionalLights from '../lights/directional-lights';
import Model1 from '../face/face';

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

  const [modelBgCol, setModelBgCol] = useState(true);
  const [action, setAction] = useState(null);
  const gridCell1 = () => {
    console.log('hi', modelBgCol);
    setModelBgCol((bg) => !bg);
    // setAction(MAYA_WINK);
  };

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
        <Model1 />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          // autoRotate
        />
      </Suspense>
    </Canvas>
  );
}
