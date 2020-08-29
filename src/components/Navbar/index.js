import React, { useState } from "react";
import { Menu } from "react-feather";
import classNames from "classnames";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    active ? setActive(false) : setActive(true);
  }

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Navbar__inside">
          <div className="Navbar__logo">
            <h1>Logo</h1>
          </div>
          <div onClick={toggleMenu} className="Navbar__hamburguer-menu">
            <Menu color="#eff4f9" />
          </div>
          <div
            className={classNames("MenuLinks", {
              active,
            })}
          >
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
      </div>
    </nav>
  );
}
