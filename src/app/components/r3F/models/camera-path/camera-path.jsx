import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MotionPathControls, useMotion } from '@react-three/drei';
import * as CURVES from './curves';

export function CameraPath({ children }) {
  const [path] = useState('Infinity');
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
        {/* <Loop /> */}
        {children}
      </MotionPathControls>
    </>
  );
}

function Loop({ factor = 0.05 }) {
  const motion = useMotion();
  useFrame((state, delta) => (motion.current += Math.min(0.1, delta) * factor));
}
