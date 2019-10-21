import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./utils/theme";
import AppLayout from "./components/Layout/AppLayout";
import { ToastProvider } from "react-toast-notifications";
import Toast from "./components/Toast";
import Nav from "./components/Nav";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Work Sans", sans-serif;
    margin: 0;  
  }
  html {
    background-color: #fff
  }
`;

function App() {
  const [themeMode, setThemeMode] = useState("dark");

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
            <Nav themeMode={themeMode} setThemeMode={setThemeMode} />

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
