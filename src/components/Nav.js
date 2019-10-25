import React from "react";
import { Flex, Box } from "rebass/styled-components";

import Link from "./Link";
import Logo from "./Logo";
import Toggle from "./Toggle";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

function Nav({ themeMode, setThemeMode }) {
  return (
    <nav>
      <Flex justifyContent="space-between" style={{ padding: "2rem 3rem" }}>
        <Link to="/">
          <Logo />
        </Link>

        <Flex>
          <ul style={{ listStyleType: "none" /*marginRight: "4rem"*/ }}>
            <Flex>
              <li style={{ marginRight: "4rem" }}>
                <Link to="/about">
                  <b>About</b>
                </Link>
              </li>
              <li>
                <Link to="/support">
                  <b>Support</b>
                </Link>
              </li>
            </Flex>
          </ul>

          {/* <div>
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
          </div> */}
        </Flex>
      </Flex>
    </nav>
  );
}

export default Nav;
