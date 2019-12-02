import React, { useState } from "react";
import styled from "styled-components";

import { Button, Flex, Heading } from "rebass/styled-components";
import RangeInput from "../components/RangeInput";
import { FiRefreshCw, FiDownload } from "react-icons/fi";
import { rgba } from "polished";

import ColorOptions from "../components/ColorOptions";
import SelectInput from "../components/SelectInput";
import RightAlignIcon from "./Icons/RightAlignIcon";
import CenterAlignIcon from "./Icons/CenterAlignIcon";
import LeftAlignIcon from "./Icons/LeftAlignIcon";

const Card = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 8px 16px ${props => rgba(props.theme.colors.primary, 0.3)};
  border-radius: 8px;
`;

const H2 = styled.h2`
  text-align: left;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

function download(svg) {
  const anchorEl = document.createElement("a");
  const file = new Blob([svg], { type: "image/svg+xml" });
  anchorEl.href = URL.createObjectURL(file);
  anchorEl.download = "WireFramer.svg";
  document.body.appendChild(anchorEl);
  anchorEl.click();
}

const OptionsCard = ({
  alignment,
  setAlignment,
  radius,
  setRadius,
  lines,
  setLines,
  words,
  setWords,
  height,
  setHeight,
  spacing,
  setSpacing,
  svgString,
  refreshState,
  updateColors
}) => {
  return (
    <Card>
      <H2>Take more control...</H2>
      <SelectInput
        label="Align"
        name="align"
        options={[
          { value: 0, name: "Left", icon: <LeftAlignIcon /> },
          { value: 1, name: "Center", icon: <CenterAlignIcon /> },
          { value: 2, name: "Right", icon: <RightAlignIcon /> }
        ]}
        onChange={setAlignment}
        value={alignment}
      />
      <RangeInput
        label="Radius"
        name="radius"
        min={0}
        max={Math.ceil(height / 2)}
        onChange={e => setRadius(e.target.value)}
        value={radius}
      />
      <RangeInput
        label="Words"
        name="words"
        min={0}
        max={8}
        onChange={e => setWords(e.target.value)}
        value={words}
      />
      <RangeInput
        label="Lines"
        name="lines"
        min={0}
        max={10}
        onChange={e => setLines(e.target.value)}
        value={lines}
      />
      <RangeInput
        label="Height"
        name="height"
        min={4}
        max={20}
        onChange={e => setHeight(e.target.value)}
        value={height}
      />
      <RangeInput
        label="Spacing"
        name="spacing"
        min={4}
        max={20}
        onChange={e => setSpacing(e.target.value)}
        value={spacing}
      />

      <ColorOptions updateColors={updateColors} />

      <Flex>
        <Button variant="outline" width={1 / 2} mr={2} onClick={refreshState}>
          <FiRefreshCw size={14} style={{ marginRight: "0.5rem" }} />
          Refresh
        </Button>
        {/* <a
          href={svgString}
          target="_blank"
          title="Download Wireframer SVG"
          download="wireframer.svg"
        > */}
        <Button
          variant="primary"
          width={1 / 2}
          pt={3}
          pb={3}
          onClick={() => download(svgString)}
        >
          <FiDownload size={14} style={{ marginRight: "0.5rem" }} />
          Download
        </Button>
        {/* </a> */}
      </Flex>
    </Card>
  );
};

export default OptionsCard;
