import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./utils/theme";
import AppLayout from "./components/Layout/AppLayout";
import { ToastProvider } from "react-toast-notifications";
import Toast from "./components/Toast";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Muli", sans-serif;
    margin: 0;  
  }
  html {
    background-color: #fff
  }
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ToastProvider
          components={{ Toast }}
          placement="bottom-center"
          autoDismissTimeout={1500}
        >
          <GlobalStyle />
          <AppLayout>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </AppLayout>{" "}
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
