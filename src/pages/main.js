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
import { ALIGNMENT_TYPES, createArrayFromInt } from "../utils/helpers";
import useWindowSize from "../hooks/useWindowSize";

function Main() {
  const [radius, setRadius] = useState(2);
  const [lines, setLines] = useState(3);
  const [words, setWords] = useState(3);
  const [height, setHeight] = useState(12);
  const [spacing, setSpacing] = useState(4);
  const [colors, setColors] = useState([]);
  const [structure, setStructure] = useState([]);
  const [alignment, setAlignment] = useState(ALIGNMENT_TYPES.LEFT);
  const [maxWidth, setMaxWidth] = useState(100);
  const [svg, setSvg] = useState("");
  const size = useWindowSize();

  const refreshState = () =>
    setStructure(getRandomWidthsArray(lines, words, height, colors));

  useEffect(() => {
    setStructure(getRandomWidthsArray(lines, words, height, colors));
  }, [lines, words, colors]);

  useEffect(() => {
    setMaxWidth(calculateMaxWidth(structure, words, spacing));
  }, [structure, spacing]);

  useEffect(() => {
    setSvg(
      createStringSVG({
        words,
        height,
        spacing,
        structure,
        radius,
        alignment,
        maxWidth
      })
    );
  });

  const updateColors = colors => setColors(colors);

  const createSvgElement = () => {
    return (
      <svg width={maxWidth} height={height * lines + spacing * lines}>
        {createArrayFromInt(lines).map((row, index) => {
          return (
            <g key={index}>
              {createLine(
                index,
                words,
                spacing,
                height,
                radius,
                structure[index],
                alignment,
                maxWidth
              ).map(rect => (
                <>{rect}</>
              ))}
            </g>
          );
        })}
      </svg>
    );
  };

  const isDesktop = size.width > 900;

  return (
    <Flex
      flexDirection={isDesktop ? "row" : "column-reverse"}
      alignItems={isDesktop ? "flex-start" : "center"}
      justifyContent="space-between"
      p={4}
      pt={0}
    >
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
        svgString={svg}
        setSvg={setSvg}
        refreshState={refreshState}
        updateColors={updateColors}
        alignment={alignment}
        setAlignment={setAlignment}
      />

      <Preview svgElement={createSvgElement()} svgString={svg} />
    </Flex>
  );
}

export default Main;
