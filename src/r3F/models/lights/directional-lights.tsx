const DAYLIGHT_COLOR = 'rgb(255, 255, 255)';
const LIGHTS_ATTRIBUTES: {
  position: [number, number, number];
  intensity: number;
  color: string;
}[] = [
  {
    position: [15, -30, 15],
    intensity: 2,
    color: 'rgb(45, 106, 36)',
  },
  {
    position: [10, -20, 15],
    intensity: 2,
    color: 'rgb(69, 0, 133)',
  },
  {
    position: [-20, -50, -25],
    intensity: 2,
    color: 'rgb(1, 127, 62)',
  },
  {
    position: [10, -12, -25],
    intensity: 2,
    color: 'rgb(1, 99, 101)',
  },
  {
    position: [-10, -10, -10],
    intensity: 3,
    color: 'rgb(132, 0, 0)',
  },
  {
    position: [10, 1000, 20],
    intensity: 2,
    color: 'rgb(91, 3, 99)',
  },
  {
    position: [-20, 0, 10],
    intensity: 1.4,
    color: 'rgb(128, 1, 77)',
  },
  {
    position: [0, 0, 1000],
    intensity: 1,
    color: 'rgb(8, 129, 91)',
  },
  {
    position: [10, -10, 0],
    intensity: 1,
    color: 'rgb(2, 99, 33)',
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
