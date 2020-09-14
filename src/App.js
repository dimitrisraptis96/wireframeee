import React, { useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ToastProvider } from "react-toast-notifications";

import Main from "./pages/main";

import AppLayout from "./components/Layout/AppLayout";
import Nav from "./components/Nav";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import NotificationBar from "./components/NotificationBar";

import theme from "./utils/theme";
import { history } from "./utils/history";
import "./utils/analytics";

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
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <ToastProvider
          components={{ Toast }}
          placement="bottom-center"
          autoDismissTimeout={1500}
        >
          <GlobalStyle />
          <AppLayout>
            <NotificationBar />
            <Nav themeMode={themeMode} setThemeMode={setThemeMode} />
            <Route path="/">
              <Main />
            </Route>
            <Footer />
          </AppLayout>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
