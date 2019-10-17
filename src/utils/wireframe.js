import React, { useState } from "react";
import { getRandomInt, createArrayFromInt } from "./helpers";

const RECTANGLE_MIN_WIDTH = 10;
const RECTANGLE_MAX_WIDTH = 80;
const COLOR = "#aaa";

export function getRandomWidthsArray(lines, words) {
  return createArrayFromInt(lines).map(() =>
    createArrayFromInt(getRandomInt(1, words)).map(() =>
      getRandomInt(RECTANGLE_MIN_WIDTH, RECTANGLE_MAX_WIDTH)
    )
  );
}

function rectangle(x = 0, y = 0, width, height, color = COLOR, radius = 0) {
  return (
    <rect x={x} y={y} fill={color} width={width} height={height} rx={radius} />
  );
}

export function createLine(
  rowNum,
  words,
  spacing,
  height,
  radius,
  widthArray = []
) {
  let lastWidth = 0;
  let totalWidth = 0;
  const firstRow = rowNum === 0;
  const numOfWords = firstRow ? words : getRandomInt(1, words);

  const rects = createArrayFromInt(widthArray.length).map((x, i) => {
    const currentWidth = widthArray[i];
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
