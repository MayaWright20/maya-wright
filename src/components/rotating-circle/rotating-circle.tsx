import { COLORS } from '@/constants/colors';
import { Styled_Container_Rotating } from './style';
import { useEffect, useRef } from 'react';
import { usePersistStore } from '@/store/store';

interface Props {
  isPageLoaded?: boolean;
  onClick?: () => void;
  text: string;
}

export default function RotatingCircle({ isPageLoaded, onClick, text }: Props) {
  const isDaylightTheme = usePersistStore((state) => state.isDaylightTheme);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const radius = 40; // Distance from center

      // Clear existing content
      textElement.innerHTML = '';

      // Create spans for each character
      const chars = text.split('');
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;

        // Calculate angle for each character
        const angle = (i * 360) / chars.length;
        const radian = (angle * Math.PI) / 180;

        // Position character around the circle
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        span.style.position = 'absolute';
        span.style.left = '50%';
        span.style.top = '50%';
        span.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${
          angle + 90
        }deg)`;
        span.style.transformOrigin = 'center';

        textElement.appendChild(span);
      });
    }
  }, []);

  return (
    <Styled_Container_Rotating
      $is_daylight_theme={isDaylightTheme}
      $night_blue_white={COLORS.night_blue_white}
      $isPageLoaded={isPageLoaded ?? false}
      $bright_green={COLORS.bright_green}
      onClick={onClick}
    >
      <div className="circle">
        <div ref={textRef} className="text" />
      </div>
    </Styled_Container_Rotating>
  );
}
