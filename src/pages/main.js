import React, { useState, useEffect } from "react";
import Layout from "../components/MainLayout";
import {
  calculateMaxWidth,
  createLine,
  getRandomWidthsArray
} from "../utils/wireframe";
import { createArrayFromInt } from "../utils/helpers";
import styled from "styled-components";

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

  const refreshState = () => setStructure(getRandomWidthsArray(lines, words));

  useEffect(() => {
    setStructure(getRandomWidthsArray(lines, words));
  }, [lines, words]);

  return (
    <Layout>
      <Options>
        <div>
          <label>Radius: </label>
          <input
            id="radius"
            type="range"
            min={0}
            max={height / 2}
            step={1}
            onChange={e => setRadius(e.target.value)}
            value={radius}
          />
          {radius}
        </div>
        <div>
          <label>Words: </label>
          <input
            id="words"
            type="range"
            min={0}
            max={8}
            step={1}
            onChange={e => setWords(e.target.value)}
            value={words}
          />
          {words}
        </div>
        <div>
          <label>Lines</label>
          <input
            id="lines"
            type="range"
            min={0}
            max={10}
            step={1}
            onChange={e => setLines(e.target.value)}
            value={lines}
          />
          {lines}
        </div>
        <div>
          <label>Height: </label>
          <input
            id="words"
            type="range"
            min={4}
            max={20}
            step={1}
            onChange={e => setHeight(e.target.value)}
            value={height}
          />
          {height}
        </div>
        <div>
          <label>Spacing: </label>
          <input
            id="spacing"
            type="range"
            min={4}
            max={20}
            step={1}
            onChange={e => setSpacing(e.target.value)}
            value={spacing}
          />
          {spacing}
        </div>
        <button onClick={refreshState}>Refresh</button>
      </Options>

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
    </Layout>
  );
}

export default Main;
