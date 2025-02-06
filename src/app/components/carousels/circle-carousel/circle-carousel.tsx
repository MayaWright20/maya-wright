/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from 'react';
import { Styled_Container, Styled_CircleWrapper } from './styles';
import { HasScreenLoaded } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '@/app/constants/colors';
import Circle from '../../circle/circle';

export default function CircleCarousel({
  actionIndex,
  cellIndex,
  modelActionsLength,
}: {
  actionIndex: any;
  cellIndex: any;
  modelActionsLength: any;
}) {
  const hasScreenLoaded = useContext(HasScreenLoaded);

  return (
    <Styled_Container $loaded={hasScreenLoaded}>
      <div className="container">
        {modelActionsLength.map((_: any, index: number) => {
          return (
            <Styled_CircleWrapper>
              <Circle
                key={index}
                onClick={() => actionIndex(index)}
                innerColor={
                  index === cellIndex
                    ? `${COLORS.fuchia_pink}`
                    : `${COLORS.light_blue}`
                }
                middleColor={`${COLORS.light_grey}`}
                outterColor={
                  index === cellIndex
                    ? `${COLORS.bright_blue}`
                    : `${COLORS.light_blue}`
                }
                outterHeight={'20px'}
              />
            </Styled_CircleWrapper>
          );
        })}
      </div>
    </Styled_Container>
  );
}
