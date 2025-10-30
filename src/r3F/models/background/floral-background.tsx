import { useLoader, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useState, useMemo, useRef, useEffect } from "react";
import { useSpring } from "@react-spring/three";

export default function FloralBackground() {
  const { viewport } = useThree();
  const [hovered, setHovered] = useState(false);
  const [hoverUV, setHoverUV] = useState([0.5, 0.5]);

  // 1. Textures
  const baseTex = useLoader(THREE.TextureLoader, "/roses.jpg");
  baseTex.wrapS = baseTex.wrapT = THREE.RepeatWrapping;
  baseTex.repeat.set(1, 1);

  const dispTex = useMemo(() => {
    const d = baseTex.clone();
    d.minFilter = d.magFilter = THREE.LinearFilter;
    return d;
  }, [baseTex]);

  // 2. Spring for hover strength
  // NOTE: we keep the animated value object in a ref-friendly way
  const spring = useSpring({
    uScale: hovered ? 1 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  // 3. Create shader material once
  const materialRef = useRef();

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: baseTex },
        uDisp: { value: dispTex },
        uScale: { value: 0 }, // we'll drive this every frame
        uBias: { value: 0.3 },
        uHover: { value: new THREE.Vector2(0.5, 0.5) },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;

        uniform sampler2D uDisp;
        uniform float uScale;
        uniform float uBias;
        uniform vec2 uHover;

        void main() {
          vUv = uv;

          float disp = texture2D(uDisp, uv).r;

          // radial falloff around the cursor
          float dist = distance(uv, uHover);
          float radius = 0.2;
          float edge = 0.2;
          float cursorMask = smoothstep(radius, radius - edge, dist);

          float finalDisp = (disp + uBias) * uScale * cursorMask;

          vec3 newPosition = position + normal * finalDisp;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        uniform sampler2D uMap;

        void main() {
          vec3 color = texture2D(uMap, vUv).rgb;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
  }, [baseTex, dispTex]);

  // put the instance into the ref once
  useEffect(() => {
    materialRef.current = shaderMaterial;
  }, [shaderMaterial]);

  // 4. Sync hover UV → shader uniform whenever hoverUV changes
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uHover.value.set(hoverUV[0], hoverUV[1]);
    }
  }, [hoverUV]);

  // 5. Every frame:
  //   - read spring.uScale.get() (animated value)
  //   - shove it into materialRef.current.uniforms.uScale.value
  useFrame(() => {
    if (materialRef.current) {
      // spring.uScale is an animated value from react-spring.
      // In R3F land, .get() gives us the latest numeric value.
      const scaleVal =
        typeof spring.uScale.get === "function"
          ? spring.uScale.get()
          : spring.uScale; // fallback in case it's already a number

      materialRef.current.uniforms.uScale.value = scaleVal;
    }
  });

  return (
    <mesh
      position={[0, 0, -2]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={(e) => {
        if (e.uv) {
          setHoverUV([e.uv.x, e.uv.y]);
        }
      }}
    >
      <planeGeometry args={[viewport.width, viewport.height, 512, 512]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}
