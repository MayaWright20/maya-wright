/* eslint-disable @typescript-eslint/no-explicit-any */

import { Styled_Container, Styled_CircleWrapper } from './styles';
import { COLORS } from '@/app/constants/colors';
import Circle from '../circle/circle';

export default function Carousel({
  onClick,
  isActive,
  items,
  innerColor = 'transparent',
  middleColor = 'transparent',
  outterColor = 'transparent',
  outterHeight = '20px',
  vertical = false,
  paddingInline,
  paddingBlock,
  tabIndex,
  ariaLabel,
}: {
  innerColor?: string;
  middleColor?: string;
  outterColor?: string;
  outterHeight?: string;
  onClick: (index: number, ...args: any[]) => void;
  isActive: number;
  items: Array<any>;
  vertical?: boolean;
  paddingInline?: string;
  paddingBlock?: string;
  tabIndex: any;
  ariaLabel: string[];
}) {
  return (
    <Styled_Container
      $paddingBlock={paddingBlock}
      $paddingInline={paddingInline}
      $vertical={vertical}
    >
      <div className="container">
        {items.map((_: any, index: number) => {
          return (
            <Styled_CircleWrapper key={index}>
              <div
                tabIndex={tabIndex}
                aria-label={ariaLabel[index]}
                role="button"
                onKeyDown={(event, ...args) => {
                  if ((event.key === 'Enter' || event.key === ' ') && onClick) {
                    onClick(index, ...args);
                  }
                }}
              >
                <Circle
                  key={index}
                  onClick={(...args) => onClick(index, ...args)}
                  innerColor={
                    index === isActive ? innerColor : `${COLORS.light_blue}`
                  }
                  middleColor={middleColor}
                  outterColor={
                    index === isActive ? outterColor : `${COLORS.light_blue}`
                  }
                  outterHeight={outterHeight}
                />
              </div>
            </Styled_CircleWrapper>
          );
        })}
      </div>
    </Styled_Container>
  );
}
