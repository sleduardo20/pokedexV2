import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../local/styles/global";
import { theme } from "../local/styles/theme";
import { PokedexProvider } from "./contexts/usePokedex";
import { Router } from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PokedexProvider>
        <Router />
        <GlobalStyles />
      </PokedexProvider>
    </ThemeProvider>
  );
}

export default App;
