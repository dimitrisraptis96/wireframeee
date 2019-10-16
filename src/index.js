import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [radius, setRadius] = useState(2);
  const [lines, setLines] = useState(3);
  const [words, setWords] = useState(0);
  const [height, setHeight] = useState(12);

  console.log(Array(lines).fill());

  const rects = new Array(lines).fill().map((x, i) => {
    return (
      <rect
        // x={200 * i + 8 * i}
        y={height * i + 8 * i}
        fill="red"
        width={getRandom(30, 100)}
        height={height}
        rx={radius}
        ry={radius}
      />
    );
  });

  return (
    <div className="App">
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
      </div>
      <div>
        <label>Max Words per line: </label>
        <input
          id="words"
          type="range"
          min={0}
          max={8}
          step={1}
          onChange={e => setWords(e.target.value)}
          value={words}
        />
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
      </div>

      <div style={{ margin: "4rem" }} />

      <svg width="200" height={height * lines + 8 * lines}>
        {rects.map((rect, index) => (
          <g key={index}>{rect}</g>
        ))}
      </svg>
    </div>
  );
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + min)) + min;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
