import React, { useState } from "react";
import { getRandomInt, createArrayFromInt } from "./helpers";

const RECTANGLE_MIN_WIDTH = 10;
const RECTANGLE_MAX_WIDTH = 80;
const COLOR = "#aaa";

export function getRandomWidthsArray(lines, words, min) {
  console.log(min);

  console.log(getRandomInt(min, RECTANGLE_MAX_WIDTH));

  return createArrayFromInt(lines).map(() =>
    createArrayFromInt(getRandomInt(1, words)).map(() =>
      getRandomInt(min, RECTANGLE_MAX_WIDTH)
    )
  );
}

export function calculateMaxWidth(structure) {
  if (structure.length === 0) return;

  const lines = structure.map(line => line.reduce((a, b) => a + b, 0));
  const max = lines.reduce((a, b) => Math.max(a, b));

  return max;
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

export function createStringSVG({
  words,
  height,
  spacing,
  structure,
  color,
  radius
}) {
  return `
    <svg
      width="${calculateMaxWidth(structure) + spacing * words}"
      height="${height * structure.length + spacing * structure.length}"
    >
      ${createArrayFromInt(structure.length)
        .map((x, rowIndex) => {
          let lastWidth = 0;
          let totalWidth = 0;

          return `<g>
            ${createArrayFromInt(structure[rowIndex].length)
              .map((y, columnIndex) => {
                const currentWidth = structure[rowIndex][columnIndex];
                totalWidth += lastWidth;
                lastWidth = currentWidth;

                return `
                <rect 
                  x="${totalWidth + columnIndex * spacing}"
                  y="${height * rowIndex + spacing * rowIndex}"
                  fill="${color}"
                  width="${currentWidth}"
                  height="${height}"
                  rx="${radius}"
                />
              `;
              })
              .join(" ")}
          </g>`;
        })
        .join(" ")}
    </svg>
  `;
}
