import { FormEvent, useMemo, useState } from "react";

import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";
import { IconSortAscending } from "../../components/Icons";
import { ListCards } from "../../components/ListCards";

import logoPokedex from "../../assets/logoPokedex.svg";
import { usePokemons } from "../../hooks/usePokemons";
import { PokemonType } from "../../../models/PokemonType";
import { Container, Header, Logo } from "./styles";

export function Search() {
  const [search, setSearch] = useState("");
  const [loadingMore, setLoadingMore] = useState(0);

  const { pokemons, loading } = usePokemons(loadingMore);

  console.log(loading, pokemons);

  const cards = useMemo(
    () =>
      pokemons.map(({ id, name, types, sprites }) => ({
        id,
        name,
        urlImage: sprites.other.dream_world.front_default,
        type: types[0].type.name as PokemonType,
      })),
    [pokemons]
  );

  const handleClearSearch = () => {
    console.log("clear value");
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo>
            <img src={logoPokedex} alt="Logo Pokedex" />
          </Logo>

          <IconSortAscending size={24} />
        </Header>
        <form onSubmit={handleOnSubmit}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={handleClearSearch}
          />
        </form>

        <ListCards cards={cards} />
        <button type="button" onClick={() => setLoadingMore(loadingMore + 1)}>
          loading more
        </button>
      </Container>
    </Wrapper>
  );
}
