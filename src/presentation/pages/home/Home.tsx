/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";
import { IconSortAlphabetical, IconSortNumeric } from "../../components/Icons";
import { ListCards } from "../../components/ListCards";

import logoPokedex from "../../assets/logoPokedex.svg";
import { usePokemons } from "../../hooks/usePokemons";
import { PokemonType } from "../../../models/PokemonType";
import {
  Container,
  Header,
  LoadingMoreButton,
  Logo,
  IconsOrder,
} from "./styles";
import { Loading, LoadingMore } from "../../components/Loading";
import { theme } from "../../../local/styles/theme";

export function Home() {
  const [search, setSearch] = useState("");
  const [loadingMore, setLoadingMore] = useState(0);
  const [orderNumeric, setOrderNumeric] = useState(true);

  const { pokemons, loading } = usePokemons(loadingMore);
  const loadingPokemons = pokemons.length === 0;
  const showButtonLoadingMore = pokemons.length > 1;

  const cards = useMemo(() => {
    const cardsFormated = pokemons.map(({ id, name, types, sprites }) => ({
      id,
      name,
      urlImage: sprites.other.dream_world.front_default,
      type: types[0].type.name as PokemonType,
    }));

    if (orderNumeric) {
      return cardsFormated.sort((a, b) =>
        a.id
          .toString()
          .localeCompare(b.id.toString(), undefined, { numeric: true })
      );
    }

    return cardsFormated.sort((a, b) => a.name.localeCompare(b.name));
  }, [pokemons, orderNumeric]);

  const filterCards =
    search.length > 0
      ? cards.filter(({ name }) => name.includes(search))
      : cards;

  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo>
            <img src={logoPokedex} alt="Logo Pokedex" />
          </Logo>
          <IconsOrder>
            <IconSortAlphabetical
              data-testid="icon-order-name"
              size={24}
              color={
                !orderNumeric
                  ? `${theme.colors.type.fighting}`
                  : `${theme.colors.type.dark}`
              }
              onClick={() => setOrderNumeric(false)}
            />
            <IconSortNumeric
              size={24}
              data-testid="icon-order-id"
              color={
                orderNumeric
                  ? `${theme.colors.type.fighting}`
                  : `${theme.colors.type.dark}`
              }
              onClick={() => setOrderNumeric(true)}
            />
          </IconsOrder>
        </Header>
        <form>
          <Input
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch("")}
          />
        </form>

        {loadingPokemons ? <Loading /> : <ListCards cards={filterCards} />}

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
