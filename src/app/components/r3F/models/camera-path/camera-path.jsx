import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MotionPathControls, useMotion } from '@react-three/drei';
import * as CURVES from './curves';
import Face from '../face/face';

export function CameraPath() {
  const [path] = useState('HalfCircle');
  const Curve = CURVES[path];
  return (
    <>
      <MotionPathControls
        focus={[0, 0, 0]}
        debug={true}
        damping={0.2}
        focusDamping={0.15}
      >
        <Curve />
        <Loop />
        <Face />
      </MotionPathControls>
    </>
  );
}

function Loop({ factor = 0.1 }) {
  const motion = useMotion();
  useFrame((state, delta) => (motion.current += Math.min(0.1, delta) * factor));
}
