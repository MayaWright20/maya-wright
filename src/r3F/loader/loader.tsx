import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();
  // {progress.toFixed(1)} % loaded

  return (
    <Html center>
      <div
        style={{
          backgroundColor: 'black',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ color: 'whitesmoke' }}>{progress.toFixed(1)} % loaded</h1>
      </div>
    </Html>
  );
}
