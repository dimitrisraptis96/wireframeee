import React, { useState, useEffect } from "react";
import { Flex } from "rebass/styled-components";

import OptionsCard from "../components/OptionsCard";
import Preview from "../components/Preview";
import {
  calculateMaxWidth,
  createLine,
  getRandomWidthsArray,
  createStringSVG
} from "../utils/wireframe";
import { createArrayFromInt } from "../utils/helpers";

function Main() {
  const [radius, setRadius] = useState(2);
  const [lines, setLines] = useState(3);
  const [words, setWords] = useState(3);
  const [height, setHeight] = useState(12);
  const [spacing, setSpacing] = useState(4);
  const [structure, setStructure] = useState([]);
  const [svg, setSvg] = useState("");

  const refreshState = () =>
    setStructure(getRandomWidthsArray(lines, words, height));

  useEffect(() => {
    setStructure(getRandomWidthsArray(lines, words, height));
  }, [lines, words]);

  useEffect(() => {
    setSvg(
      createStringSVG({
        words,
        height,
        spacing,
        structure,
        color: "red",
        radius
      })
    );
  });

  const createSvgElement = () => {
    return (
      <svg
        width={calculateMaxWidth(structure) + spacing * words}
        height={height * lines + spacing * lines}
      >
        {createArrayFromInt(lines).map((row, index) => {
          return (
            <g key={index}>
              {createLine(
                index,
                words,
                spacing,
                height,
                radius,
                structure[index]
              ).map(rect => (
                <>{rect}</>
              ))}
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <Flex alignItems={"flex-start"} justifyContent="space-between" p={4}>
      <OptionsCard
        radius={radius}
        setRadius={setRadius}
        lines={lines}
        setLines={setLines}
        words={words}
        setWords={setWords}
        height={height}
        setHeight={setHeight}
        spacing={spacing}
        setSpacing={setSpacing}
        structure={structure}
        setStructure={setStructure}
        svg={svg}
        setSvg={setSvg}
        refreshState={refreshState}
      />

      <Preview svgElement={createSvgElement()} svgString={svg} />
    </Flex>
  );
}

export default Main;
