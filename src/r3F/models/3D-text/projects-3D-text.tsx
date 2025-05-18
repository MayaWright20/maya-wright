import { Center, Text3D } from '@react-three/drei';
import { COLORS } from '@/constants/colors';
import { usePersistStore } from '@/store/store';

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

export default function Projects3DText() {
  const { isDaylightTheme } = usePersistStore();
  return (
    <Center top>
      <Text3D font="/Inter_Bold.json" {...textOptions}>
        Projects
        {isDaylightTheme && <meshPhongMaterial color={COLORS.dark_green} />}
        {!isDaylightTheme && <meshNormalMaterial />}
      </Text3D>
    </Center>
  );
}
