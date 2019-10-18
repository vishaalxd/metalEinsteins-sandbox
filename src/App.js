import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Themes from "./styles/themes";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <main className="app-wrapper">
        <Routes />
      </main>
    </ThemeProvider>
  );
}

export default App;
