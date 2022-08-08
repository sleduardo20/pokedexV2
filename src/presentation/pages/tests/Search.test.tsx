import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { Search } from "../search/Search";
import { theme } from "../../../local/styles/theme";

export const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Search page", () => {
  it("should be render page correctly", () => {
    expect(renderWithTheme(<Search />)).toBeTruthy();
  });
});
