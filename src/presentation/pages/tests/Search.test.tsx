import { renderWithTheme } from "../../utils/tests";
import { Search } from "../search/Search";

describe("Search page", () => {
  it("should be render page correctly", () => {
    expect(renderWithTheme(<Search />)).toBeTruthy();
  });
});
