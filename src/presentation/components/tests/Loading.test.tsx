import { render } from "@testing-library/react";
import { Loading, LoadingMore } from "../Loading";

describe("Loading", () => {
  it("should be able render Loading and Loading More component correctly", () => {
    expect(render(<Loading />)).toBeTruthy();
    expect(render(<LoadingMore />)).toBeTruthy();
  });
});
