import { useEffect, useState } from 'react';
import PixelatedHeart from './pixelated-heart';
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
      const heightOffset = (Math.random() - 3) * boundary * 2; // Allow placement above and below

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
    <Physics>
      {hearts.map((heart, index) => (
        <object3D
          key={index}
          position={[heart.position.x, heart.position.y, heart.position.z]}
        >
          <RigidBody gravityScale={-2}>
            <PixelatedHeart />
          </RigidBody>
        </object3D>
      ))}
    </Physics>
  );
}
