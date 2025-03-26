import { useContext, useEffect, useRef } from 'react';
import { Styled_Circle_Wrapper, Styled_Container } from './style';
import { IsDaylightThemeContext } from '@/app/context/themes/isDaylightThemeContext';
import { COLORS } from '@/app/constants/colors';

const CIRCLE_COUNT = 30;
const circlesArray = Array.from({ length: CIRCLE_COUNT });

export default function MouseFollower() {
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positions = useRef(Array(CIRCLE_COUNT).fill({ x: 0, y: 0 }));

  const isDaylightTheme = useContext(IsDaylightThemeContext);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positions.current[0] = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      for (let i = CIRCLE_COUNT - 1; i > 0; i--) {
        positions.current[i] = {
          x: positions.current[i - 1].x,
          y: positions.current[i - 1].y,
        };
      }

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          circle.style.transform = `translate(${
            positions.current[index].x - 12
          }px, ${positions.current[index].y - 12}px)`;
        }
      });
      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);

  return (
    <Styled_Container>
      {circlesArray.map((_, index) => (
        <Styled_Circle_Wrapper
          key={index}
          ref={(el) => {
            circleRefs.current[index] = el;
          }}
          $index={index}
          $circleColor={
            isDaylightTheme
              ? `${COLORS.daylight_theme_green}`
              : `${COLORS.night_time_theme_pink}`
          }
        />
      ))}
    </Styled_Container>
  );
}
