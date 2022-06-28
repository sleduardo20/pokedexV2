import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>World hold on.</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
