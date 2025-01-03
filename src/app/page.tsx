'use client';
import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/r3F/Scene"), { ssr: false })

export default function Home() {
  return (
    <Scene />
  );
}
