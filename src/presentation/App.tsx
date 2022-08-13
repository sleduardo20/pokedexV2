import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../local/styles/global";
import { theme } from "../local/styles/theme";
import { Home } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
