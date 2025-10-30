import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useState } from "react";
import { a, useSpring } from "@react-spring/three";

export default function FloralBackground() {
  const { viewport } = useThree();
  const [hovered, setHovered] = useState(false);

  const texture = useLoader(THREE.TextureLoader, "/roses.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  const displacement = texture.clone();
  displacement.minFilter = displacement.magFilter = THREE.LinearFilter;

  const { scale } = useSpring({
    scale: hovered ? 1 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <a.mesh
      position={[0, 0, -2]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[viewport.width, viewport.height, 512, 512]} />
      <a.meshStandardMaterial
        map={texture}
        displacementMap={displacement}
        displacementScale={scale}
        displacementBias={0.3}
        roughness={0.1}
        metalness={0.5}
      />
    </a.mesh>
  );
}
