'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Cloud, Clouds, Html, OrbitControls, Sky } from '@react-three/drei';
import DirectionalLights from '../lights/directional-lights';
import Face from '../face/face';
import * as THREE from 'three';
// import RedHeart from '../heart/pixelated-heart';
// import { ModelAutoRotateContext } from '@/app/context/r3f/modelAutoRotateContext';

function Loader() {
  // const { progress } = useProgress();

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

  // const autoRotateContext = useContext(ModelAutoRotateContext);

  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{
        overflow: 'visible',
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'transparent',
      }}
    >
      <DirectionalLights />
      <Suspense fallback={<Loader />}>
        <Face />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud
            segments={40}
            bounds={[10, 2, 100]}
            volume={10}
            color="white"
            position={[60, 60, 20]}
          />
          <Cloud
            segments={10}
            bounds={[60, 60, 20]}
            seed={1}
            scale={5}
            volume={20}
            color="white"
            fade={100}
            position={[60, 60, 20]}
          />

          <Cloud
            segments={10}
            bounds={[-50, -10, -10]}
            seed={1}
            scale={5}
            volume={20}
            color="white"
            fade={100}
            position={[60, 60, 20]}
          />
        </Clouds>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          // autoRotate={autoRotateContext}
        />
      </Suspense>
    </Canvas>
  );
}
