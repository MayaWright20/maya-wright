const LIGHT_COLOR = 'rgb(255, 255, 255)';

export default function DirectionalLights() {
  return (
    <>
      <directionalLight
        position={[15, -30, 15]}
        intensity={2}
        color={`${LIGHT_COLOR}`}
      />
      <directionalLight
        position={[10, -20, 15]}
        intensity={2}
        color={`${LIGHT_COLOR}`}
      />
      <directionalLight
        position={[-20, -50, -25]}
        intensity={1}
        color={`${LIGHT_COLOR}`}
      />
      <directionalLight
        position={[10, -12, -25]}
        intensity={2}
        color={`${LIGHT_COLOR}`}
      />
      <directionalLight
        position={[-10, -10, -10]}
        intensity={3}
        color={`${LIGHT_COLOR}`}
      />
      <directionalLight
        position={[10, 1000, 20]}
        intensity={2}
        color={`${LIGHT_COLOR}`}
      />
      <directionalLight
        position={[-20, 0, 10]}
        intensity={1.4}
        color={`${LIGHT_COLOR}`}
      />
      <directionalLight
        position={[0, 0, 1000]}
        intensity={1}
        color={`${LIGHT_COLOR}`}
      />
    </>
  );
}
