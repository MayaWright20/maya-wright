const DAYLIGHT_COLOR = 'rgb(255, 255, 255)';
const LIGHTS_ATTRIBUTES: {
  position: [number, number, number];
  intensity: number;
  color: string;
}[] = [
  {
    position: [15, -30, 15],
    intensity: 2,
    color: 'rgb(83, 198, 66)',
  },
  {
    position: [10, -20, 15],
    intensity: 2,
    color: 'rgb(132, 0, 255)',
  },
  {
    position: [-20, -50, -25],
    intensity: 1,
    color: 'rgb(0, 255, 123)',
  },
  {
    position: [10, -12, -25],
    intensity: 2,
    color: 'rgb(0, 251, 255)',
  },
  {
    position: [-10, -10, -10],
    intensity: 3,
    color: 'rgb(255, 0, 0)',
  },
  {
    position: [10, 1000, 20],
    intensity: 2,
    color: 'rgb(195, 9, 212)',
  },
  {
    position: [-20, 0, 10],
    intensity: 1.4,
    color: 'rgb(255, 0, 153)',
  },
  {
    position: [0, 0, 1000],
    intensity: 1,
    color: 'rgb(14, 238, 167)',
  },
];

export default function DirectionalLights({ isDaylightTheme }: any) {
  return (
    <>
      {LIGHTS_ATTRIBUTES.map((value, index) => (
        <directionalLight
          key={index}
          position={value.position}
          intensity={value.intensity}
          color={isDaylightTheme ? DAYLIGHT_COLOR : value.color}
        />
      ))}
    </>
  );
}
