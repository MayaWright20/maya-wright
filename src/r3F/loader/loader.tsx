import { COLORS } from '@/constants/colors';
import { usePersistStore } from '@/store/store';
import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();
  const { isDaylightTheme } = usePersistStore();

  return (
    <Html center>
      <div
        style={{
          backgroundColor: isDaylightTheme ? '#c8dae8' : 'black',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: isDaylightTheme ? COLORS.daylight_theme_green : 'whitesmoke',
          }}
        >
          {progress.toFixed(1)} % loaded
        </h1>
      </div>
    </Html>
  );
}
