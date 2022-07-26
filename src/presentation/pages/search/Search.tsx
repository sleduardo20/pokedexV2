/* eslint-disable no-unused-vars */
import { FormEvent, useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import { Container, Header, Logo } from "./styles";
import logoPokedex from "../../assets/logoPokedex.svg";
import { Input } from "../../components/Input";
import { IconSortAscending } from "../../components/Icons";
import { ListCards } from "../../components/ListCards";

import cardMock from "../../../mocks/card";

export function Search() {
  const [search, setSearch] = useState("");

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

        <ListCards cards={cardMock} />
      </Container>
    </Wrapper>
  );
}
