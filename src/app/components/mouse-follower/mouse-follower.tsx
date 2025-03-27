import { useEffect, useRef } from 'react';
import { Styled_Circle_Wrapper, Styled_Container } from './style';
import { COLORS } from '@/app/constants/colors';
import { usePersistStore } from '@/app/store/store';

const CIRCLE_COUNT = 30;
const circlesArray = Array.from({ length: CIRCLE_COUNT });

export default function MouseFollower() {
  const { isDaylightTheme } = usePersistStore();

  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positions = useRef(Array(CIRCLE_COUNT).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let x, y;
      if (e instanceof TouchEvent && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
      }
      positions.current[0] = { x, y };
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      for (let i = CIRCLE_COUNT - 1; i > 0; i--) {
        positions.current[i] = { ...positions.current[i - 1] };
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
