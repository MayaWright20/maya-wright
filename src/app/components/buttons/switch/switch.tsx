/* eslint-disable @typescript-eslint/no-explicit-any */

import { COLORS } from '@/app/constants/colors';
import Circle from '../../circle/circle';
import { Styled_CircleWrapper, Styled_Container } from './styles';

export default function Switch({
  onClick,
  isActive,
  items,
  innerColor = 'transparent',
  middleColor = 'transparent',
  outterColor = 'transparent',
  outterHeight = '20px',
  vertical = false,
  paddingBlock,
}: {
  innerColor?: string;
  middleColor?: string;
  outterColor?: string;
  outterHeight?: string;
  onClick: (index: number, ...args: any[]) => void;
  isActive: number;
  items: Array<any>;
  vertical?: boolean;
  paddingBlock?: string;
}) {
  return (
    <Styled_Container $paddingBlock={paddingBlock} $vertical={vertical}>
      <div className="container">
        {items.map((_: any, index: number) => {
          return (
            <Styled_CircleWrapper key={index}>
              <div
                onClick={(...args) => onClick(index, ...args)}
                className="container-circle"
              >
                <Circle
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
