import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/MainLayout";
import {
  calculateMaxWidth,
  createLine,
  getRandomWidthsArray,
  createStringSVG
} from "../utils/wireframe";
import { createArrayFromInt } from "../utils/helpers";
import styled from "styled-components";
import { Box, Heading, Button } from "rebass/styled-components";
import RangeInput from "../components/RangeInput";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToasts } from "react-toast-notifications";
import getRandomInterjection from "interjection-js";

import { FiRefreshCw, FiDownload } from "react-icons/fi";

const Options = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const Preview = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: #fff;
  border: 2px dashed #aaa;
  border-radius: 8px;
`;

function Main() {
  const [radius, setRadius] = useState(2);
  const [lines, setLines] = useState(3);
  const [words, setWords] = useState(3);
  const [height, setHeight] = useState(12);
  const [spacing, setSpacing] = useState(4);
  const [structure, setStructure] = useState([]);
  const [svg, setSvg] = useState("");

  const { addToast } = useToasts();

  const refreshState = () => setStructure(getRandomWidthsArray(lines, words));

  useEffect(() => {
    setStructure(getRandomWidthsArray(lines, words));
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

  return (
    <Layout>
      <Options>
        <RangeInput
          label="Radius"
          name="radius"
          min={0}
          max={height / 2}
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
          label="Words"
          name="words"
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

        <Button variant="outline" width={1} mt={4} onClick={refreshState}>
          <FiRefreshCw size={14} style={{ marginRight: "0.5rem" }} />
          Refresh
        </Button>
        <Button
          variant="primary"
          width={1}
          mt={2}
          onClick={() => console.log(svg)}
        >
          <FiDownload size={14} style={{ marginRight: "0.5rem" }} />
          Download
        </Button>
      </Options>

      <CopyToClipboard
        text={svg}
        onCopy={() =>
          addToast(`${getRandomInterjection()}! Copied! 👏`, {
            appearance: "success",
            autoDismiss: true
          })
        }
      >
        <Preview>
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
        </Preview>
      </CopyToClipboard>
    </Layout>
  );
}

export default Main;
