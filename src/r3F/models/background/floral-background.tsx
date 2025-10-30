import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useState, useMemo, useRef, useEffect } from "react";
import { useSpring } from "@react-spring/three";

export default function FloralBackground() {
  const { size, camera } = useThree();

  // --- hover state
  const [hovered, setHovered] = useState(false);
  const [hoverUV, setHoverUV] = useState([0.5, 0.5]);

  // spring drives how "strong" the reaction is
  const spring = useSpring({
    strength: hovered ? 1 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  // we'll sample this react-spring value manually in r3f loop
  const strengthRef = useRef<any>(0);

  useFrame(() => {
    // react-spring objects expose .get() in Three mode
    strengthRef.current =
      typeof spring.strength.get === "function"
        ? spring.strength.get()
        : spring.strength;
  });

  // --- background plane size (same math you had)
  const planeSize = useMemo(() => {
    const aspect = size.width / size.height;
    const distance = Math.abs(camera.position.z - -2); // camera.z - mesh.z
    const height = 2 * Math.tan((camera.fov * Math.PI) / 360) * distance;
    const width = height * aspect;
    return [width, height];
  }, [size, camera]);

  // ---------------------------------
  // FLOWER CLOUD
  // ---------------------------------

  // how many flowers
  const COUNT = 350;

  // pre-generate flower positions in UV space [0..1] so we can compare to hoverUV easily
  const flowers = useMemo(() => {
    const arr = [];
    for (let i = 0; i < COUNT; i++) {
      // scatter in UV space
      const u = Math.random();
      const v = Math.random();
      // base scale variation
      const baseScale = 0.01 + Math.random() * 0.001;
      // random rotation
      const rot = Math.random() * Math.PI * 90;
      arr.push({
        uv: [u, v],
        baseScale,
        rot,
      });
    }
    return arr;
  }, []);

  // map UV [0..1] → world space coords on the full-screen plane
  function uvToWorld([u, v]) {
    const [w, h] = planeSize;
    // plane is centered at (0,0), so shift by -0.5 to +0.5
    const x = (u - 0.5) * w;
    const y = (v - 0.5) * h;
    return [x, y];
  }

  // geometry + material for each flower
  // For now: a simple planeGeometry with a rose texture / sprite feel.
  // You can swap this for custom flower geometry (e.g. imported model).
  const petalGeo = useMemo(() => {
    // small square billboard
    return new THREE.PlaneGeometry(1, 1, 1, 1);
  }, []);

  // A basic MeshBasicMaterial with transparent texture.
  // If you have multiple flower images, you could build a texture atlas.
  const flowerTex = useMemo(() => {
    const tex = new THREE.TextureLoader().load("/roses1.png");
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipMapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }, []);

  const petalMat = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: flowerTex,
      transparent: true,
      depthWrite: false,
    });
  }, [flowerTex]);

  // ref to instanced mesh so we can update matrices in useFrame
  const instancedRef = useRef();

  // temp objects for matrix math (so we don't allocate per frame)
  const tempObj = useMemo(() => new THREE.Object3D(), []);
  const hoverVec = useRef(new THREE.Vector2(0.5, 0.5));

  // keep hoverVec synced
  useEffect(() => {
    hoverVec.current.set(hoverUV[0], hoverUV[1]);
  }, [hoverUV]);

  // animate every frame: scale / pop based on cursor distance
  useFrame(() => {
    if (!instancedRef.current) return;

    const radius = 0.001; // how far the hover influence reaches in UV space
    const falloff = 0.2; // softness of the boundary
    const popHeight = 0.3; // how far forward in Z they jump

    for (let i = 0; i < COUNT; i++) {
      const f = flowers[i];
      const [u, v] = f.uv;

      // distance in UV space between this flower and hover point
      const d = hoverVec.current.distanceTo(new THREE.Vector2(u, v));

      // cursorMask ~ your smoothstep from shader
      // smoothstep(radius, radius+falloff, d) but inverted so close => 1
      let influence = 1.0 - smoothstep(radius, radius + falloff, d);
      if (influence < 0) influence = 0;

      // final influence also depends on spring "strength"
      const finalInfluence = influence * strengthRef.current;

      // final scale
      const s = f.baseScale * (1 + finalInfluence * 2.0);

      // world position on the plane
      const [x, y] = uvToWorld([u, v]);
      const z = -2 + finalInfluence * popHeight; // lift toward camera

      tempObj.position.set(x, y, z);
      tempObj.scale.set(s, s, s);

      // add a little spin based on hover
      tempObj.rotation.set(
        0,
        0,
        f.rot + finalInfluence * 0.8 // spin petals as they pop
      );

      tempObj.updateMatrix();
      instancedRef.current.setMatrixAt(i, tempObj.matrix);
    }

    instancedRef.current.instanceMatrix.needsUpdate = true;
  });

  // helper smoothstep in JS
  function smoothstep(edge0, edge1, x) {
    const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  return (
    <group>
      {/* Invisible hit area: full-screen plane just to catch pointer events */}
      <mesh
        position={[0, 0, -2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerMove={(e) => {
          if (e.uv) setHoverUV([e.uv.x, e.uv.y]);
        }}
      >
        <planeGeometry args={[...planeSize, 1, 1]} />
        <meshBasicMaterial
          opacity={0}
          transparent
          depthWrite={false}
          depthTest={false}
        />
      </mesh>

      {/* Flowers */}
      <instancedMesh
        ref={instancedRef}
        args={[petalGeo, petalMat, COUNT]}
        frustumCulled={false}
      />
    </group>
  );
}
