import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import { TextureLoader } from "three";
import { Router, useRouter } from "next/router";
import Link from "next/link";

interface Item {
  url: string;
  isMobile: boolean;
  href: string;
}

// Array of image URLs - replace these with your actual image paths
const imageUrls: Item[] = [
  {
    url: "/images/aap.png",
    isMobile: false,
    href: "https://accelerate.google/intl/en/awards/agencies",
  },
  {
    url: "/images/premium.png",
    isMobile: false,
    href: "https://shoppingsolutions.withgoogle.com/premium-partnership/",
  },
  {
    url: "/images/dedicated.png",
    isMobile: false,
    href: "https://shoppingsolutions.withgoogle.com/dedicated-partnership/",
  },
  {
    url: "/images/ai-trends.png",
    isMobile: false,
    href: "https://data-ai-trends.withgoogle.com/",
  },
  {
    url: "/images/phantom-land.png",
    isMobile: false,
    href: "https://www.phantom.land/",
  },
  {
    url: "/images/skyscanner.png",
    isMobile: false,
    href: "https://www.partners.skyscanner.net/advertising/skyscanner-advertising-specifications",
  },
  {
    url: "/images/lush.png",
    isMobile: true,
    href: "https://github.com/MayaWright20/Lush",
  },
  {
    url: "/images/flags.png",
    isMobile: true,
    href: "https://github.com/MayaWright20/Flags",
  },
  {
    url: "/images/bpme.png",
    isMobile: true,
    href: "https://apps.apple.com/gb/app/bpme-pay-for-fuel-in-your-car/id1257725938",
  },
  {
    url: "/images/be-scam-ready.png",
    isMobile: false,
    href: "https://bescamready.withgoogle.com/intl/en",
  },
  {
    url: "/images/supper.png",
    isMobile: true,
    href: "",
  },
  {
    url: "/images/casa.png",
    isMobile: false,
    href: "https://www.casamigos.com/en-us/cocktails",
  },
  {
    url: "/images/linkedin.png",
    isMobile: false,
    href: "https://www.linkedin.com/in/maya-wright-2b7922168/",
  },
  {
    url: "/images/github.png",
    isMobile: false,
    href: "https://github.com/MayaWright20",
  },
];

function Word({
  imageUrl,
  isMobile,
  ...props
}: {
  imageUrl: string;
  isMobile: boolean;
  [key: string]: any;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  // Load texture
  const texture = useLoader(TextureLoader, imageUrl);

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  // Tie component to the render-loop
  useFrame(() => {
    if (ref.current) {
      ref.current.scale.lerp(
        new THREE.Vector3(hovered ? 1.2 : 1, hovered ? 1.2 : 1, 1),
        0.1
      );
    }
  });

  return (
    <Billboard {...props}>
      <mesh
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("hi")}
      >
        <planeGeometry args={isMobile ? [1.284 / 2, 2.778 / 2] : [1.44, 0.9]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </Billboard>
  );
}

export function Cloud({ count = 4, radius = 5 }) {
  const images = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        const randomImage =
          imageUrls[Math.floor(Math.random() * imageUrls.length)];
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          randomImage,
          // imageUrls[j],
        ]);
      }
    return temp;
  }, [count, radius]);

  const router = Router;

  const onClick = (imageUrl: any) => {
    // router.
  };

  return images.map(([pos, item], index) => (
    <Word
      onClick={() => window.open((item as Item).href, "_blank")}
      key={index}
      position={pos}
      imageUrl={typeof item === "string" ? item : (item as Item).url}
      isMobile={typeof item === "string" ? true : (item as Item).isMobile}
    />
  ));
}
