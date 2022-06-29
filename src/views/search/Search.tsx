/* eslint-disable no-unused-vars */
import { FormEvent, useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import { Container, Header, Logo } from "./styles";
import logoPokedex from "../../assets/logoPokedex.svg";
import { IconSortAscending } from "../../model/Icons";
import { Input } from "../../components/Input";

export function Search() {
  const [search, setSearch] = useState("");
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
          <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
      </Container>
    </Wrapper>
  );
}
