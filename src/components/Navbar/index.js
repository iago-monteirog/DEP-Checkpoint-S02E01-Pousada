import React from "react";
import { Menu } from "react-feather";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Navbar__logo"></div>
        <div className="Navbar__hamburguer-menu">
          <Menu />
        </div>
        <div className="MenuLinks">
          <div className="MenuLinks__container">
            <div className="MenuLinks__link">
              <a href="#">Pagina inicial</a>
            </div>
            <div className="MenuLinks__link">
              <a href="#">Sobre</a>
            </div>
            <div className="MenuLinks__link">
              <a href="#">Quartos</a>
            </div>
            <div className="MenuLinks__link">
              <a href="#">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
