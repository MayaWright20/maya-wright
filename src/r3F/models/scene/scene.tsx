'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useContext } from 'react';
import {
  Cloud,
  Clouds,
  Html,
  OrbitControls,
  Sky,
  Stars,
  useProgress,
} from '@react-three/drei';
import DirectionalLights from '../lights/directional-lights';
import Face from '../face/face';
import * as THREE from 'three';
import PixelatedHeartsInstances from '../heart/pixelated-hearts-instances';
import { usePersistStore } from '@/store/store';
import { CameraPath } from '../camera-path/camera-path';
import { IsCameraMotionPathsControlContext } from '@/context/r3f/isCameraMotionPathsControlContext';
import Projects3DText from '../3D-text/projects-3D-text';

interface Props {
  hearts: boolean;
}

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene({ hearts }: Props) {
  // scenes to create:
  // ____________________
  // emotions
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

  const { isDaylightTheme, autoRotateModel } = usePersistStore();
  const isCameraMotionPath = useContext(IsCameraMotionPathsControlContext);

  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{
        overflow: 'visible',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: -9999,
      }}
    >
      <DirectionalLights isDaylightTheme={isDaylightTheme} />
      <Suspense fallback={<Loader />}>
        {autoRotateModel && !isCameraMotionPath && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={autoRotateModel}
          />
        )}
        {isCameraMotionPath && <CameraPath />}
        {isCameraMotionPath && <Projects3DText />}
        <Face />
        <Sky
          distance={450000}
          sunPosition={[0, isDaylightTheme ? 1 : 0, 0]}
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
        {!isDaylightTheme && (
          <Stars
            radius={50}
            depth={50}
            count={5000}
            factor={4}
            saturation={5}
            fade
            speed={3}
          />
        )}
        {hearts && <PixelatedHeartsInstances boundary={50} count={100} />}
      </Suspense>
    </Canvas>
  );
}
