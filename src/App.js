import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import MetaTags from "react-meta-tags";

import Main from "./pages/main";
import About from "./pages/about";
import Support from "./pages/support";

import AppLayout from "./components/Layout/AppLayout";
import Nav from "./components/Nav";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

import theme from "./utils/theme";

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
          <MetaTags>
            <title>Wireframer | Flawless SVG text for your wireframes</title>
            <meta
              name="description"
              content="Flawless SVG text for your wireframes"
            />
            <meta property="og:title" content="Wireframer" />
            <meta
              property="og:image"
              content="https://storage.googleapis.com/resources-images/og-images/og-image.webp"
            />
          </MetaTags>
          <GlobalStyle />
          <AppLayout>
            <Nav themeMode={themeMode} setThemeMode={setThemeMode} />

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/support">
                <Support />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
            <Footer />
          </AppLayout>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
