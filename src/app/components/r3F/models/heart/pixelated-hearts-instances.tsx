import { useEffect, useState } from 'react';
import PixelatedHeart from './pixelated-heart';
import { Float } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';

type HeartType = {
  position: { x: number; y: number; z: number };
  box: number;
};

type Props = {
  boundary: number;
  count: number;
};

export default function PixelatedHeartsInstances({ boundary, count }: Props) {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  useEffect(() => {
    const generateRandomPosition = (boundary: number) => {
      const radius = boundary * (Math.random() * 2 - 1) * 5; // Controls spread around the head
      const angle = Math.random() * Math.PI * 2; // Random rotation around Y-axis
      const heightOffset = (Math.random() - 0.5) * boundary * 2; // Allow placement above and below

      return {
        x: Math.cos(angle) * (radius + Math.random() * 1), // Circular spread around head
        y: heightOffset, // Now allows both above and below the head
        z: Math.sin(angle) * (radius + Math.random() * 2), // Circular spread around head
      };
    };

    const tempHearts: HeartType[] = Array.from({ length: count }, () => ({
      position: generateRandomPosition(boundary),
      box: 1,
    }));

    setHearts(tempHearts);
  }, [boundary, count]);

  return (
    <Physics gravity={[0, 9.81, 0]}>
      <RigidBody>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          {hearts.map((heart, index) => (
            <object3D
              key={index}
              position={[heart.position.x, heart.position.y, heart.position.z]}
            >
              <PixelatedHeart />
            </object3D>
          ))}
        </Float>
      </RigidBody>
    </Physics>
  );
}
