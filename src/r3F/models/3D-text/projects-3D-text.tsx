import { Center, Text3D } from "@react-three/drei";
import { COLORS } from "@/constants/colors";
import { usePersistStore } from "@/store/store";

const textOptions = {
  size: 0.15,
  height: 0.02,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 0.05,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 5,
};

export default function Projects3DText({ text }: { text: string }) {
  const { isDaylightTheme } = usePersistStore();
  return (
    <Text3D font="/Inter_Bold.json" {...textOptions}>
      {text}
    </Text3D>
  );
}
