"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useContext, useRef, useReducer, useMemo } from "react";
import { Cloud, Grid, OrbitControls, Sky, Stars } from "@react-three/drei";
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
import { Environment, Lightformer } from "@react-three/drei";
import { BallCollider, Physics, RigidBody } from "@react-three/rapier";

interface Props {
  hearts: boolean;
}

function Sphere({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  color = "white",
  orbitalRadius = 5,
  orbitalSpeed = 0.5,
  index = 0,
  ...props
}: any) {
  const api = useRef<any>(null);
  const ref = useRef<any>(null);
  const time = useRef(0);

  // Position spheres in a roughly spherical distribution around the Face
  const pos = useMemo(() => {
    if (position) return position;

    // Create positions around the Face (which is roughly at origin)
    const theta = (index / 20) * Math.PI * 2; // Distribute evenly around
    const phi = Math.acos(1 - 2 * Math.random()); // Random vertical distribution
    const radius = orbitalRadius + r(2); // Add some randomness to orbital radius

    return [
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
    ];
  }, [index, orbitalRadius, r]);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    time.current += delta * orbitalSpeed;

    if (api.current) {
      // Get current position
      const currentPos = api.current.translation();

      // Calculate orbital motion around Face position (roughly at origin)
      const faceCenter = new THREE.Vector3(0.05, -0.014, 0); // Face's approximate center
      const orbitCenter = vec.copy(faceCenter);

      // Create gentle orbital motion
      const offsetX = Math.sin(time.current + index * 0.5) * 0.5;
      const offsetY = Math.cos(time.current * 0.7 + index * 0.3) * 0.3;
      const offsetZ = Math.sin(time.current * 0.8 + index * 0.8) * 0.5;

      // Apply gentle force toward orbital position
      const targetPos = orbitCenter
        .clone()
        .add(
          new THREE.Vector3(
            pos[0] + offsetX,
            pos[1] + offsetY,
            pos[2] + offsetZ
          )
        );

      const force = targetPos.sub(currentPos).multiplyScalar(0.1);
      api.current.applyImpulse(force);
    }

    if (ref.current) {
      easing.dampC(ref.current.material.color, color, 0.2, delta);
    }
  });

  return (
    <>
      <RigidBody
        linearDamping={2}
        angularDamping={1}
        friction={0.1}
        position={pos}
        ref={api}
        colliders={false}
      >
        <BallCollider args={[0.5]} />
        <mesh ref={ref} castShadow receiveShadow>
          <Face {...props} />
          {/* <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} {...props} /> */}
        </mesh>
      </RigidBody>
      <RigidBody
        linearDamping={2}
        angularDamping={1}
        friction={0.1}
        position={pos}
        ref={api}
        colliders={false}
      >
        <BallCollider args={[0.5]} />
        <mesh castShadow receiveShadow>
          {/* <Face /> */}
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={color} {...props} />
        </mesh>
      </RigidBody>
    </>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>(null);
  useFrame(({ mouse, viewport }) =>
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    )
  );
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
      // gravityScale={-9}
    >
      <BallCollider args={[6]} />
    </RigidBody>
  );
}

export function CirclesS(props: any) {
  const connectors = new Array(20).fill({}).map((_, index) => ({ index }));
  return (
    <>
      <Physics timeStep="vary" gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((sphereProps, i) => (
          <Sphere key={i} {...sphereProps} index={i} />
        ))}
      </Physics>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={100}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
          <Lightformer
            form="ring"
            color="#4060ff"
            intensity={80}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[10, 10, 0]}
            scale={10}
          />
        </group>
      </Environment>
    </>
  );
}

function Model(props: any) {
  const group = useRef<any>(0);
  const light = useRef<any>(0);

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
      <CirclesS />
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
