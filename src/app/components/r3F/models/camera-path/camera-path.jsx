import { useFrame } from '@react-three/fiber';
import { MotionPathControls, useMotion } from '@react-three/drei';
import * as THREE from 'three';

const HalfCircle = () => {
  return [
    [
      new THREE.Vector3(0, 0, 5),
      new THREE.Vector3(0, 0, 5),
      new THREE.Vector3(0, -2.5, 5),
      new THREE.Vector3(0, 0, 0.5),
    ],
  ].map(([v0, v1, v2, v3], index) => (
    <cubicBezierCurve3 key={index} v0={v0} v1={v1} v2={v2} v3={v3} />
  ));
};

function Loop({ factor = 0.1 }) {
  const motion = useMotion();
  useFrame((_, delta) => (motion.current += Math.min(0.1, delta) * factor));
}

export function CameraPath() {
  const Curve = HalfCircle;
  return (
    <MotionPathControls
      focus={[0, 0, 0]}
      debug={false}
      damping={0.2}
      focusDamping={0.15}
    >
      <Curve />
      <Loop />
    </MotionPathControls>
  );
}
