/* eslint-disable no-unused-vars */
import { FormEvent, useMemo, useState } from "react";

import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";
import { IconSortAscending } from "../../components/Icons";
import { ListCards } from "../../components/ListCards";

import logoPokedex from "../../assets/logoPokedex.svg";
import { usePokemons } from "../../hooks/usePokemons";
import { PokemonType } from "../../../models/PokemonType";
import { Container, Header, LoadingMoreButton, Logo } from "./styles";
import { Loading, LoadingMore } from "../../components/Loading";

export function Search() {
  const [search, setSearch] = useState("");
  const [loadingMore, setLoadingMore] = useState(0);

  const { pokemons, loading } = usePokemons(loadingMore);

  const loadingPokemons = pokemons.length === 0;
  const showButtonLoadingMore = pokemons.length > 1;

  const cards = useMemo(
    () =>
      pokemons
        .map(({ id, name, types, sprites }) => ({
          id,
          name,
          urlImage: sprites.other.dream_world.front_default,
          type: types[0].type.name as PokemonType,
        }))
        .sort((a, b) =>
          a.id
            .toString()
            .localeCompare(b.id.toString(), undefined, { numeric: true })
        ),
    [pokemons]
  );

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
            onClear={() => console.log(search)}
          />
        </form>

        {loadingPokemons ? <Loading /> : <ListCards cards={cards} />}

        {showButtonLoadingMore && (
          <LoadingMoreButton>
            {loading ? (
              <LoadingMore />
            ) : (
              <button
                onClick={() => setLoadingMore(loadingMore + 1)}
                type="button"
              >
                Carregar Mais
              </button>
            )}
          </LoadingMoreButton>
        )}
      </Container>
    </Wrapper>
  );
}
