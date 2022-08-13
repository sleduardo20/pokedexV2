import { Pokemon } from "../../../../models/PokemonType";
import { renderWithTheme } from "../../../utils/tests";
import { Details } from "../Details";

describe("Details", () => {
  const props = {} as Pokemon;
  it("should be able render Details page correctly", () => {
    expect(renderWithTheme(<Details {...props} />)).toBeTruthy();
  });
});
