/* eslint-disable no-unused-vars */
import { FormEvent, useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import { Container, Header, Logo, SectionCards } from "./styles";
import logoPokedex from "../../assets/logoPokedex.svg";

import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { IconSortAscending } from "../../components/Icons";

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
            <h1>Pokedex</h1>
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
        <SectionCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </SectionCards>
      </Container>
    </Wrapper>
  );
}
