export default function DirectionalLights() {
  return (
    <>
      <directionalLight
        position={[15, -30, 15]}
        intensity={2}
        color={'white'}
      />
      <directionalLight
        position={[10, -20, 15]}
        intensity={2}
        color={'white'}
      />
      <directionalLight
        position={[-20, -50, -25]}
        intensity={2}
        color={'white'}
      />
      <directionalLight
        position={[10, -12, -25]}
        intensity={5}
        color={'white'}
      />
      <directionalLight
        position={[-10, -10, -10]}
        intensity={1}
        color={'white'}
      />
      <directionalLight
        position={[10, 1000, 20]}
        intensity={0.5}
        color={'white'}
      />
    </>
  );
}
