import React, { useState } from "react";
import { Menu } from "react-feather";
import classNames from "classnames";
import { Link,NavLink } from "react-router-dom";

export default function Navbar(props) {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    active ? setActive(false) : setActive(true);
  }

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Navbar__inside">
          <div className="Navbar__logo">
            <Link to="/">
              <h1>Cative</h1>
            </Link>
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
                <NavLink activeClassName="active" exact to="/">
                  Pagina inicial
                </NavLink>
              </div>
              <div className="MenuLinks__link">
                <a href="/#sobre">Sobre</a>
              </div>
              <div className="MenuLinks__link">
                <NavLink activeClassName="active" exact to="/quartos">
                  Quartos
                </NavLink>
              </div>
              <div className="MenuLinks__link">
                <NavLink activeClassName="active" exact to="/contato">
                  Contato
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
