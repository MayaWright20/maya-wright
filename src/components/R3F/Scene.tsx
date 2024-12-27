"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, OrbitControls, TransformControls, Text3D, Text } from "@react-three/drei";
import Model1 from "../R3F/Model1";
import { CanvasWrapper } from "./style";
import FaceWrapper from "./Models/Face/FaceWrapper";
import { Physics, RigidBody } from "@react-three/rapier";
// import { font } from "../../app/fonts/Permanent_Marker_Regular.json"

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {

  return (
    <CanvasWrapper>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        <directionalLight
          position={[15, -30, 15]}
          intensity={2}
          color={'#00FF77'}
        />
        <directionalLight
          position={[10, -20, 15]}
          intensity={2}
          color={'#0084ff'}
        />
        <directionalLight position={[-20, -50, -25]} intensity={2} color={'#FF0003'} />
        <directionalLight position={[10, -12, -25]} intensity={5} color={'#0069FF'} />
        <directionalLight position={[-10, -10, -10]} intensity={1} color={'#5300FF'} />
        <directionalLight position={[10, 1000, 20]} intensity={0.5} color={'#D500FF'} />
        <Suspense fallback={<Loader />}>
          <Model1 />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} set={'0, -100.5, 0'} />
      </Canvas>
    </CanvasWrapper >
  )
}