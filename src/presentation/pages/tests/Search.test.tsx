import { render } from "@testing-library/react";
import { Search } from "../search/Search";

describe("Search page", () => {
  it("should be render page correctly", () => {
    expect(render(<Search />)).toBeTruthy();
  });
});
