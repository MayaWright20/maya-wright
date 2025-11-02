"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useContext, useRef } from "react";
import {
  Cloud,
  Clouds,
  Grid,
  OrbitControls,
  Sky,
  Stars,
} from "@react-three/drei";
import DirectionalLights from "../lights/directional-lights";
import Face from "../face/face";
import * as THREE from "three";
import { usePersistStore } from "@/store/store";
import { CameraPath } from "../camera-path/camera-path";
import { IsCameraMotionPathsControlContext } from "@/context/r3f/isCameraMotionPathsControlContext";
import Projects3DText from "../3D-text/projects-3D-text";
import Loader from "@/r3F/loader/loader";
import { COLORS } from "@/constants/colors";
import FloralBackground from "../background/floral-background";

interface Props {
  hearts: boolean;
}

function Model(props) {
  const group = useRef<any>();
  const light = useRef<any>();

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 10), 0],
      1.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, -5.5, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
    easing.damp3(
      light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    );
  });
  return (
    <group ref={group} {...props}>
      <spotLight
        angle={0.9}
        penumbra={0.9}
        ref={light}
        castShadow
        intensity={30}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          // args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
    </group>
  );
}

export default function Scene({ hearts }: Props) {
  const { isDaylightTheme, autoRotateModel } = usePersistStore();
  const isCameraMotionPath = useContext(IsCameraMotionPathsControlContext);

  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{
        overflow: "visible",
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.blender_grey,
        zIndex: -9999,
      }}
    >
      <DirectionalLights isDaylightTheme={isDaylightTheme} />
      <Suspense fallback={<Loader />}>
        {autoRotateModel && !isCameraMotionPath && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={autoRotateModel && isDaylightTheme}
          />
        )}
        {isCameraMotionPath && <CameraPath />}
        {isCameraMotionPath && <Projects3DText />}
        <Face />
        <Model />
        <Sky
          distance={450000}
          sunPosition={[0, isDaylightTheme ? 1 : 0, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <FloralBackground />
        {!isDaylightTheme && (
          <Grid
            position={[0, -0.9, 0]}
            args={[30.5, 10.5]}
            cellSize={30.5}
            infiniteGrid
          />
        )}
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
        <Stars
          radius={50}
          depth={50}
          count={5000}
          factor={4}
          saturation={5}
          fade
          speed={1}
        />
      </Suspense>
    </Canvas>
  );
}
