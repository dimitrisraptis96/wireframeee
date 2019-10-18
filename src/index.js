import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  calculateMaxWidth,
  createLine,
  getRandomWidthsArray
} from "./utils/wireframe";
import { createArrayFromInt } from "./utils/helpers";

import "./styles.css";

function App() {
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
    <div className="App">
      <div>
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
      </div>

      <div className="Preview">
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
      </div>
    </div>
  );
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
