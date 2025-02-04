/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from 'react';
import { Container } from './styles';
import { HasScreenLoaded } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '@/app/constants/colors';

export default function FaceModelCarousel({
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
    <Container $loaded={hasScreenLoaded}>
      <div className="container">
        <div className="container-buttons-mobile">
          <div className="container-buttons-mobile-background">
            <div
              className="container-buttons-mobile-next"
              onClick={() => actionIndex(cellIndex, true)}
            >{``}</div>
            {modelActionsLength.map((value: any, index: number) => {
              return (
                <span
                  style={{
                    backgroundColor:
                      index === cellIndex
                        ? 'rgb(100, 224, 255)'
                        : `${COLORS.light_blue}`,
                  }}
                  key={index}
                  onClick={() => actionIndex(index)}
                >
                  <div>
                    <div
                      style={{
                        backgroundColor:
                          index === cellIndex
                            ? 'rgb(255, 0, 187)'
                            : `${COLORS.light_blue}`,
                      }}
                    ></div>
                  </div>
                </span>
              );
            })}
            <div
              className="container-buttons-mobile-next"
              onClick={() => actionIndex(cellIndex, false, true)}
            >{``}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
