/* eslint-disable @typescript-eslint/no-explicit-any */

import { GridContainer } from "./styles";

const MOBILE_BACKGROUND_WORDS: Record<number, string[]> = {
  // Arrays have to be in the same order as the emotions of the 3d head
  0: ["ANGER", "الغضب", "ความโกรธ", "憤怒", "गुस्सा"],
  1: ["KISS", "قبلة", "จูบ", "吻", "चुंबन"],
  2: ["AHHH", "محرج", "งุ่มง่าม", "尷尬的", "अजीब"],
  3: ["SAD", "حزين", "เศร้า", "傷心", "उदास"],
  4: ["WINK", "غمزة", "ขยิบตา", "眨眼", "मुखर"],
  5: ["SHOCK", "صدمة", "ช็อก", "震驚", "झटका"],
  100: ["MAYA", "مايا", "มายา", "瑪雅", "माया"],
};

export default function WordGridBackground({ cellIndex }: { cellIndex: any }) {
  return (
    <GridContainer>
      <div className="container-background">
        {Array.from({ length: 500 }).map((_, index) => (
          <div className="container-background-item" key={index}>
            <p
              style={{
                // THIS IS WHERE YOU NEED TO CHANGE THE WHITE TEXT THAT LIGHTS UP
                color: [
                  cellIndex === undefined
                    ? 100
                    : cellIndex === 0
                    ? 100
                    : cellIndex,
                ][Math.floor(Math.random() * 5)]
                  ? `rgb(${Math.floor(Math.random() * 250)},${Math.floor(
                      Math.random() * 250
                    )},${Math.floor(Math.random() * 250)})`
                  : "grey",
              }}
            >
              {
                MOBILE_BACKGROUND_WORDS[
                  cellIndex === undefined ? 100 : cellIndex
                ][Math.floor(Math.random() * 5)]
              }
            </p>
          </div>
        ))}
      </div>
    </GridContainer>
  );
}
