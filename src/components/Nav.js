import React from "react";
import { Link } from "react-router-dom";

import Toggle from "./Toggle";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

function Nav({ themeMode, setThemeMode }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div>
        <Toggle
          defaultChecked={themeMode === "dark" ? true : false}
          onChange={() => setThemeMode(!themeMode)}
          icons={{
            checked: (
              <img
                style={{ pointerEvents: "none" }}
                width="16"
                height="16"
                alt="moon"
                aria-hidden
                src={moon}
              />
            ),
            unchecked: (
              <img
                style={{ pointerEvents: "none" }}
                width="16"
                height="16"
                alt="sun"
                aria-hidden
                src={sun}
              />
            )
          }}
        />
      </div>
    </nav>
  );
}

export default Nav;
