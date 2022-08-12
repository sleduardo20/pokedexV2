import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../utils/tests";
import { Search } from "../search/Search";

jest.mock("../../hooks/usePokemons", () => ({
  usePokemons: jest.fn(() => ({
    pokemons: [
      {
        id: 1,
        name: "bulbasaur",
        base_experience: 65,
        weight: 69,
        height: 7,
        is_default: true,
        order: 1,
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        location_area_encounters: "",
        moves: [],
        past_types: [],
        species: {},
        sprites: {
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
          },
        },
        stats: [],
        types: [
          {
            type: {
              name: "grass",
            },
          },
        ],
      },
      {
        id: 2,
        name: "pikachu",
        base_experience: 64,
        weight: 69,
        height: 7,
        is_default: true,
        order: 1,
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        location_area_encounters: "",
        moves: [],
        past_types: [],
        species: {},
        sprites: {
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
            },
          },
        },
        stats: [],
        types: [
          {
            type: {
              name: "eletric",
            },
          },
        ],
      },
    ],
    loading: false,
  })),
}));

describe("Search page", () => {
  it("should be render page correctly", () => {
    expect(renderWithTheme(<Search />)).toBeTruthy();
  });

  it("should be able the search pokemon by name", () => {
    renderWithTheme(<Search />);

    userEvent.type(screen.getByRole("textbox"), "pikac");

    expect(screen.queryByText("bulbasaur")).not.toBeInTheDocument();
  });

  it("should be able clear field search", () => {
    renderWithTheme(<Search />);

    userEvent.type(screen.getByRole("textbox"), "pikac");

    userEvent.click(screen.getByTestId("icon-close"));

    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  it("should be able change order by id or name", () => {
    renderWithTheme(<Search />);

    userEvent.click(screen.getByTestId("icon-order-name"));
    userEvent.click(screen.getByTestId("icon-order-id"));

    expect(screen.getByText("pikachu")).toBeInTheDocument();
  });

  it("should be able loading more pokemons", async () => {
    renderWithTheme(<Search />);

    await waitFor(() => {
      userEvent.click(screen.getByText("Carregar Mais"));
    });
  });
});
