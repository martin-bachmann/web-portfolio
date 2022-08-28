import React from "react";
import HeaderButton from "../components/HeaderButton";

function Header() {
  // Criar botões de github e linkedin aqui?
  return (
    <header>
      <h2>Martin Bachmann</h2>
      <nav>
        <HeaderButton>Sobre mim</HeaderButton>
        <HeaderButton>Formação</HeaderButton>
        <HeaderButton>Tecnologias</HeaderButton>
        <HeaderButton>Projetos</HeaderButton>
      </nav>
    </header>
  );
}

export default Header;
