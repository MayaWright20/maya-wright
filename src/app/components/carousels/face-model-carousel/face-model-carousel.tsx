/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from "react";
import { Container } from "./styles";
import { HasScreenLoaded } from "@/app/context/loading/has-screen-loaded";

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
            >{`<`}</div>
            {modelActionsLength.map((value: any, index: number) => {
              return (
                <span key={index} onClick={() => actionIndex(index)}>
                  <div>
                    <div
                      style={{
                        backgroundColor: index === cellIndex ? "white" : "grey",
                      }}
                    ></div>
                  </div>
                </span>
              );
            })}
            <div
              className="container-buttons-mobile-next"
              onClick={() => actionIndex(cellIndex, false, true)}
            >{`>`}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
