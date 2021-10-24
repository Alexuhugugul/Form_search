import "./App.css";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Form } from "./components/Form";
import { Page } from "./components/Page";
import { lightTheme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Page>
        <Form />
      </Page>
    </ThemeProvider>
  );
}

export default App;
