import { useRef, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MotionPathControls, useMotion } from '@react-three/drei';
import { useControls } from 'leva';
import * as CURVES from './curves';
import Face from '../face/face.jsx';

export function CameraPath() {
  const poi = useRef();
  const motionRef = useRef();
  const { path } = useControls({
    debug: false,
    float: true,
    path: {
      value: 'Circle',
      options: ['Circle'],
    },
  });
  const Curve = CURVES[path];
  return (
    <>
      <MotionPathControls
        object={true ? null : motionRef}
        focus={poi}
        debug={true}
        damping={0.2}
        focusDamping={0.15}
      >
        <Curve />
        <Loop />
      </MotionPathControls>
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
