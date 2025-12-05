"use client";
import { useRouter } from "next/navigation";
import { usePersistStore } from "../../store/store";
import { Styled_Container } from "./style";
import { Canvas } from "@react-three/fiber";
import { Particles } from "@/r3F/models/particles/particles";
import { Model } from "@/r3F/models/scene/scene";
import { OrbitControls } from "@react-three/drei";
import { Cloud } from "@/r3F/models/word-cloud/word-cloud";
import { Suspense } from "react";

export default function Projects() {
  const { isDaylightTheme } = usePersistStore();
  const router = useRouter();
  const backToHomeHandler = () => {
    router.push("/");
  };
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{
        overflow: "visible",
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "#03000f",
        zIndex: -9999,
      }}
      camera={{ position: [0, 0, 6], fov: 25 }}
    >
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        zoomSpeed={0.1}
      />
      <Particles focus={5.1} speed={100} aperture={1.8} fov={20} curl={0.25} />
      <Suspense fallback={null}>
        <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
          <Cloud count={6} radius={4} />
        </group>
      </Suspense>
      <Model />
    </Canvas>
  );
}
