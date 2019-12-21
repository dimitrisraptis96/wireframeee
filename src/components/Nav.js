import React from "react";
import { Flex, Box } from "rebass/styled-components";

import Link from "./Link";
import Logo from "./Logo";
import Toggle from "./Toggle";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { FiGift } from "react-icons/fi";
import styled from "styled-components";
import { rgba } from "polished";
import FigmaLogo from "./Icons/FigmaLogo";
import NewTag from "./NewTag";
import Announcement from "./Announcement";

const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &,
  &:link,
  &:active,
  &​:visited {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  &:hover,
  & > p:hover {
    color: ${props => rgba(props.theme.colors.primary, 0.6)};
  }

  font-size: 16px;

  & > svg {
    margin-right: 0.5rem;
  }
`;

function Nav({ themeMode, setThemeMode }) {
  return (
    <nav>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: "2rem 3rem" }}
      >
        <Link to="/">
          <Logo />
        </Link>

        <Flex>
          <ul style={{ listStyleType: "none" /*marginRight: "4rem"*/ }}>
            <Flex>
              {/* <li style={{ marginRight: "4rem" }}>
                <Link to="/about">
                  <b>About</b>
                </Link>
              </li> */}
              <li style={{ marginRight: "4rem" }}>
                <Announcement />
              </li>
              <li>
                {/* <Link to="/support"> */}
                <Anchor
                  href="https://www.buymeacoffee.com/dmraptis"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FiGift />
                  <b>Support</b>
                </Anchor>
                {/* </Link> */}
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
