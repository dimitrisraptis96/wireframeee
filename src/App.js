import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import AppLayout from "./components/Layout/AppLayout";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
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
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
