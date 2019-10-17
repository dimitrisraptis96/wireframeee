import React from "react";
import { getRandomInt, createArrayFromInt } from "./helpers";

const RECTANGEL_MIN_WIDTH = 10;
const RECTANGEL_MAX_WIDTH = 80;
const COLOR = "#aaa";

function rectangle(x = 0, y = 0, width, height, color = COLOR, radius = 0) {
  return (
    <rect x={x} y={y} fill={color} width={width} height={height} rx={radius} />
  );
}

export function createLine(rowNum, words, spacing, height, radius) {
  let lastWidth = 0;
  let totalWidth = 0;
  const firstRow = rowNum === 0;
  const numOfWords = firstRow ? words : getRandomInt(1, words);

  const rects = createArrayFromInt(numOfWords).map((x, i) => {
    const currentWidth = getRandomInt(RECTANGEL_MIN_WIDTH, RECTANGEL_MAX_WIDTH);
    totalWidth += lastWidth;
    lastWidth = currentWidth;

    return rectangle(
      totalWidth + i * spacing,
      height * rowNum + spacing * rowNum,
      currentWidth,
      height,
      COLOR,
      radius
    );
  });

  return rects;
}
