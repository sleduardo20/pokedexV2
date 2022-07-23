import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../local/styles/global";
import { theme } from "../local/styles/theme";
import { Search } from "./pages/search/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Search />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
