import { Font_AtkinsonHyperlegible } from '@/utils/fonts/global-fonts';
import { Styled_Container } from './style';
import { useEffect, useRef } from 'react';

interface Props {
  isPageLoaded: boolean;
  onClick: () => void;
}

export default function PageLabel({ isPageLoaded, onClick }: Props) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = 'Maya   Wright ~ Maya   Wright ~ Maya   Wright ~ ';
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
    <Styled_Container $isPageLoaded={isPageLoaded} onClick={onClick}>
      <div className="circle">
        <div ref={textRef} className="text" />
      </div>
    </Styled_Container>
  );
}
