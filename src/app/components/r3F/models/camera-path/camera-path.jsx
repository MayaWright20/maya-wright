import * as THREE from 'three';
import { useRef, forwardRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Clouds,
  Cloud,
  MotionPathControls,
  useMotion,
  useTexture,
  OrbitControls,
  MeshWobbleMaterial,
  Gltf,
  Float,
  Environment,
} from '@react-three/drei';
import {
  EffectComposer,
  TiltShift2,
  HueSaturation,
  DotScreen,
} from '@react-three/postprocessing';
import { useControls } from 'leva';
import * as CURVES from './curves';
import Face from '../face/face.jsx';

export function CameraPath() {
  const poi = useRef();
  const motionRef = useRef();
  const { float, attachCamera, debug, path } = useControls({
    attachCamera: true,
    debug: false,
    float: true,
    path: {
      value: 'Circle',
      options: ['Circle', 'Rollercoaster', 'Infinity', 'Heart'],
    },
  });
  const Curve = CURVES[path];
  return (
    <>
      {!attachCamera && <OrbitControls />}
      <MotionPathControls
        object={attachCamera ? null : motionRef}
        focus={poi}
        debug={debug}
        damping={0.2}
        focusDamping={0.15}
      >
        <Curve />
        <Loop />
      </MotionPathControls>
      <Gltf
        visible={!attachCamera}
        src="/head23febgreen-transformed.glb"
        scale={0.03}
        ref={motionRef}
      />
      <Sticker position={[1, 0, 1]} scale={2} ref={poi} />
    </>
  );
}

function Loop({ factor = 0.2 }) {
  const motion = useMotion();
  useFrame((state, delta) => (motion.current += Math.min(0.1, delta) * factor));
}

const Sticker = forwardRef(({ url, ...props }, ref) => {
  return (
    <>
      <mesh ref={ref} {...props}>
        <Face />
      </mesh>
    </>
  );
});
